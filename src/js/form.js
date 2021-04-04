import {Button, Input, Select, Textarea, InputFieldTitle} from "./classes.js";
import Request from "./request.js"
import Visit, {VisitCardiologist, VisitDentist, VisitTherapist} from "./visit.js"
import Filter from "./filter"

export default class Form {
    constructor(typeOfForm, visit, id, data) {
        this.visit = visit;
        this.id = id;
        this.data = data;

        this.e = document.createElement("form");

        if (typeOfForm === "login") {
            this.e.classList = "login-form";

            this.mailInput = new Input("email");
            this.e.append(this.mailInput);

            this.passwordInput = new Input("password");
            this.e.append(this.passwordInput);
 
            this.loginButton = new Button("login");
            this.e.append(this.loginButton);  

            this.errorNote = document.createElement("p");
            this.errorNote.className = "error-note";
            this.errorNote.innerText = "Неправильный e-mail или пароль";
            this.errorNote.style.visibility = "hidden";
            this.errorNote.style.opacity = "0";
            this.e.append(this.errorNote);


            this.e.addEventListener("submit", function(e) {
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
            return this.e;
        }
        if (typeOfForm === "createVisit") {
            this.e.classList = "createVisit-form";
            this.select = new Select("doctor")
            this.e.append(this.select);

            return this.e;
        }
        if (typeOfForm === "editVisit") {
            this.e.classList = "editVisit-form";

            if (this.data.doctor === "Cardiologist") {
                this.doctor = new InputFieldTitle("Doctor: ");
                this.doctor.insertAdjacentHTML("beforeend", `${this.data.doctor}`);
                this.urgency = new InputFieldTitle("Urgency: ");
                this.urgency.insertAdjacentHTML("beforeend", `${this.data.urgency}`);

                this.fullName = new Input("fullName");
                this.fullName.value = data.fullName;
                this.age = new Input("age");
                this.age.value = data.age;
                this.inputPurpose = new Input("purposeOfVisit");
                this.inputPurpose.value = data.purposeOfVisit;
                this.bloodPressure = new Input('bloodPressure');
                this.bloodPressure.value = data.bloodPressure;
                this.bodyMassIndex = new Input("bodyMassIndex");
                this.bodyMassIndex.value = data.bodyMassIndex;
                this.pastIllnesses = new Textarea("pastIllnesses");
                this.pastIllnesses.value = data.pastIllnesses;

                this.shortDescription = new Textarea("shortDescription");
                this.shortDescription.value = data.shortDescription;

                this.editVisitModalBtn = new Button("editVisitModalBtn");

                this.onEditVisitClickBound = this.onEditVisitClick.bind(this);
                this.e.addEventListener("submit", this.onEditVisitClickBound);

                this.e.append(this.doctor);
                this.e.append(this.urgency);
                this.e.append(new InputFieldTitle("Full name:"));
                this.e.append(this.fullName);
                this.e.append(new InputFieldTitle("Age:"));
                this.e.append(this.age);
                this.e.append(new InputFieldTitle("Purpose of visit:"));
                this.e.append(this.inputPurpose);
                this.e.append(new InputFieldTitle("Usual blood pressure:"));
                this.e.append(this.bloodPressure);
                this.e.append(new InputFieldTitle("Body mass index:"));
                this.e.append(this.bodyMassIndex);
                this.e.append(new InputFieldTitle("Past illnesses of cardiovascular system:"));
                this.e.append(this.pastIllnesses);
                this.e.append(new InputFieldTitle("Short description:"));
                this.e.append(this.shortDescription);
                this.e.append(this.editVisitModalBtn);

                return this.e;
            }

            if (this.data.doctor === "Dentist") {
                this.doctor = new InputFieldTitle("Doctor: ");
                this.doctor.insertAdjacentHTML("beforeend", `${this.data.doctor}`);
                this.urgency = new InputFieldTitle("Urgency: ");
                this.urgency.insertAdjacentHTML("beforeend", `${this.data.urgency}`);

                this.fullName = new Input("fullName");
                this.fullName.value = data.fullName;
                this.inputPurpose = new Input("purposeOfVisit");
                this.inputPurpose.value = data.purposeOfVisit;
                this.inputDateOfPrevVisit = new Input("dateOfPreviousVisit");
                this.inputDateOfPrevVisit.value = data.dateOfPreviousVisit;
                this.shortDescription = new Textarea("shortDescription");
                this.shortDescription.value = data.shortDescription;

                this.editVisitModalBtn = new Button("editVisitModalBtn");

                this.onEditVisitClickBound = this.onEditVisitClick.bind(this);
                this.e.addEventListener("submit", this.onEditVisitClickBound);

                this.e.append(this.doctor);
                this.e.append(this.urgency);
                this.e.append(new InputFieldTitle("Full name:"));
                this.e.append(this.fullName);
                this.e.append(new InputFieldTitle("Purpose of visit:"));
                this.e.append(this.inputPurpose);
                this.e.append(new InputFieldTitle("Date of previous visit:"));
                this.e.append(this.inputDateOfPrevVisit);
                this.e.append(new InputFieldTitle("Short description:"));
                this.e.append(this.shortDescription);
                this.e.append(this.editVisitModalBtn);
            }

            if (this.data.doctor === "Therapist") {
                this.doctor = new InputFieldTitle("Doctor: ");
                this.doctor.insertAdjacentHTML("beforeend", `${this.data.doctor}`);
                this.urgency = new InputFieldTitle("Urgency: ");
                this.urgency.insertAdjacentHTML("beforeend", `${this.data.urgency}`);

                this.fullName = new Input("fullName");
                this.fullName.value = data.fullName;
                this.age = new Input("age");
                this.age.value = data.age;
                this.inputPurpose = new Input("purposeOfVisit");
                this.inputPurpose.value = data.purposeOfVisit;
                this.shortDescription = new Textarea("shortDescription");
                this.shortDescription.value = data.shortDescription;

                this.editVisitModalBtn = new Button("editVisitModalBtn");

                this.onEditVisitClickBound = this.onEditVisitClick.bind(this);
                this.e.addEventListener("submit", this._onEditVisitClickBound);

                this.e.append(this.doctor);
                this.e.append(this.urgency);
                this.e.append(new InputFieldTitle("Full name:"));
                this.e.append(this.fullName);
                this.e.append(new InputFieldTitle("Age:"));
                this.e.append(this.age);
                this.e.append(new InputFieldTitle("Purpose of visit:"));
                this.e.append(this.inputPurpose);
                this.e.append(new InputFieldTitle("Short description:"));
                this.e.append(this.shortDescription);
                this.e.append(this.editVisitModalBtn);
            }
            return this.e;
        }

        if (typeOfForm === "doctorCardiologist") {
            this.e = document.querySelector(".createVisit-form");

            this.fullName = new Input("fullName");
            this.age = new Input("age");
            this.purposeOfVisit = new Input("purposeOfVisit");
            this.bloodPressure = new Input("bloodPressure");
            this.bodyMassIndex = new Input("bodyMassIndex");
            this.pastDiseases = new Textarea("pastDiseases");
            this.urgency = new Select("urgency");
            this.shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
            this.createVisitModalBtn = new Button("createVisitModalBtn");

            this.CreateVisitClickBound = this.onCreateVisit.bind(this);
            this.e.addEventListener("submit", this.CreateVisitClickBound);


            this.e.append(this.fullName);
            this.e.append(this.age);
            this.e.append(this.purposeOfVisit);
            this.e.append(this.bloodPressure);
            this.e.append(this.bodyMassIndex);
            this.e.append(this.pastDiseases);
            this.e.append(this.urgency);
            this.e.append(this.shortDiscriptionsOfVisit);
            this.e.append(this.createVisitModalBtn);
        }

        if (typeOfForm === "doctorDentist") {
            this.e = document.querySelector(".createVisit-form");

            this.fullName = new Input("fullName");
            this.purposeOfVisit = new Input("purposeOfVisit");
            this.urgency = new Select("urgency");
            this.dateOfPreviousVisit = new Input("dateOfPreviousVisit");
            this.shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
            this.createVisitModalBtn = new Button("createVisitModalBtn");

            this.CreateVisitClickBound = this.onCreateVisit.bind(this);
            this.e.addEventListener('submit', this.CreateVisitClickBound);

            this.e.append(this.fullName);
            this.e.append(this.purposeOfVisit);
            this.e.append(this.urgency);
            this.e.append(this.dateOfPreviousVisit);
            this.e.append(this.shortDiscriptionsOfVisit);
            this.e.append(this.createVisitModalBtn);
        }

        if (typeOfForm === "doctorTherapist") {
            this.e = document.querySelector(".createVisit-form");

            this.fullName = new Input("fullName");
            this.age = new Input("age");
            this.purposeOfVisit = new Input("purposeOfVisit");
            this.urgency = new Select("urgency");
            this.shortDiscriptionsOfVisit = new Textarea("shortDiscriptionsOfVisit");
            this.createVisitModalBtn = new Button("createVisitModalBtn");

            this.CreateVisitClickBound = this.onCreateVisit.bind(this);
            this.e.addEventListener("submit", this.CreateVisitClickBound);

            this.e.append(this.fullName);
            this.e.append(this.age);
            this.e.append(this.purposeOfVisit);
            this.e.append(this.urgency);
            this.e.append(this.shortDiscriptionsOfVisit);
            this.e.append(this.createVisitModalBtn);
        }
    }

    onCreateVisit(e) {
        e.preventDefault();

        let selectedDoctor = document.querySelector(".doctor-select").value;
        let selectedUrgency = document.querySelector(".urgency-select").value;

        let formData = new FormData(this.e);
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

    this.e.reset();
    }

    onEditVisitClick(e) {
        e.preventDefault();

        let formData = new FormData(this.e);
        formData = Object.fromEntries(formData);
        formData["doctor"] = this.data.doctor;
        formData["urgency"] = this.data.urgency;

        new Request("put", formData, this.id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.visit.updateValue(data, this.visit);
            })
            .catch(error => console.error(error));
    }
} 


