import Request from "./request.js"
import Modal from "./modal.js"
import DragAndDrop from "./drag.js"
import {Button} from "./classes.js";



export default class Visit {
    constructor(visit) {
        this._data = visit;

        this._age = visit.age;
        this._purposeOfVisit = visit.purposeOfVisit;
        this._bloodPressure = visit.bloodPressure;
        this._bodyMassIndex = visit.bodyMassIndex;
        this._pastDiseases = visit.pastDiseases;
        this._shortDiscriptionsOfVisit = visit.shortDiscriptionsOfVisit;
        this._urgency = visit.urgency;
        this._dateOfPreviousVisit = visit.dateOfPreviousVisit;

    }

    render (visit) {
        this._container = document.querySelector(".visits")
        this._visit = document.createElement("div");
        this._visit.classList = "visit-card";

        this._visitIdContainer = document.createElement("p");
        this._visitIdContainer.classList = "visit-id-container";
        this._visitIdContainer.innerText = `ID: ${this._data.id}`

        this._fullName = document.createElement("p");
        this._fullName.classList.add("full-name-container");
        this._fullName.innerHTML = `ФИО: <span class="full-name">${this._data.fullName}</span>`;

        this._doctor = document.createElement("p");
        this._doctor.classList.add("doctor");
        this._doctor.innerText = `Доктор: ${this._data.doctor}`;

        this._showMoreBtn = new Button("showMoreButton");
        this._showMoreBind = this.showMore.bind(this);
        this._showMoreBtn.addEventListener("click",this._showMoreBind);

        this._visit.append(this._visitIdContainer);
        this._visit.append(this._fullName);
        this._visit.append(this._doctor);
        this._visit.append(this._showMoreBtn);

        this._showLessBtn = new Button("showLessButton");

        this._showLessBind = this.showLess.bind(this);
        this._showLessBtn.addEventListener("click", this._showLessBind);

        this._editPanel = document.createElement("div");
        this._editPanel.classList.add("edit-panel");
        this._editPanel.classList.add("hidden");

        this._editVisitIcon = new Button("editVisitButton")
        this._enableEditModeBind = this.enableEditMode.bind(this);
        this._editVisitIcon.addEventListener("click", this._enableEditModeBind);

        this._removeVisitIcon = new Button("removeVisitButton");
        this._removeVisitBind = this.removeVisit.bind(this);
        this._removeVisitIcon.addEventListener("click", this._removeVisitBind);

        this._editPanel.append(this._editVisitIcon);
        this._editPanel.append(this._removeVisitIcon);

        this._visit.append(this._editPanel);
        this._visit.append(this._showLessBtn);

        this._container.append(this._visit);


    }

    static renderAllVisits(data) {
        let visitsContainer = document.querySelector(".visits");
        visitsContainer.innerHTML = "";
        data.forEach(visit => {
            switch (visit.doctor) {
                case "Cardiologist":
                    new VisitCardiologist(visit);
                    break;
                case "Dentist":
                    new VisitDentist(visit);
                    break;
                case "Therapist":
                    new VisitTherapist(visit);
                    break;
                default:
                    new Request("delete",null, visit.id);
            }
            const drag = new DragAndDrop(`.visits`, `.visit-card`);

            document.addEventListener("mousedown", event => drag.mouseDown(event));
            document.addEventListener("mouseup", event => drag.mouseUp(event));
        });
    }
    
    showMore() {
        this._showMoreBtn.classList.add("hidden");
        this._showLessBtn.classList.remove("hidden");
        this._visit.querySelector(".extra-info").classList.remove("hidden");
        this._visit.querySelector(".edit-panel").classList.remove("hidden");
    }

    showLess() {
        this._showLessBtn.classList.add("hidden");
        this._showMoreBtn.classList.remove("hidden");

        this._visit.querySelector(".extra-info").classList.add("hidden");
        this._visit.querySelector(".edit-panel").classList.add("hidden");
    }

    enableEditMode() {
        new Modal("editVisit", this, this._data.id, this._data);
    }

