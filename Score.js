class Score extends Sprite{
    constructor(elementId, label){
        super();
        this.element= document.getElementById(elementId);
        this.score = 0;
        this.label = label;
    }


    draw(){
         this.element.textContent = `${this.label}: ${this.score}`;
    }
}