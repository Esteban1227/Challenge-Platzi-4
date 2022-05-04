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

buttonCreateCard.addEventListener("click", () =>{
    slideAuto.createCard(position,valueDescription.value,valueName.value,valueProfession.value);       
    const arrayButtonNext:NodeListOf<HTMLElement> = document.querySelectorAll(".next");
    const buttonNext:HTMLElement[] = []
        arrayButtonNext.forEach(btn =>{
            buttonNext.push(btn)
        })
    buttonNext.forEach(btn =>{
        btn.onclick = () =>{
            slideAuto.nex()
        }
    })
    const arrayButtonPrev:NodeListOf<HTMLElement> = document.querySelectorAll(".prev");
    const buttonPrev:HTMLElement[] = []
        arrayButtonPrev.forEach(btn => {
            buttonPrev.push(btn)
        })
        buttonPrev.forEach(btn =>{
            btn.onclick = () =>{
                slideAuto.prev()
            }
        })
})