    updateValue(data,visit) {
        this._data = data;
        if (data.doctor === "Cardiologist") {
            visit._visit.querySelector(".full-name").innerHTML = data.fullName;
            visit._visit.querySelector(".age").innerHTML = data.age;
            visit._visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
            visit._visit.querySelector(".blood-pressure").innerHTML = data.bloodPressure;
            visit._visit.querySelector(".body-mass-index").innerHTML = data.bodyMassIndex;
            visit._visit.querySelector(".past-diseases").innerHTML = data.pastDiseases;
            visit._visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
        }
        if (data.doctor === "Dentist") {
            visit._visit.querySelector(".full-name").innerHTML = data.fullName;
            visit._visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
            visit._visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
            visit._visit.querySelector(".date-of-previous-visit").innerHTML = data.dateOfPreviousVisit;
        }
        if (data.doctor === "Therapist") {
            visit._visit.querySelector(".full-name").innerHTML = data.fullName;
            visit._visit.querySelector(".age").innerHTML = data.age;
            visit._visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
            visit._visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
        }
    }

    removeVisit() {
        new Request("delete", null, this._data.id)
            .then((response) => {
                return response.text();
            })
            .then(() => { this.destroy() })
            .catch(error => console.error(error));
    }

    destroy() {
        this._visit.remove();

        if (this._container.children.length === 0) {
            this._noVisitsNotice = document.createElement("div");
            this._noVisitsNotice.classList.add("no-visits-notice");
            this._noVisitsNotice.innerText = "No items have been added yet.";
            this._container.append(this._noVisitsNotice);
        }
    }
}

export class VisitCardiologist extends Visit {
    constructor(visit) {
        super(visit);
        this.render();
    }

    render () {
        super.render();
        const extraInfo = document.createElement("div");
        extraInfo.classList.add("extra-info");
        extraInfo.innerHTML = `
        <p class="line-in-visit">Возраст: ${this._age}</p>
        <p class="line-in-visit">Цель визита: ${this._purposeOfVisit}</p>
        <p class="line-in-visit">Обычное давление: ${this._bloodPressure}</p>
        <p class="line-in-visit">Индекс массы тела: ${this._bodyMassIndex}</p>
        <p class="line-in-visit">Перенесенные заболевания сердечно-сосудистой системы: ${this._pastDiseases}</p>
        <p class="line-in-visit">Краткое описание визита: ${this._shortDiscriptionsOfVisit}</p>
        <p class="line-in-visit">Срочность: ${this._urgency}</p>
        `;

        extraInfo.classList.add("hidden");
        this._visit.querySelector(".edit-panel").before(extraInfo);
    }
}

export class VisitDentist extends Visit {
    constructor(visit) {
        super(visit);
        this.render();
    }

    render(){
        super.render();
        const extraInfo = document.createElement("div");
        extraInfo.classList.add("extra-info");
        extraInfo.innerHTML = `
        <p class="line-in-visit">Цель визита: ${this._purposeOfVisit}</p>
        <p class="line-in-visit">Дата последнего визита: ${this._dateOfPreviousVisit}</p>
        <p class="line-in-visit">Краткое описание визита: ${this._shortDiscriptionsOfVisit}</p>
        <p class="line-in-visit">Срочность: ${this._urgency}</p>
        `;

        extraInfo.classList.add("hidden");
        this._visit.querySelector(".edit-panel").before(extraInfo);
    }
}

export class VisitTherapist extends Visit {
    constructor(visit) {
        super(visit);
        this.render();
    }

    render(){
        super.render();
        const extraInfo = document.createElement("div");
        extraInfo.classList.add("extra-info");
        extraInfo.innerHTML = `
        <p class="line-in-visit">Врзраст: ${this._age}</p>
        <p class="line-in-visit">Цель визита: ${this._purposeOfVisit}</p>
        <p class="line-in-visit">Краткое описание визита: ${this._shortDiscriptionsOfVisit}</p>
        <p class="line-in-visit">Срочность: ${this._urgency}</p>
        `;

        extraInfo.classList.add("hidden");
        this._visit.querySelector(".edit-panel").before(extraInfo);
    }
}
