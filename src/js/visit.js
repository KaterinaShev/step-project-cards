import Request from "./request.js"
import Modal from "./modal.js"
import DragAndDrop from "./drag.js"



export default class Visit {
    constructor(visit) {
        this.data = visit;

        this.age = visit.age;
        this.purposeOfVisit = visit.purposeOfVisit;
        this.bloodPressure = visit.bloodPressure;
        this.bodyMassIndex = visit.bodyMassIndex;
        this.pastDiseases = visit.pastDiseases;
        this.shortDiscriptionsOfVisit = visit.shortDiscriptionsOfVisit;
        this.urgency = visit.urgency;
        this.dateOfPreviousVisit = visit.dateOfPreviousVisit;

    }

    render (visit) {
        this.container = document.querySelector(".visits")
        this.visit = document.createElement("div");
        this.visit.classList = "visit-card";

        this.visitIdContainer = document.createElement("p");
        this.visitIdContainer.classList = "visit-id-container";
        this.visitIdContainer.innerText = `ID: ${this.data.id}`

        this.fullName = document.createElement("p");
        this.fullName.classList.add("full-name-container");
        this.fullName.innerHTML = `ФИО: <span class="full-name">${this.data.fullName}</span>`;

        this.doctor = document.createElement("p");
        this.doctor.classList.add("doctor");
        this.doctor.innerText = `Доктор: ${this.data.doctor}`;

        this.showMoreBtn = document.createElement("button");
        this.showMoreBtn.classList.add("show-more-btn");
        this.showMoreBtn.setAttribute("vertical-align", "middle");
        this.showMoreBtn.insertAdjacentHTML("afterbegin", "<span>Показать больше</span>");

        this.showMoreBound = this.showMore.bind(this);
        this.showMoreBtn.addEventListener('click',this.showMoreBound);

        this.visit.append(this.visitIdContainer);
        this.visit.append(this.fullName);
        this.visit.append(this.doctor);
        this.visit.append(this.showMoreBtn);

        this.showLessBtn = document.createElement("button");
        this.showLessBtn.classList.add("show-less-btn");
        this.showLessBtn.setAttribute("vertical-align", "middle");
        this.showLessBtn.insertAdjacentHTML("afterbegin", "<span>Показать меньше</span>");
        this.showLessBtn.classList.add("hidden");

        this.showLessBound = this.showLess.bind(this);
        this.showLessBtn.addEventListener("click", this.showLessBound);

        this.editPanel = document.createElement("div");
        this.editPanel.classList.add('edit-panel');
        this.editPanel.classList.add('hidden');

        this.editVisitIcon = document.createElement("button");
        this.editVisitIcon.classList.add("edit-visit-button");
        this.editVisitIcon.innerHTML = "Редактировать"

        this.enableEditModeBound = this.enableEditMode.bind(this);
        this.editVisitIcon.addEventListener("click", this.enableEditModeBound);

        this.removeVisitIcon = document.createElement("button");
        this.removeVisitIcon.classList.add("remove-visit-button");
        this.removeVisitIcon.innerHTML = "Удалить визит"


        this.removeVisitBound = this.removeVisit.bind(this);
        this.removeVisitIcon.addEventListener("click", this.removeVisitBound);

        this.editPanel.append(this.editVisitIcon);
        this.editPanel.append(this.removeVisitIcon);

        this.visit.append(this.editPanel);
        this.visit.append(this.showLessBtn);

        this.container.append(this.visit);


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
        this.showMoreBtn.classList.add('hidden');
        this.showLessBtn.classList.remove("hidden");
        this.visit.querySelector(".extra-info").classList.remove("hidden");
        this.visit.querySelector(".edit-panel").classList.remove("hidden");
    }

    showLess() {
        this.showLessBtn.classList.add("hidden");
        this.showMoreBtn.classList.remove("hidden");

        this.visit.querySelector(".extra-info").classList.add("hidden");
        this.visit.querySelector(".edit-panel").classList.add("hidden");
    }

    enableEditMode() {
        new Modal("editVisit", this, this.data.id, this.data);
    }

