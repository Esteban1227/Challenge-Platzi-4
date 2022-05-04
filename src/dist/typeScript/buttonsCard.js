import { slideAuto } from "./index.js";
//Buttons Cards(Next)
const arrayButtonNext = document.querySelectorAll(".next");
export const buttonNext = [];
arrayButtonNext.forEach(btn => {
    buttonNext.push(btn);
});
//Add Event for each button
export const addForEachButtonNext = () => {
    buttonNext.forEach(btn => {
        btn.onclick = () => {
            slideAuto.nex();
        };
    });
    console.log(buttonNext);
};
//Button Cards(Prev)
const arrayButtonPrev = document.querySelectorAll(".prev");
export const buttonPrev = [];
arrayButtonPrev.forEach(btn => {
    buttonPrev.push(btn);
});
//Add Event for each button
export const addForEachButtonPrev = () => {
    buttonPrev.forEach(btn => {
        btn.onclick = () => {
            slideAuto.prev();
        };
    });
    console.log(buttonPrev);
    console.log("se ejecuto");
};
