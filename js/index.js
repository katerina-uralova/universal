
// Mobile nav button
const navBtnOpen = document.querySelector('#mobile-nav-btn');
const navBtnClose = document.querySelector('#close-mobile-nav');
const mobileNavFade = document.querySelector('.mobile-nav-fade');

const nav = document.querySelector('.mobile-nav');


navBtnOpen.onclick = function () {
    nav.classList.add('mobile-nav--open');
    mobileNavFade.classList.add('mobile-nav-fade--open');
    document.body.classList.toggle('no-scroll');
};



navBtnClose.onclick = function () {
    nav.classList.remove('mobile-nav--open');
    mobileNavFade.classList.remove('mobile-nav-fade--open');
    document.body.classList.toggle('no-scroll');
};

mobileNavFade.onclick = function () {
    nav.classList.remove('mobile-nav--open');
    mobileNavFade.classList.remove('mobile-nav-fade--open');
    document.body.classList.toggle('no-scroll');
};

// Date

function updateDate() {
    const dateElement = document.querySelector("#date");

    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-EN', options);
}
updateDate();



// Signin and subscribe

// Функция для открытия модального окна
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Добавление обработчиков событий
document.getElementById("openSignIn").addEventListener("click", () => openModal("signInModal"));
document.getElementById("openSubscribe").addEventListener("click", () => openModal("subscribeModal"));

// Закрытие по кнопке "крестик"
document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", (e) => {
        closeModal(e.target.dataset.modal);
    });
});

// Закрытие при клике вне окна
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        closeModal(e.target.id);
    }
});