import Cards from "./slider.js";
//Cards HTML
var cardOne = document.getElementById("cardOne");
var cardTwo = document.getElementById("cardTwo");
var cardThree = document.getElementById("cardThree");
var cardFour = document.getElementById("cardFour");
var cardFive = document.getElementById("cardFive");
var cardSix = document.getElementById("cardSix");
//Buttons Cards(Next)
var buttonNext = document.querySelectorAll(".next");
//Add Event for each button
buttonNext.forEach(function (btn) {
    btn.addEventListener("click", function () { return slideAuto.nex(); });
});
//Button Cards(Prev)
var buttonPrev = document.querySelectorAll(".prev");
//Add Event for each button
buttonPrev.forEach(function (btn) {
    btn.addEventListener("click", function () { return slideAuto.prev(); });
});
var ArrayCards = [
    cardOne,
    cardTwo,
    cardThree,
    cardFour,
    cardFive,
    cardSix,
];
//Create the new instance
var slideAuto = new Cards(ArrayCards);
