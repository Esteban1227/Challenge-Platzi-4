import Cards from "./slider.js";
/* const cardOne:HTMLElement = document.getElementById("cardOne")!;
const cardTwo:HTMLElement = document.getElementById("cardTwo")!;
const cardThree:HTMLElement = document.getElementById("cardThree")!;
const cardFour:HTMLElement = document.getElementById("cardFour")!;
const cardFive:HTMLElement = document.getElementById("cardFive")!;
const cardSix:HTMLElement = document.getElementById("cardSix")!; */
//Cards HTML
var card = document.querySelectorAll(".container__subContainer");
var ArrayCards = [];
card.forEach(function (item) {
    ArrayCards.push(item);
});
//Create the new instance
var slideAuto = new Cards(ArrayCards);
//Buttons Cards(Next)
var buttonNext = document.querySelectorAll(".next");
//Add Event for each button
/* buttonNext.forEach(btn =>{
    btn.addEventListener("click", () => slideAuto.nex());
}) */
buttonNext.forEach(function (btn) {
    btn.onclick = function () {
        slideAuto.nex();
    };
});
//Button Cards(Prev)
var buttonPrev = document.querySelectorAll(".prev");
//Add Event for each button
/* buttonPrev.forEach( btn => {
    btn.addEventListener("click", () => slideAuto.prev());
}) */
buttonPrev.forEach(function (btn) {
    btn.onclick = function () {
        slideAuto.prev();
    };
});
/* const ArrayCards:HTMLElement[]=
[
    cardOne,
    cardTwo,
    cardThree,
    cardFour,
    cardFive,
    cardSix,
] */
