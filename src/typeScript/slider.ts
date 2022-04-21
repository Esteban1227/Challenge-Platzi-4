class Cards {
    private cards: HTMLElement[];
    private i: number;
    constructor(array:HTMLElement[]){
        //Array cards
        this.cards = array;
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
}

export default Cards;