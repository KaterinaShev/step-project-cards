import Modal from "./modal.js";
import Request from "./request.js"
// import Button from "./classes.js"

function createContent() {
    const header = document.createElement("header");
    header.className = "header"
    document.body.prepend(header);

    const a = document.createElement("a");
    a.className = "header__logo_link";
    a.innerHTML = "CARDS";
    a.href = "#"
    header.append(a);

    // let signIn = new Button("signIn");
    // header.append(signIn);

    const signIn = document.createElement("button");
    signIn.className = "sign-in-btn btn btn-primary";
    signIn.innerHTML = "SIGN IN";
    header.append(signIn);

    const createVisit = document.createElement("button");
    createVisit.className = "create-visit-btn btn btn-primary"
    createVisit.style.display = "none";
    createVisit.innerHTML = "CREATE VISIT";
    header.append(createVisit);

    const main = document.createElement("main");
    header.after(main);

    const sectionFilter = document.createElement("section");
    sectionFilter.className = "filter";
    main.append(sectionFilter);

    const divFilter = document.createElement("div");
    divFilter.className = "filter__container";
    sectionFilter.append(divFilter);

    const sectionVisits = document.createElement("section");
    sectionVisits.className = "visits";
    main.append(sectionVisits);

    const divVisits = document.createElement("div");
    divVisits.className = "no-visits-notice";
    divVisits.innerHTML = "No items have been added yet.";
    sectionVisits.append(divVisits)
    
}
createContent()




window.onload = function () {
    let token = sessionStorage.getItem('token');
    // LiveSearch.filterHide();

    let signIn = document.querySelector('.sign-in-btn');
    signIn.addEventListener('click', () => new Modal("login"));

    let createVisit = document.querySelector('.create-visit-btn');
    // createVisitBtn.style.display = "none"
    // createVisitBtn.addEventListener('click', () => new Modal("createVisit"));

    if (token) {
        createVisit.style.display = "block";
        signIn.style.display = "none"


        // new Promise((resolve, reject) => {
        //     resolve(new Request("getAllVisits"));
        // })
        //     .then((data) => {
        //         console.log(data);
        //         if (data.length !== 0) {
        //             Visit.renderAllVisits(data);
        //             LiveSearch.filterShow();
        //         }
        //     })
        //     .catch(error => console.error(error));
    } else if (!token) {
        signIn.style.display = 'inline-block';
    }
};


    // if (token === "noid" || token == null) {
    //     signInBtn.style.display = 'inline-block';
    // } else  {
        
    //     createVisitBtn.style.display = "block";
    //     signInBtn.style.display = "none";

    //     new Promise((resolve, reject) => {
    //         resolve(new Request("getAllVisits"));
    //     })
    //         .then((data) => {
    //             console.log(data);
    //             if (data.length !== 0) {
    //                 Visit.renderAllVisits(data);
    //                 LiveSearch.filterShow();
    //             }
    //         })
    //         .catch(error => console.error(error));
    // }


// }