import { slideAuto } from "./index.js";
//Create a newCard
const position = document.querySelector("#position");
export const cardCreteNewCard = document.getElementById("createCards");
const buttonOpenCreateCard = document.querySelectorAll(".container__addCard");
const buttonCloseCreateCard = document.getElementById("closeCreateCard");
const valueDescription = document.getElementById("textDescription");
const valueName = document.getElementById("nameCreate");
const valueProfession = document.getElementById("professionCreate");
const buttonCreateCard = document.getElementById("buttonCreateCard");
buttonOpenCreateCard.forEach(btn => {
    btn.onclick = () => {
        slideAuto.open();
    };
});
buttonCloseCreateCard.onclick = () => {
    slideAuto.close();
};
buttonCreateCard.addEventListener("click", () => {
    slideAuto.createCard(position, valueDescription.value, valueName.value, valueProfession.value);
    const arrayButtonNext = document.querySelectorAll(".next");
    const buttonNext = [];
    arrayButtonNext.forEach(btn => {
        buttonNext.push(btn);
    });
    buttonNext.forEach(btn => {
        btn.onclick = () => {
            slideAuto.nex();
        };
    });
    const arrayButtonPrev = document.querySelectorAll(".prev");
    const buttonPrev = [];
    arrayButtonPrev.forEach(btn => {
        buttonPrev.push(btn);
    });
    buttonPrev.forEach(btn => {
        btn.onclick = () => {
            slideAuto.prev();
        };
    });
});
