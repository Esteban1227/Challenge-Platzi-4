import { slideAuto } from "./index.js";


//Create a newCard
const position = document.querySelector("#position")!
export const cardCreteNewCard:HTMLElement = document.getElementById("createCards")!;
const buttonOpenCreateCard:NodeListOf<HTMLElement> = document.querySelectorAll(".container__addCard");
const buttonCloseCreateCard = document.getElementById("closeCreateCard")!;
const valueDescription = document.getElementById("textDescription") as HTMLInputElement;
const valueName = document.getElementById("nameCreate") as HTMLInputElement;
const valueProfession = document.getElementById("professionCreate")as HTMLInputElement;
const buttonCreateCard = document.getElementById("buttonCreateCard")!;

buttonOpenCreateCard.forEach(btn =>{
    btn.onclick = () =>{
        slideAuto.open()
    }
})

buttonCloseCreateCard.onclick = () =>{
    slideAuto.close()
}

buttonCreateCard.onclick = () =>{
    slideAuto.createCard(position,valueDescription.value,valueName.value,valueProfession.value)
    const buttonPrevCreateCard:HTMLElement = document.getElementById("prev")!;
    const buttonNextCreateCard:HTMLElement = document.getElementById("next")!;
    buttonNextCreateCard.onclick = () => {slideAuto.nex()}
    buttonPrevCreateCard.onclick = () => {slideAuto.prev()}
}