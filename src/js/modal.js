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

        this.modalButtonClose = document.createElement("span");
        this.modalButtonClose.classList.add("btn-close");
        this.modalHeader.append(this.modalButtonClose);

        this.modalBody = document.createElement("div");
        this.modalBody.classList.add("modal-body");
        this.modalContent.append(this.modalBody);

        this.modalButtonClose = document.createElement("span");
        this.modalButtonClose.classList.add("btn-close");
        this.modalHeader.append(this.modalButtonClose);


        this.removeModalBound = this.removeModal.bind(this);
        this.modalButtonClose.addEventListener("click", this.removeModalBound);
       

        // this.onBackgroundClickBound = this.onBackgroundClick.bind(this);
        // this.modalContainer.addEventListener("mousedown", this.onBackgroundClickBound);

        if (typeOfModal==="login") {
            this.titleHeader = document.createElement("h5");
            this.modalHeader.append(this.titleHeader)
            this.titleHeader.innerHTML = "Введите e-mail и пароль";

            this.loginForm = new Form("login");
            this.modalBody.append(this.loginForm);
        }

        if (typeOfModal === "createVisit") {
            this.titleHeader = document.createElement("h5");
            this.modalHeader.append(this.titleHeader)
            this.titleHeader.innerHTML = "Заполните данные о посещении";

            this.createVisitForm = new Form("createVisit");
            this.modalBody.append(this.createVisitForm);
        }

        if (typeOfModal === "editVisit") {
            this.titleHeader = document.createElement("h5");
            this.modalHeader.append(this.titleHeader)
            this.titleHeader.innerHTML = "Измените информацию о визите";

            this.editVisitForm = new Form("editVisit", visit, id, data);
            this.modalBody.append(this.editVisitForm);
        }


        document.body.prepend(this.modalContainer);
        this.modalContainer.classList.add("active")
    }
    // onBackgroundClick(evt) {
    //     let clickedItem = evt.target;
    //     if (clickedItem === this.modalContent) {
    //         this.removeModal();
    //         this.modalContainer.removeEventListener("click",this.onBackgroundClickBound);
    //     }

    // }
    removeModal() {
        this.modalContainer.remove();
        this.modalButtonClose.removeEventListener("click", this.removeModalBound);
    }
}