import { slideAuto } from "./index.js";

//Buttons Cards(Next)
const buttonNext:NodeListOf<HTMLElement> = document.querySelectorAll(".next");
//Add Event for each button
export const addForEachButtonNext = () =>{buttonNext.forEach(btn =>{
    btn.onclick = () =>{
        slideAuto.nex()
    }
})}


//Button Cards(Prev)
const buttonPrev:NodeListOf<HTMLElement> = document.querySelectorAll(".prev");
//Add Event for each button
export const addForEachButtonPrev = () =>{
    buttonPrev.forEach(btn =>{
        btn.onclick = () =>{
            slideAuto.prev()
        }
    })
} 