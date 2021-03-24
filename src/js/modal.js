import Form from "./form.js";
import {Button, Input} from "./classes.js";

export default class Modal {
    constructor(typeOfModal, visit, data, id) {
        this.modalContainer = document.createElement("div");
        this.modalContainer.classList.add("modal-dialog");
        this.modalContainer.tabinde = "-1";

        this.modalContent = document.createElement("div");
        this.modalContent.classList.add("modal-content");
        this.modalContainer.append(this.modalContent);

        this.modalHeader = document.createElement("div");
        this.modalHeader.classList.add("modal-header");
        this.modalContent.append(this.modalHeader);

        this.modalButtonClose = document.createElement("button");
        this.modalButtonClose.classList.add("btn-close");
        this.modalButtonClose.type = "button";
        this.modalButtonClose.setAttribute("data-bs-dismiss", "modal");
        this.modalButtonClose.setAttribute("aria-label", "Close");
        this.modalHeader.append(this.modalButtonClose);
        // this.modalButtonClose.addEventListener("click", () => Modal.close())

        this.modalBody = document.createElement("div");
        this.modalBody.classList.add("modal-body");
        this.modalContent.append(this.modalBody);

        this.modalFooter = document.createElement("div");
        this.modalFooter.classList.add("modal-footer");
        this.modalContent.append(this.modalFooter);
        if (typeOfModal==="login") {
            this.modalHeader.innerHTML = "Login";

            this.loginForm = new Form("login");
            this.modalBody.append(this.loginForm);

            // this.loginButton = new Button("login");
            // this.modalFooter.append(this.loginButton);
        }

        document.body.prepend(this.modalContainer);
        this.modalContainer.classList.add("active")
    }
}