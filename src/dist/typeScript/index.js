import Cards from "./slider.js";
import { cardCreteNewCard } from "./createNewCard.js";
import { addForEachButtonNext, addForEachButtonPrev } from "./buttonsCard.js";
//Cards HTML
const card = document.querySelectorAll(".container__subContainer");
const ArrayCards = [];
card.forEach(item => {
    ArrayCards.push(item);
});
export const slideAuto = new Cards(ArrayCards, cardCreteNewCard);
addForEachButtonNext();
addForEachButtonPrev();
