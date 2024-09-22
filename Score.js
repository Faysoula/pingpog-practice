class Score extends Sprite{
    constructor(x, y, label){
        super();
        this.x = x;
        this.y = y;
        this.score = 0;
        this.label = label;
    }

    update(){
        this.score += 1;
    }

    draw(ctx){
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`${ this.label } : ${ this.score }`, this.x, this.y);
    }
}