    updateValue(data,visit) {
        this.data = data;
        if (data.doctor==="Cardiologist") {
            visit.visit.querySelector(".full-name").innerHTML = data.fullName;
            visit.visit.querySelector(".age").innerHTML = data.age;
            visit.visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
            visit.visit.querySelector(".blood-pressure").innerHTML = data.bloodPressure;
            visit.visit.querySelector(".body-mass-index").innerHTML = data.bodyMassIndex;
            visit.visit.querySelector(".past-diseases").innerHTML = data.pastIllnesses;
            visit.visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
        }
        if (data.doctor==="Dentist") {
            visit.visit.querySelector(".full-name").innerHTML = data.fullName;
            visit.visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
            visit.visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
            visit.visit.querySelector(".date-of-previous-visit").innerHTML = data.dateOfPreviousVisit;
        }
        if (data.doctor==="Therapist") {
            visit.visit.querySelector(".full-name").innerHTML = data.fullName;
            visit.visit.querySelector(".age").innerHTML = data.age;
            visit.visit.querySelector(".purpose-of-visit").innerHTML = data.purposeOfVisit;
            visit.visit.querySelector(".short-description").innerHTML = data.shortDiscriptionsOfVisit;
        }
    }

    removeVisit() {
        new Request("delete", null, this.data.id)
            .then((response) => {
                return response.text();
            })
            .then(() => { this.destroy() })
            .catch(error => console.error(error));
    }

    destroy() {
        this.visit.remove();

        if (this.container.children.length === 0) {
            this.noVisitsNotice = document.createElement("div");
            this.noVisitsNotice.classList.add("no-visits-notice");
            this.noVisitsNotice.innerText = "No items have been added yet.";
            this.container.append(this.noVisitsNotice);
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
        extraInfo.classList.add('extra-info');
        extraInfo.innerHTML = `
        <p class="line-in-visit">Возраст: <span class="regular-text age">${this.age}</span></p>
        <p class="line-in-visit">Цель визита: <span class="regular-text purpose-of-visit">${this.purposeOfVisit}</span></p>
        <p class="line-in-visit">Обычное давление: <span class="regular-text blood-pressure">${this.bloodPressure}</span></p>
        <p class="line-in-visit">Индекс массы тела: <span class="regular-text body-mass-index">${this.bodyMassIndex}</span></p>
        <p class="line-in-visit">Перенесенные заболевания сердечно-сосудистой системы: <span class="regular-text past-diseases">${this.pastDiseases}</span></p>
        <p class="line-in-visit">Краткое описание визита: <span class="regular-text short-description">${this.shortDiscriptionsOfVisit}</span></p>
        <p class="line-in-visit">Срочность: <span class="regular-text urgency">${this.urgency}</span></p>
        `;

        extraInfo.classList.add("hidden");
        this.visit.querySelector(".edit-panel").before(extraInfo);
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
        extraInfo.classList.add('extra-info');
        extraInfo.innerHTML = `
        <p class="line-in-visit">Цель визита: <span class="regular-text purpose-of-visit">${this.purposeOfVisit}</span></p>
        <p class="line-in-visit">Дата последнего визита: <span class="regular-text date-of-previous-visit">${this.dateOfPreviousVisit}</span></p>
        <p class="line-in-visit">Краткое описание визита: <span class="regular-text short-description">${this.shortDiscriptionsOfVisit}</span></p>
        <p class="line-in-visit">Срочность: <span class="regular-text urgency">${this.urgency}</span></p>
        `;

        extraInfo.classList.add("hidden");
        this.visit.querySelector(".edit-panel").before(extraInfo);
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
        extraInfo.classList.add('extra-info');
        extraInfo.innerHTML = `
        <p class="line-in-visit">Врзраст: <span class="regular-text age">${this.age}</span></p>
        <p class="line-in-visit">Цель визита: <span class="regular-text purpose-of-visit">${this.purposeOfVisit}</span></p>
        <p class="line-in-visit">Краткое описание визита: <span class="regular-text short-description">${this.shortDiscriptionsOfVisit}</span></p>
        <p class="line-in-visit">Срочность: <span class="regular-text urgency">${this.urgency}</span></p>
        `;

        extraInfo.classList.add("hidden");
        this.visit.querySelector(".edit-panel").before(extraInfo);
    }
}
