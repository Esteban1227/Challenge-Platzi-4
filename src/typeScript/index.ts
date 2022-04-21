import Cards from "./slider.js";

/* const cardOne:HTMLElement = document.getElementById("cardOne")!;
const cardTwo:HTMLElement = document.getElementById("cardTwo")!;
const cardThree:HTMLElement = document.getElementById("cardThree")!;
const cardFour:HTMLElement = document.getElementById("cardFour")!;
const cardFive:HTMLElement = document.getElementById("cardFive")!;
const cardSix:HTMLElement = document.getElementById("cardSix")!; */


//Cards HTML
const card:NodeListOf<HTMLElement> = document.querySelectorAll(".container__subContainer");
const ArrayCards:HTMLElement[] = []
card.forEach(item =>{
    ArrayCards.push(item)
})

//Create the new instance
const slideAuto:Cards = new Cards(ArrayCards);

//Buttons Cards(Next)
const buttonNext:NodeListOf<HTMLElement> = document.querySelectorAll(".next");
//Add Event for each button
/* buttonNext.forEach(btn =>{
    btn.addEventListener("click", () => slideAuto.nex());
}) */
buttonNext.forEach(btn =>{
    btn.onclick = () =>{
        slideAuto.nex()
    }
})

//Button Cards(Prev)
const buttonPrev:NodeListOf<HTMLElement> = document.querySelectorAll(".prev");
//Add Event for each button
/* buttonPrev.forEach( btn => {
    btn.addEventListener("click", () => slideAuto.prev());
}) */
buttonPrev.forEach(btn =>{
    btn.onclick = () =>{
        slideAuto.prev()
    }
})


/* const ArrayCards:HTMLElement[]=
[
    cardOne,
    cardTwo,
    cardThree,
    cardFour,
    cardFive,
    cardSix,
] */
