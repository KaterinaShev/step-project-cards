import {Button, Input, Select, Textarea, InputFieldTitle} from "./classes.js";
import Request from "./request.js"
import Visit, {VisitCardiologist, VisitDentist, VisitTherapist} from "./visit.js"
import Filter from "./filter"

export default class Form {
    constructor(typeOfForm, visit, id, data) {
        this._visit = visit;
        this._id = id;
        this._data = data;
        // console.log(this._visit);

        this._elem = document.createElement("form");

        if (typeOfForm === "login") {
            this._elem.classList = "login-form";

            this._mailInput = new Input("email");
            this._elem.append(this._mailInput);

            this._passwordInput = new Input("password");
            this._elem.append(this._passwordInput);
 
            this._loginButton = new Button("login");
            this._elem.append(this._loginButton);  

            this._errorNote = document.createElement("p");
            this._errorNote.className = "error-note";
            this._errorNote.innerText = "Неправильный e-mail или пароль";
            this._errorNote.style.visibility = "hidden";
            this._errorNote.style.opacity = "0";
            this._elem.append(this._errorNote);


            this._elem.addEventListener("submit", function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                formData = Object.fromEntries(formData);

                new Request ("login", formData, null)

                    .then((token) => {
                        console.log(token);
                    
                            let signIn = document.querySelector(".sign-in-btn");
                            signIn.style.display = "none";
                            let createVisit = document.querySelector(".create-visit-btn");
                            createVisit.style.display = "block";
                            localStorage.setItem("token", token);
                            let modal = document.querySelector(".modal-dialog");
                            modal.remove();

                            new Promise((resolve, reject) => {
                                resolve(new Request("getAllVisits"));
                            }).then((data) => {
                                if (data.length !== 0) {
                                    Visit.renderAllVisits(data);
                                }
                            })
                            Filter.filterShow();
                    })
                    .catch(error => console.error(error));
                    this.reset();
            })
            return this._elem;
        }
        if (typeOfForm === "createVisit") {
            this._elem.classList = "createVisit-form";
            this._select = new Select("doctor")
            this._elem.append(this._select);

            return this._elem;
        }
        if (typeOfForm === "editVisit") {
            this._elem.classList = "editVisit-form";

            // console.log(this._visit);
            if (this._visit._data.doctor === "Cardiologist") {
                this._doctor = new InputFieldTitle("Доктор: ");
                this._doctor.insertAdjacentHTML("beforeend", `${this._visit._data.doctor}`);
                this._urgency = new InputFieldTitle("Срочность: ");
                this._urgency.insertAdjacentHTML("beforeend", `${this._visit._data.urgency}`);

                this._fullName = new Input("fullName");
                this._fullName.value = this._visit._data.fullName;
                this._age = new Input("age");
                this._age.value = this._visit._data.age;
                this._inputPurpose = new Input("purposeOfVisit");
                this._inputPurpose.value = this._visit._data.purposeOfVisit;
                this._bloodPressure = new Input("bloodPressure");
                this._bloodPressure.value = this._visit._data.bloodPressure;
                this._bodyMassIndex = new Input("bodyMassIndex");
                this._bodyMassIndex.value = this._visit._data.bodyMassIndex;
                this._pastDiseases = new Textarea("pastDiseases");
                this._pastDiseases.value = this._visit._data.pastDiseases;

                this._shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
                this._shortDiscriptionsOfVisit.value = this._visit._data.shortDiscriptionsOfVisit;

                this._editVisitModalBtn = new Button("editVisitModalBtn");

                this._editVisitClickBind = this._editVisitClick.bind(this);
                this._elem.addEventListener("submit", this._editVisitClickBind);

                this._elem.append(this._doctor);
                this._elem.append(this._urgency);
                this._elem.append(new InputFieldTitle("ФИО:"));
                this._elem.append(this._fullName);
                this._elem.append(new InputFieldTitle("Возраст:"));
                this._elem.append(this._age);
                this._elem.append(new InputFieldTitle("Цель визита:"));
                this._elem.append(this._inputPurpose);
                this._elem.append(new InputFieldTitle("Обычное давление:"));
                this._elem.append(this._bloodPressure);
                this._elem.append(new InputFieldTitle("Индекс массы тела:"));
                this._elem.append(this._bodyMassIndex);
                this._elem.append(new InputFieldTitle("Перенесенные заболевания сердечно-сосудистой системы:"));
                this._elem.append(this._pastDiseases);
                this._elem.append(new InputFieldTitle("Краткое описание визита:"));
                this._elem.append(this._shortDiscriptionsOfVisit);
                this._elem.append(this._editVisitModalBtn);

                return this._elem;
            }

            if (this._visit._data.doctor === "Dentist") {
                this._doctor = new InputFieldTitle("Доктор: ");
                this._doctor.insertAdjacentHTML("beforeend", `${this._visit._data.doctor}`);
                this._urgency = new InputFieldTitle("Срочность: ");
                this._urgency.insertAdjacentHTML("beforeend", `${this._visit._data.urgency}`);

                this._fullName = new Input("fullName");
                this._fullName.value = this._visit._data.fullName;
                this._inputPurpose = new Input("purposeOfVisit");
                this._inputPurpose.value = this._visit._data.purposeOfVisit;
                this._inputDateOfPrevVisit = new Input("dateOfPreviousVisit");
                this._inputDateOfPrevVisit.value = this._visit._data.dateOfPreviousVisit;
                this._shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
                this._shortDiscriptionsOfVisit.value = this._visit._data.shortDiscriptionsOfVisit;

                this._editVisitModalBtn = new Button("editVisitModalBtn");

                this._editVisitClickBind = this._editVisitClick.bind(this);
                this._elem.addEventListener("submit", this._editVisitClickBind);

                this._elem.append(this._doctor);
                this._elem.append(this._urgency);
                this._elem.append(new InputFieldTitle("ФИО:"));
                this._elem.append(this._fullName);
                this._elem.append(new InputFieldTitle("Цель визита:"));
                this._elem.append(this._inputPurpose);
                this._elem.append(new InputFieldTitle("Дата последнего визита:"));
                this._elem.append(this._inputDateOfPrevVisit);
                this._elem.append(new InputFieldTitle("Краткое описание визита:"));
                this._elem.append(this._shortDiscriptionsOfVisit);
                this._elem.append(this._editVisitModalBtn);
            }

            if (this._visit._data.doctor === "Therapist") {
                this._doctor = new InputFieldTitle("Доктор: ");
                this._doctor.insertAdjacentHTML("beforeend", `${this._visit._data.doctor}`);
                this._urgency = new InputFieldTitle("Срочность: ");
                this._urgency.insertAdjacentHTML("beforeend", `${this._visit._data.urgency}`);

                this._fullName = new Input("fullName");
                this._fullName.value = this._visit._data.fullName;
                this._age = new Input("age");
                this._age.value = this._visit._data.age;
                this._inputPurpose = new Input("purposeOfVisit");
                this._inputPurpose.value = this._visit._data.purposeOfVisit;
                this._shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
                this._shortDiscriptionsOfVisit.value = this._visit._data.shortDiscriptionsOfVisit;

                this._editVisitModalBtn = new Button("editVisitModalBtn");

                this._editVisitClickBind = this._editVisitClick.bind(this);
                this._elem.addEventListener("submit", this._editVisitClickBind);

                this._elem.append(this._doctor);
                this._elem.append(this._urgency);
                this._elem.append(new InputFieldTitle("ФИО:"));
                this._elem.append(this._fullName);
                this._elem.append(new InputFieldTitle("Возраст:"));
                this._elem.append(this._age);
                this._elem.append(new InputFieldTitle("Цель визита:"));
                this._elem.append(this._inputPurpose);
                this._elem.append(new InputFieldTitle("Краткое описание визита:"));
                this._elem.append(this._shortDiscriptionsOfVisit);
                this._elem.append(this._editVisitModalBtn);
            }
            return this._elem;
        }

