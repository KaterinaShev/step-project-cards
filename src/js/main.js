import Modal from "./modal.js";
import Request from "./request.js"
import Visit from "./visit.js";
import Filter from "./filter.js";
import {Button, Input, Select, Textarea, InputFieldTitle} from "./classes.js";


// email: katya@katya.com
// password: katyakatya


function createContent() {
    const header = document.createElement("header");
    header.className = "header"
    document.body.prepend(header);

    const a = document.createElement("a");
    a.className = "header-logo-link";
    a.innerHTML = "CARDS";
    a.href = "#"
    header.append(a);

    const signIn = new Button("signIn")
    header.append(signIn);

    const createVisit = new Button("createVisit");
    header.append(createVisit);

    const main = document.createElement("main");
    header.after(main);

    const mainContainer = document.createElement("div");
    mainContainer.classList = "main-container"
    main.append(mainContainer);

    const sectionFilter = document.createElement("section");
    sectionFilter.className = "filter";
    mainContainer.append(sectionFilter);

    const divFilter = document.createElement("div");
    divFilter.className = "filter-container";
    sectionFilter.append(divFilter);

    const sectionVisits = document.createElement("section");
    sectionVisits.className = "visits";
    mainContainer.append(sectionVisits);

    const divVisits = document.createElement("div");
    divVisits.className = "no-visits-notice";
    divVisits.innerHTML = "No items have been added yet.";
    sectionVisits.append(divVisits)  

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.id = "overlay-moda";
    document.body.append(overlay);
}

window.onload = function () {
    createContent();
    Filter.filterHide();
    let token = localStorage.getItem("token");
    let signIn = document.querySelector(".sign-in-btn");

    signIn.addEventListener("click", () => new Modal("login"));

    let createVisit = document.querySelector(".create-visit-btn");
    createVisit.addEventListener("click", () => new Modal("createVisit"));

    if (token) {
        signIn.style.display = "none";
        createVisit.style.display = "block";

        new Promise((resolve, reject) => {
            resolve(new Request("getAllVisits"));
        })
            .then((data) => {
                console.log(data);
                if (data.length !== 0) {
                    Visit.renderAllVisits(data);
                    Filter.filterShow();
                }
            })
            .catch(error => console.error(error));
    }  
};
