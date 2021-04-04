import Visit from "./visit.js";
import Request from "./request.js";

export default class Filter {
    constructor() {
        this.searchContainer = document.querySelector(".filter-container");
        this.getVisitsData();
        this.createSearchInput();
        this.createUrgencySelect();

    }
    static filterHide(){
        let filter = document.querySelector('.filter');
        filter.classList.add('hidden');
    }
    static filterShow(){
        let filter = document.querySelector('.filter');
        filter.classList.remove('hidden');
        new Filter();
    }
    createSearchInput() {
        this.input = document.createElement('input');
        this.input.classList.add('filter-live-search');
        this.input.type = 'text';
        this.input.placeholder = 'id, ФИО, доктор';
        this.searchContainer.append(this.input);
    }

    createUrgencySelect() {
        const urgency = ['All', 'Regular', 'Priority', 'Urgent'];
        this.urgencySelect = document.createElement('select');
        const urgencyTitle = document.createElement('span');
        urgencyTitle.classList.add('filter_urgency-title');
        urgencyTitle.innerText = 'Выберите срочность посещения:';
        this.urgencySelect.classList.add('filter-select-urgency');
        urgency.forEach(el => {
            this.selectOption = document.createElement('option');
            this.selectOption.text = el;
            this.urgencySelect.options.add(this.selectOption);
        });
        this.searchContainer.append(urgencyTitle);
        this.searchContainer.append(this.urgencySelect);

    }

    getVisitsData() {
        new Promise((resolve, reject) => {
            resolve(new Request("getAllVisits"))
        })
            .then(data => {
                this.filter(data);
                this.filterByUrgency(data);
            })
    }

    filter(allVisits) {
        this.input.addEventListener('input', function () {
            let visitsArray = [];
            let visitsContainer = document.querySelector(".visits");
            visitsContainer.innerHTML = "No data found";
            let inputedValue = this.value.trim();
            let inputedData = new RegExp(inputedValue, 'i');
            if (inputedValue !== '') {
                allVisits.forEach((el) => {
                    let inputedId = el.id.search(inputedData);
                    let inputedName = el.fullName.search(inputedData);
                    let inputedDoctor = el.doctor.search(inputedData);
                    if (inputedId !== -1 || inputedName !== -1 || inputedDoctor !== -1) {
                        visitsArray.push(el);
                    }
                });
                Visit.renderAllVisits(visitsArray);
            } else {
                Visit.renderAllVisits(allVisits);
            }
        });
    }

    filterByUrgency(allVisits) {
        this.urgencySelect.addEventListener('change', (e) => {
            this.input.value = '';
            e.preventDefault();
            e.stopPropagation();
            let filteredUrgencyArray = [];
            let visitsContainer = document.querySelector(".visits");
            visitsContainer.innerHTML = "";
            if (e.currentTarget.value === 'All') {
                Visit.renderAllVisits(allVisits);
                this.filter(allVisits);
            } else {
                allVisits.forEach(el => {
                    if (el.urgency === e.currentTarget.value) {
                        filteredUrgencyArray.push(el);
                    }
                });
                this.filter(filteredUrgencyArray);
                Visit.renderAllVisits(filteredUrgencyArray);
            }
        });
    }

}
