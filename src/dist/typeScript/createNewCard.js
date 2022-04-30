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
buttonCreateCard.onclick = () => {
    slideAuto.createCard(position, valueDescription.value, valueName.value, valueProfession.value);
    const buttonPrevCreateCard = document.getElementById("prev");
    const buttonNextCreateCard = document.getElementById("next");
    buttonNextCreateCard.onclick = () => { slideAuto.nex(); };
    buttonPrevCreateCard.onclick = () => { slideAuto.prev(); };
};
