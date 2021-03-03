import Modal from "./modal.js";
let signInBtn = document.querySelector('.sign-in-btn');
signInBtn.addEventListener('click', () => new Modal("login"));
