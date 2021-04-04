import Form from "./form"

export class Textarea {
    constructor(typeOfTextarea) {
        this.e = document.createElement("textarea");
        if (typeOfTextarea === "shortDiscriptionsOfVisit") {
            this.e.classList = "textarea";
            this.e.setAttribute("name", "shortDiscriptionsOfVisit");
            this.e.setAttribute("placeholder", "Краткое описание визита");
            return this.e;
        }
        if (typeOfTextarea === "pastDiseases") {
            this.e.classList = "textarea";
            this.e.setAttribute("name", "pastDiseases");
            this.e.setAttribute("placeholder", "Перенесенные заболевания сердечно-сосудистой системы");
            this.e.setAttribute("required", "required");
            return this.e;
        }
    }
}

export class Button {
    constructor(typeOfButton) {
        this.e = document.createElement("button");

        if (typeOfButton === "login") {
            this.e.classList = "login-btn";
            this.e.setAttribute("type", "submit");
            this.e.innerText = "Войти";

            return this.e;
        }

        if (typeOfButton === "createVisitModalBtn") {

            this.e.classList = "create-visit-modal-btn";
            this.e.setAttribute("type", "submit");
            this.e.innerText = "Создать";
            
            return this.e;
        }

        if (typeOfButton === "editVisitModalBtn") {

            this.e.classList = "edit-visit-modal-btn";
            this.e.setAttribute("type", "submit");
            this.e.innerText = "Редактировать";
            
            return this.e;
        }

        // if (typeOfButton === "signIn") {

        //     this.e.classList = "btn_sign_in"
        //     this.e.innerHTML = "Sign in"

        //     return this.e;
        // }
    }
}

export  class Input {
    constructor(typeOfInput) {
        this.e = document.createElement('input');
        if (typeOfInput === "email") {
            this.e.setAttribute("type", "text");
            this.e.setAttribute("name", "email");
            this.e.setAttribute("id", "email");
            this.e.classList = "email-input";
            this.e.setAttribute("required", "required");
            this.inputLabel = document.createElement("label");
            this.inputLabel.classList = "input-label";
            this.inputLabel.innerText = "E-mail";
            this.inputLabel.append(this.e);

            return this.inputLabel;
        }

        if (typeOfInput === "password") {
            this.e.setAttribute("type", "password");
            this.e.setAttribute("name", "password");
            this.e.setAttribute("id", "password");
            this.e.classList.add("password-input");
            this.e.setAttribute("required", "required");
            this.inputLabel = document.createElement("label");
            this.inputLabel.classList.add("input-label");
            this.inputLabel.innerText = "Password";
            this.inputLabel.append(this.e);

            return this.inputLabel;
        }

        if (typeOfInput === "fullName") {
            this.e.setAttribute("type", "text");
            this.e.setAttribute("name", "fullName");
            this.e.setAttribute("required", "required");
            this.e.setAttribute("placeholder", "ФИО");
            this.e.classList.add("one-line-input");

            return this.e;
        }

        if (typeOfInput === "age") {
            this.e.setAttribute("type", "number");
            this.e.setAttribute("name", "age");
            this.e.setAttribute("required", "required");
            this.e.setAttribute("placeholder", "Возраст");
            this.e.classList.add("one-line-input");
            

            this.checkAgeBound = this.checkAge.bind(this);
            this.e.addEventListener("focusout", this.checkAgeBound);

            return this.e;
        }

        if (typeOfInput === "purposeOfVisit") {
            this.e.setAttribute("type", "text");
            this.e.setAttribute("name", "purposeOfVisit");
            this.e.setAttribute("required", "required");
            this.e.setAttribute("placeholder", "Цель визита");
            this.e.classList.add("one-line-input");

            return this.e;
        }

        if (typeOfInput === "bloodPressure") {
            this.e.setAttribute("type", "text");
            this.e.setAttribute("name", "bloodPressure");
            this.e.setAttribute("required", "required");
            this.e.setAttribute("placeholder", "Обычное давление");
            this.e.classList.add("one-line-input");

            return this.e;
        }

        if (typeOfInput === "bodyMassIndex") {
            this.e.setAttribute("type", "text");
            this.e.setAttribute("name", "bodyMassIndex");
            this.e.setAttribute("required", "required");
            this.e.setAttribute("placeholder", "Индекс массы тела");
            this.e.classList.add("one-line-input");

            return this.e;
        }

        if (typeOfInput === "dateOfPreviousVisit") {
            this.e.setAttribute("type", "text");
            this.e.setAttribute("name", "dateOfPreviousVisit");
            this.e.setAttribute("required", "required");
            this.e.setAttribute("placeholder", "Дата последнего визита");
            this.e.classList.add("one-line-input");

            return this.e;
        }
    }

    checkAge() {
        if (this.e.value < 5)  {
            alert("Возраст должен быть не меньше 5 лет");
            this.e.value = "";
        } else if (this.e.value > 100) {
            alert("Возраст должен быть не больше 100 лет");
            this.e.value = "";
        }
    }
}

export class Select {
    constructor(typeOfSelect) {
        if (typeOfSelect === "doctor") {
            this.e = document.createElement("select");
            this.e.classList = "doctor-select";
            this.e.setAttribute("required", "required");
            this.e.insertAdjacentHTML("afterbegin",
                `<option selected disabled value="">Доктор</option>
                 <option>Cardiologist</option>
                 <option>Dentist</option>
                 <option>Therapist</option>`)
                 this.onDoctorSelectBound = this.onDoctorSelect.bind(this);
                 this.e.addEventListener("change", this.onDoctorSelectBound);

                 return this.e;
        } 
        
        if (typeOfSelect === "urgency") {
            this.e = document.createElement("select");
            this.e.classList = "urgency-select";
            this.e.setAttribute("required", "required");
            this.e.insertAdjacentHTML("afterbegin",
                `<option selected disabled value="">Срочность</option>
                 <option>Regular</option>
                 <option>Priority</option>
                 <option>Urgent</option>
            `)

            return this.e;
        }
    }
    onDoctorSelect() {
        let selectedIndex = document.querySelector(".doctor-select").selectedIndex;
        let options = document.querySelector(".doctor-select").options;
        let selectedOption = options[selectedIndex].value;

        let createVisitForm = document.querySelector('.createVisit-form');

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
        this.e = document.createElement("span");
        this.e.classList.add("field-name");
        this.e.innerText = fieldName;
        return this.e;
    }
}
