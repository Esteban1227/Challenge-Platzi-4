import Cards from "./slider.js";
import { cardCreteNewCard } from "./createNewCard.js";
import { addForEachButtonNext,addForEachButtonPrev } from "./buttonsCard.js";


//Cards HTML
const card:NodeListOf<HTMLElement> = document.querySelectorAll(".container__subContainer");
const ArrayCards:HTMLElement[] = []
card.forEach(item =>{
    ArrayCards.push(item)
})

export const slideAuto:Cards = new Cards(ArrayCards,cardCreteNewCard);
addForEachButtonPrev()
addForEachButtonNext()
