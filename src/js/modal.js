import Form from "./form.js";
import {Button, Input} from "./classes.js";

export default class Modal {
    constructor(typeOfModal, visit, data, id) {

        this._overlay = document.querySelector(".overlay");
        this._overlay.classList.add("active");

        this._modalContainer = document.createElement("div");
        this._modalContainer.classList.add("modal-dialog");
        this._modalContainer.tabinde = "-1";

        this._modalContent = document.createElement("div");
        this._modalContent.classList.add("modal-content");
        this._modalContainer.append(this._modalContent);

        this._modalHeader = document.createElement("div");
        this._modalHeader.classList.add("modal-header");
        this._modalContent.append(this._modalHeader);

        this._modalButtonClose = document.createElement("span");
        this._modalButtonClose.classList.add("btn-close");
        this._modalHeader.append(this._modalButtonClose);

        this._modalBody = document.createElement("div");
        this._modalBody.classList.add("modal-body");
        this._modalContent.append(this._modalBody);

        this._modalButtonClose = document.createElement("span");
        this._modalButtonClose.classList.add("btn-close");
        this._modalHeader.append(this._modalButtonClose);


        this._removeModalBind = this._removeModal.bind(this);
        this._modalButtonClose.addEventListener("click", this._removeModalBind);

        this._onBackgroundClick();
 
        if (typeOfModal === "login") {

            this._titleHeader = document.createElement("h3");
            this._modalHeader.append(this._titleHeader)
            this._titleHeader.innerHTML = "Введите e-mail и пароль";

            this._loginForm = new Form("login");
            this._modalBody.append(this._loginForm);
        }

        if (typeOfModal === "createVisit") {
            this._titleHeader = document.createElement("h3");
            this._modalHeader.append(this._titleHeader)
            this._titleHeader.innerHTML = "Заполните данные о посещении";

            this._createVisitForm = new Form("createVisit");
            this._modalBody.append(this._createVisitForm);
        }

        if (typeOfModal === "editVisit") {
            this._titleHeader = document.createElement("h3");
            this._modalHeader.append(this._titleHeader)
            this._titleHeader.innerHTML = "Измените информацию о визите";

            this._editVisitForm = new Form("editVisit", visit, id, data);
            this._modalBody.append(this._editVisitForm);
        }

        document.body.prepend(this._modalContainer);
        this._modalContainer.classList.add("active")
    }

    _removeModal() {
        this._modalContainer.remove();
        this._overlay.classList.remove("active");
        this._modalButtonClose.removeEventListener("click", this._removeModalBind);
    }

    _onBackgroundClick() {
        this._body = document.body.addEventListener("keyup", function (e) {
            let key = e.keyCode;
            if (key == 27) { 
                const overlay = document.querySelector(".overlay");
                const modalContainer = document.querySelector(".modal-dialog");

                modalContainer.remove();
                overlay.classList.remove("active");
            };
        }, false);

        this._overlay.addEventListener("click", function() {
            const overlay = document.querySelector(".overlay");
            const modalContainer = document.querySelector(".modal-dialog");

            modalContainer.remove();
            overlay.classList.remove("active");
        });
    }
}