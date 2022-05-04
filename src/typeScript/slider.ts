class Cards {
    private cards: HTMLElement[];
    private i: number;
    private cardCreate: HTMLElement;
    constructor(array:HTMLElement[], CardCreate:HTMLElement){
        //Array cards
        this.cards = array;
        this.cardCreate = CardCreate;
        //Iterator
        this.i = 0;
    }
    //method Next
    nex(){
        //if it is the last card of the array
        if(this.cards.length === this.i + 1){
            //Remover las animaciones de la ultima card
            this.cards[this.i].classList.remove("animate__slideInLeft");
            this.cards[this.i].classList.remove("animate__slideInRight");
            this.cards[this.i].classList.remove("animate__shakeX");
            //Add animation to the last Card
            setTimeout(() => {
                this.cards[this.i].classList.add("animate__shakeX")
            }, 1);
        //if there are more Cards
        }else{
            //Remove old card animations
            this.cards[this.i].classList.remove("animate__shakeX");
            this.cards[this.i].classList.remove("animate__slideInLeft");
            this.cards[this.i].classList.remove("animate__slideInRight");
            //Hide previous card
            this.cards[this.i].style.display = "none";
            //Go to the next Card
            this.i ++;
            //Show Card
            this.cards[this.i].style.display = "flex";
            //Add Animation
            this.cards[this.i].classList.add("animate__slideInLeft");
        }
    }
    
    //method Prev
    prev(){
        //if it is the first card in the array
        if(this.i <= 0){
            //Remove last card animations
            this.cards[this.i].classList.remove("animate__slideInRight");
            this.cards[this.i].classList.remove("animate__shakeX");
            //Add Animation to the last card
            setTimeout(() => {
                this.cards[this.i].classList.add("animate__shakeX")
            }, 1);
        //if there are more Cards
        }else{
            //Remove old card animations
            this.cards[this.i].classList.remove("animate__slideInLeft");
            this.cards[this.i].classList.remove("animate__shakeX");
            this.cards[this.i].classList.remove("animate__slideInRight");
            //Hidden Card
            this.cards[this.i].style.display = "none";
            //Go to the next Card
            this.i --;
            //Show Card
            this.cards[this.i].style.display = "flex";
            //Add Animation
            this.cards[this.i].classList.add("animate__slideInRight");
        }
    }

    //method CreateCard

    open(){
        this.cardCreate.style.display ="flex"
        this.cards[this.i].style.display ="none"
    }
    close(){
        this.cardCreate.style.display ="none"
        this.cards[this.i].style.display ="flex"
    }

    createCard(position:Element ,text:string,name:string,profession:String,photo?:string){ 
        const modelCard = document.createElement("section") as HTMLElement 
        position.appendChild(modelCard)
        modelCard.className ='container__subContainer animate__animated' 
        modelCard.innerHTML =
        `<div class="container__addCard">
            <img src="./assets/plus.png" alt="">
        </div>
        <section class="container__photoDeveloper">
            <img class="container__photoDeveloper--background" src=".//assets/pattern-bg.svg" alt="">
                <img class="container__photoDeveloper--photo" src="./assets/image-john.jpg" alt="">
                <div class="container__slider">
                    <div class="container__slider--left prev" id="prev">
                        <img src="./assets/icon-prev.svg" alt="">
                    </div>
                    <div class="container__slider--right next" id="next">
                        <img src="./assets/icon-next.svg" alt="">
                    </div>
                </div>
        </section>
        <section class="container__infoDeveloper">
            <img src="./assets/pattern-quotes.svg" alt="" class="container__infoDeveloper--background">
            <div class="container__infoDeveloperContainerText">
                <p class="container__infoDeveloper--biographyDeveloper">“${text}”
                </p>
                <p class="container__infoDeveloper--nameDeveloper">
                    ${name} <br>
                    <span>${profession}</span>   
                </p>
            </div>
        </section>
        <section class="container__backgroundFooter">
            <img src="./assets/pattern-curve.svg" alt="">
        </section>     
        </section>`
        modelCard.style.display = "flex"
        this.cardCreate.style.display="none"
        this.cards[this.i].classList.remove("animate__shakeX");
        this.cards[this.i].classList.remove("animate__slideInRight");
        this.i = 0
        this.cards.unshift(modelCard)
        console.log(this.cards)
        return modelCard
    }
}

export default Cards;