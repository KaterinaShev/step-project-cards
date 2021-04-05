import Form from "./form"

export class Textarea {
    constructor(typeOfTextarea) {
        this._elem = document.createElement("textarea");

        if (typeOfTextarea === "shortDiscriptionsOfVisit") {
            this._elem.classList = "textarea";
            this._elem.setAttribute("name", "shortDiscriptionsOfVisit");
            this._elem.setAttribute("placeholder", "Краткое описание визита");

            return this._elem;
        }
        if (typeOfTextarea === "pastDiseases") {
            this._elem.classList = "textarea";
            this._elem.setAttribute("name", "pastDiseases");
            this._elem.setAttribute("placeholder", "Перенесенные заболевания сердечно-сосудистой системы");
            this._elem.setAttribute("required", "required");

            return this._elem;
        }
    }
}

export class Button {
    constructor(typeOfButton) {
        this._elem = document.createElement("button");

        if (typeOfButton === "login") {
            this._elem.classList = "login-btn";
            this._elem.setAttribute("type", "submit");
            this._elem.innerText = "Войти";

            return this._elem;
        }

        if (typeOfButton === "createVisitModalBtn") {

            this._elem.classList = "create-visit-modal-btn";
            this._elem.setAttribute("type", "submit");
            this._elem.innerText = "Создать";
            
            return this._elem;
        }

        if (typeOfButton === "editVisitModalBtn") {

            this._elem.classList = "edit-visit-modal-btn";
            this._elem.setAttribute("type", "submit");
            this._elem.innerText = "Редактировать";
            
            return this._elem;
        }

        if (typeOfButton === "signIn") {

            this._elem.classList = "sign-in-btn"
            this._elem.innerHTML = "Войти"

            return this._elem;
        }

        if (typeOfButton === "createVisit") {

            this._elem.classList = "create-visit-btn"
            this._elem.innerHTML = "Создать визит"
            this._elem.style.display = "none";

            return this._elem;
        }

        if (typeOfButton === "editVisitButton") {

            this._elem.classList = "edit-visit-button"
            this._elem.innerHTML = "Редактировать"

            return this._elem;
        }

        if (typeOfButton === "removeVisitButton") {

            this._elem.classList = "remove-visit-button"
            this._elem.innerHTML = "Удалить визит"

            return this._elem;
        }
        if (typeOfButton === "showMoreButton") {

            this._elem.classList = "show-more-btn"
            this._elem.innerHTML = "Показать больше"

            return this._elem;
        }
        if (typeOfButton === "showLessButton") {

            this._elem.classList = "show-less-btn"
            this._elem.innerHTML = "Показать меньше"
            this._elem.classList.add("hidden");

            return this._elem;
        }
    }
}

