import Form from "./form.js";
export default class Modal {
    constructor(typeOfModal, visit, data, id) {
        this.modalContainer = document.createElement("div");
        this.modalContainer.classList.add("fv");

        this.modalBody = document.createElement("div");
        this.modalBody.classList.add("fev");
        this.modalContainer.append(this.modalBody);

        this.modalContent = document.createElement("div");
        this.modalContent.classList.add("ftr");
        this.modalBody.append(this.modalContent);

        if (typeOfModal==="login") {
            this.loginForm = new Form("login");
            this.modalContent.append(this.loginForm);
        }
        document.body.prepend(this.modalContainer);
        this.modalContainer.classList.add("active")
    }
}