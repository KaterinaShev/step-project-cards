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

            this.e.classList.add = "create-visit-modal-btn";
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

    }
}

export  class Input {
    constructor(typeOfInput) {
        this.e = document.createElement('input');
        if (typeOfInput === "email") {
            this.e.setAttribute('type', 'text');
            this.e.setAttribute('name', 'email');
            this.e.classList = 'email-input';
            this.e.setAttribute("required", "required");
            this.inputLabel = document.createElement("label");
            this.inputLabel.classList = "input-label";
            this.inputLabel.innerText = "E-mail";
            this.inputLabel.append(this.e);
            return this.inputLabel;
        }

        if (typeOfInput === "password") {
            this.e.setAttribute('type', 'password');
            this.e.setAttribute('name', 'password');
            this.e.classList.add('password-input');
            this.e.setAttribute("required", "required");
            this.inputLabel = document.createElement("label");
            this.inputLabel.classList.add("input-label");
            this.inputLabel.innerText = "Password";
            this.inputLabel.append(this.e);
            return this.inputLabel;
        }
    }
}