export  class Input {
    constructor(typeOfInput) {
        this._elem = document.createElement("input");
        if (typeOfInput === "email") {
            this._elem.setAttribute("type", "text");
            this._elem.setAttribute("name", "email");
            this._elem.setAttribute("id", "email");
            this._elem.classList = "email-input";
            this._elem.setAttribute("required", "required");
            this._inputLabel = document.createElement("label");
            this._inputLabel.classList = "input-label";
            this._inputLabel.innerText = "E-mail";
            this._inputLabel.append(this._elem);

            return this._inputLabel;
        }

        if (typeOfInput === "password") {
            this._elem.setAttribute("type", "password");
            this._elem.setAttribute("name", "password");
            this._elem.setAttribute("id", "password");
            this._elem.classList.add("password-input");
            this._elem.setAttribute("required", "required");
            this._inputLabel = document.createElement("label");
            this._inputLabel.classList.add("input-label");
            this._inputLabel.innerText = "Password";
            this._inputLabel.append(this._elem);

            return this._inputLabel;
        }

        if (typeOfInput === "fullName") {
            this._elem.setAttribute("type", "text");
            this._elem.setAttribute("name", "fullName");
            this._elem.setAttribute("required", "required");
            this._elem.setAttribute("placeholder", "ФИО");
            this._elem.classList.add("one-line-input");

            return this._elem;
        }

        if (typeOfInput === "age") {
            this._elem.setAttribute("type", "number");
            this._elem.setAttribute("name", "age");
            this._elem.setAttribute("required", "required");
            this._elem.setAttribute("placeholder", "Возраст");
            this._elem.classList.add("one-line-input");
            

            this._checkAgeBind = this._checkAge.bind(this);
            this._elem.addEventListener("focusout", this._checkAgeBind);

            return this._elem;
        }

        if (typeOfInput === "purposeOfVisit") {
            this._elem.setAttribute("type", "text");
            this._elem.setAttribute("name", "purposeOfVisit");
            this._elem.setAttribute("required", "required");
            this._elem.setAttribute("placeholder", "Цель визита");
            this._elem.classList.add("one-line-input");

            return this._elem;
        }

        if (typeOfInput === "bloodPressure") {
            this._elem.setAttribute("type", "text");
            this._elem.setAttribute("name", "bloodPressure");
            this._elem.setAttribute("required", "required");
            this._elem.setAttribute("placeholder", "Обычное давление");
            this._elem.classList.add("one-line-input");

            return this._elem;
        }

        if (typeOfInput === "bodyMassIndex") {
            this._elem.setAttribute("type", "text");
            this._elem.setAttribute("name", "bodyMassIndex");
            this._elem.setAttribute("required", "required");
            this._elem.setAttribute("placeholder", "Индекс массы тела");
            this._elem.classList.add("one-line-input");

            return this._elem;
        }

        if (typeOfInput === "dateOfPreviousVisit") {
            this._elem.setAttribute("type", "text");
            this._elem.setAttribute("name", "dateOfPreviousVisit");
            this._elem.setAttribute("required", "required");
            this._elem.setAttribute("placeholder", "Дата последнего визита");
            this._elem.classList.add("one-line-input");

            return this._elem;
        }

        if (typeOfInput === "search") {
            this._elem.setAttribute("type", "text");
            this._elem.setAttribute("placeholder", "ФИО, доктор, описание");
            this._elem.classList.add("filter-live-search");

            return this._elem;
        }
    }

    _checkAge() {
        if (this._elem.value < 5)  {
            alert("Возраст должен быть не меньше 5 лет");
            this._elem.value = "";
        } else if (this._elem.value > 100) {
            alert("Возраст должен быть не больше 100 лет");
            this._elem.value = "";
        }
    }
}

export class Select {
    constructor(typeOfSelect) {
        if (typeOfSelect === "doctor") {
            this._elem = document.createElement("select");
            this._elem.classList = "doctor-select";
            this._elem.setAttribute("required", "required");
            this._elem.insertAdjacentHTML("afterbegin",
                `<option selected disabled value="">Доктор</option>
                 <option>Cardiologist</option>
                 <option>Dentist</option>
                 <option>Therapist</option>`);
                 
                 this._onDoctorSelectBind = this._onDoctorSelect.bind(this);
                 this._elem.addEventListener("change", this._onDoctorSelectBind);

                 return this._elem;
        } 
        
        if (typeOfSelect === "urgency") {
            this._elem = document.createElement("select");
            this._elem.classList = "urgency-select";
            this._elem.setAttribute("required", "required");
            this._elem.insertAdjacentHTML("afterbegin",
                `<option selected disabled value="">Срочность</option>
                 <option>Regular</option>
                 <option>Priority</option>
                 <option>Urgent</option>
            `)

            return this._elem;
        }
        if (typeOfSelect === "searchUrgency") {
            this._elem = document.createElement("select");
            this._elem.classList = "filter-select-urgency";
           
            return this._elem;
        }
        if (typeOfSelect === "searchStatus") {
            this._elem = document.createElement("select");
            this._elem.classList = "filter-select-status";
           
            return this._elem;
        }
    }
    _onDoctorSelect() {
        let selectedIndex = document.querySelector(".doctor-select").selectedIndex;
        let options = document.querySelector(".doctor-select").options;
        let selectedOption = options[selectedIndex].value;

        let createVisitForm = document.querySelector(".createVisit-form");

        while (createVisitForm.children.length > 2) {
            createVisitForm.removeChild(createVisitForm.lastChild);
        }

        switch (selectedOption) {

            case "Cardiologist":
                new Form("doctorCardiologist");
                break;
            case "Dentist":
                new Form("doctorDentist");
                break;
            case "Therapist":
                new Form("doctorTherapist");
                break;
        }
    }
}

export class InputFieldTitle {
    constructor(fieldName) {

        this._elem = document.createElement("span");
        this._elem.classList = "field-name";
        this._elem.innerText = fieldName;

        return this._elem;
    }
}
