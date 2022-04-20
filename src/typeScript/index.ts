import Cards from "./slider.js";

//Cards HTML
const cardOne:HTMLElement = document.getElementById("cardOne")!;
const cardTwo:HTMLElement = document.getElementById("cardTwo")!;
const cardThree:HTMLElement = document.getElementById("cardThree")!;
const cardFour:HTMLElement = document.getElementById("cardFour")!;
const cardFive:HTMLElement = document.getElementById("cardFive")!;
const cardSix:HTMLElement = document.getElementById("cardSix")!;

//Buttons Cards(Next)
const buttonNext:NodeListOf<Element> = document.querySelectorAll(".next");
//Add Event for each button
buttonNext.forEach(btn =>{
    btn.addEventListener("click", () => slideAuto.nex());
})

//Button Cards(Prev)
const buttonPrev:NodeListOf<Element> = document.querySelectorAll(".prev");
//Add Event for each button
buttonPrev.forEach( btn => {
    btn.addEventListener("click", () => slideAuto.prev());
})


const ArrayCards:HTMLElement[]=
[
    cardOne,
    cardTwo,
    cardThree,
    cardFour,
    cardFive,
    cardSix,
]

//Create the new instance
const slideAuto:Cards = new Cards(ArrayCards);