        if (typeOfForm === "doctorCardiologist") {
            this._elem = document.querySelector(".createVisit-form");

            this._fullName = new Input("fullName");
            this._age = new Input("age");
            this._purposeOfVisit = new Input("purposeOfVisit");
            this._bloodPressure = new Input("bloodPressure");
            this._bodyMassIndex = new Input("bodyMassIndex");
            this._pastDiseases = new Textarea("pastDiseases");
            this._urgency = new Select("urgency");
            this._shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
            this._createVisitModalBtn = new Button("createVisitModalBtn");

            this._createVisitClickBind = this._createVisit.bind(this);
            this._elem.addEventListener("submit", this._createVisitClickBind);


            this._elem.append(this._fullName);
            this._elem.append(this._age);
            this._elem.append(this._purposeOfVisit);
            this._elem.append(this._bloodPressure);
            this._elem.append(this._bodyMassIndex);
            this._elem.append(this._pastDiseases);
            this._elem.append(this._urgency);
            this._elem.append(this._shortDiscriptionsOfVisit);
            this._elem.append(this._createVisitModalBtn);
        }

        if (typeOfForm === "doctorDentist") {
            this._elem = document.querySelector(".createVisit-form");

            this._fullName = new Input("fullName");
            this._purposeOfVisit = new Input("purposeOfVisit");
            this._urgency = new Select("urgency");
            this._dateOfPreviousVisit = new Input("dateOfPreviousVisit");
            this._shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
            this._createVisitModalBtn = new Button("createVisitModalBtn");

            this._createVisitClickBind = this._createVisit.bind(this);
            this._elem.addEventListener("submit", this._createVisitClickBind);

            this._elem.append(this._fullName);
            this._elem.append(this._purposeOfVisit);
            this._elem.append(this._urgency);
            this._elem.append(this._dateOfPreviousVisit);
            this._elem.append(this._shortDiscriptionsOfVisit);
            this._elem.append(this._createVisitModalBtn);
        }

