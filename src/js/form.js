import {Button, Input} from "./classes.js";
import Request from "./request.js"
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
            this.errorNote.innerText = "Wrong e-mail or password.";
            this.errorNote.style.visibility = 'hidden';
            this.errorNote.style.opacity = "0";
            this.e.append(this.errorNote);


            this.e.addEventListener("submit", function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                formData = Object.fromEntries(formData);

                new Request ("login", formData, null)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        if (data.status === "Success") {
                            sessionStorage.setItem("token", data.token);
                        } else if (data.status === "Error") {
                            let errorNote = document.querySelector(".error-note");
                            errorNote.style.visibility = 'visible';
                            errorNote.style.opacity = "1";
                        }
                        return data;
                    }) 
                    .catch(error => console.error(error));
                    this.reset();
            })
            return this.e;
        }
    }  
}

