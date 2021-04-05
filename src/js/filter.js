import Visit from "./visit.js";
import Request from "./request.js";
import {Input, Select} from "./classes.js";


export default class Filter {
    constructor() {
        this._searchContainer = document.querySelector(".filter-container");
        this._getVisitsData();
        this._createInput();
        this._createSelectUrgency();
        this._createSelectStatus();

    }
    static filterHide(){
        let filter = document.querySelector(".filter");
        filter.classList.add("hidden");
    }
    static filterShow(){
        let filter = document.querySelector(".filter");
        filter.classList.remove("hidden");
        new Filter();
    }
    _createInput() {
        this._input = new Input("search");
        this._searchContainer.append(this._input);
    }

    _createSelectUrgency() {
        const urgency = ["All", "Regular", "Priority", "Urgent"];
        this._urgencySelect = new Select("searchUrgency");
        const urgencyTitle = document.createElement("span");
        urgencyTitle.classList.add("filter_urgency-title");
        urgencyTitle.innerText = "Выберите срочность посещения:";

        urgency.forEach(e => {
            this._selectOption = document.createElement("option");
            this._selectOption.text = e;
            this._urgencySelect.options.add(this._selectOption);
        });

        this._searchContainer.append(urgencyTitle);
        this._searchContainer.append(this._urgencySelect);
    }

    _createSelectStatus() {
        const status = ["All", "Open", "Done"];
        this._statusSelect = new Select("searchStatus");
        const statusTitle = document.createElement("span");
        statusTitle.classList.add("filter_urgency-title");
        statusTitle.innerText = "Выберите статус заявки:";

        status.forEach(e => {
            this._selectOption = document.createElement("option");
            this._selectOption.text = e;
            this._statusSelect.options.add(this._selectOption);
        });

        this._searchContainer.append(statusTitle);
        this._searchContainer.append(this._statusSelect);
    }
    

    _getVisitsData() {
        new Promise((resolve, reject) => {
            resolve(new Request("getAllVisits"))
        })
            .then(data => {
                this._filter(data);
                this._filterByUrgency(data);
                this._filterByStatus(data);
            })
    }

    _filter(allVisits) {
        this._input.addEventListener("input", function () {
            let visitsArray = [];
            let inputedValue = this.value.trim();
            let inputedData = new RegExp(inputedValue, "i");

            if (inputedValue !== "") {
                allVisits.forEach((el) => {

                    let inputedName = el.fullName.search(inputedData);
                    let inputedDoctor = el.doctor.search(inputedData);
                    let inputedDiscription = el.shortDiscriptionsOfVisit.search(inputedData);

                    if (inputedName !== -1 || inputedDoctor !== -1 || inputedDiscription !== -1) {
                        visitsArray.push(el);
                    }
                });
                Visit.renderAllVisits(visitsArray);
            } else {
                Visit.renderAllVisits(allVisits);
            }
        });
    }

    _filterByUrgency(allVisits) {
        this._urgencySelect.addEventListener("change", (e) => {
            this._input.value = "";

            e.preventDefault();
            e.stopPropagation();

            let filteredUrgencyArray = [];

            if (e.currentTarget.value === "All") {
                Visit.renderAllVisits(allVisits);
                this._filter(allVisits);
            } else {
                allVisits.forEach(elem => {
                    if (elem.urgency === e.currentTarget.value) {
                        filteredUrgencyArray.push(elem);
                    } else {
                        let visitsContainer = document.querySelector(".visits");
                        visitsContainer.innerHTML = "No data found";
                    }
                });

                this._filter(filteredUrgencyArray);
                Visit.renderAllVisits(filteredUrgencyArray);
            }
        });
    }

    _filterByStatus(allVisits) {
        this._statusSelect.addEventListener("change", (e) => {
            this._input.value = "";

            e.preventDefault();
            e.stopPropagation();

            let filteredStatusArray = [];

            if (e.currentTarget.value === "All") {
                Visit.renderAllVisits(allVisits);
                this._filter(allVisits);
            } else {
                allVisits.forEach(elem => {
                    if (elem.status === e.currentTarget.value) {
                        filteredStatusArray.push(elem);
                    }
                });

                this._filter(filteredStatusArray);
                Visit.renderAllVisits(filteredStatusArray);
            }
        });
    }
}
