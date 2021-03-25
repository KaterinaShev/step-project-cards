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

                    .then((data) => {
                        console.log(data);
                        if(!data.ok) {
                            let errorNote = document.querySelector(".error-note");
                            errorNote.style.visibility = 'visible';
                            errorNote.style.opacity = "1";
                            throw new Error("Wrong email or password");
                        } else {
                            let signIn = document.querySelector('.sign-in-btn');
                            signIn.style.display = "none";
                            let createVisit = document.querySelector('.create-visit-btn');
                            createVisit.style.display = "block";
                            sessionStorage.setItem("token", data.token);
                            let modal = document.querySelector(".modal-dialog");
                            modal.remove();
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