        if (typeOfForm === "doctorTherapist") {
            this._elem = document.querySelector(".createVisit-form");

            this._fullName = new Input("fullName");
            this._age = new Input("age");
            this._purposeOfVisit = new Input("purposeOfVisit");
            this._urgency = new Select("urgency");
            this._shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
            this._createVisitModalBtn = new Button("createVisitModalBtn");

            this._createVisitClickBind = this._createVisit.bind(this);
            this._elem.addEventListener("submit", this._createVisitClickBind);

            this._elem.append(this._fullName);
            this._elem.append(this._age);
            this._elem.append(this._purposeOfVisit);
            this._elem.append(this._urgency);
            this._elem.append(this._shortDiscriptionsOfVisit);
            this._elem.append(this._createVisitModalBtn);
        }
    }

    _createVisit(e) {
        e.preventDefault();

        let selectedDoctor = document.querySelector(".doctor-select").value;
        let selectedUrgency = document.querySelector(".urgency-select").value;

        let formData = new FormData(this._elem);
        formData = Object.fromEntries(formData);
        formData["doctor"] = selectedDoctor;
        formData["urgency"] = selectedUrgency;

        new Request("post", formData, null)
        .then((data) => {
         console.log(data);
            let modal = document.querySelector(".modal-dialog");
            modal.remove();
            let noVisitsNotice = document.querySelector(".no-visits-notice");
            if (noVisitsNotice) {
                noVisitsNotice.remove()
            }

            switch (data.doctor) {
                case "Cardiologist":
                    new VisitCardiologist(data);
                    break;
                case "Dentist":
                    new VisitDentist(data);
                    break;
                case "Therapist":
                    new VisitTherapist(data);
                    break;
            }
        })
        .catch(error => console.error(error));

    this._elem.reset();
    }

    _editVisitClick(e) {
        e.preventDefault();

        let formData = new FormData(this._elem);
        formData = Object.fromEntries(formData);
        formData["doctor"] = this._visit._data.doctor;
        formData["urgency"] = this._visit._data.urgency;

        new Request("put", formData, this._visit._data.id)
            .then((response) => {
                let modal = document.querySelector(".modal-dialog");
                modal.remove();
                return response.json();
                
            })
            .then((data) => {
                this._visit.updateValue(data, this._visit);
                
            })
            .catch(error => console.error(error));
    }
} 


