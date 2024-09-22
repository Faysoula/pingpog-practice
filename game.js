class Sprite{
    constructor(){}
    update(){}
    draw(ctx){}
}

class game{
    constructor(){
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.sprites = [];
        this.keys = {};
        this.bindKeyboardEvents();
    }

    addSprite(sprite){
        this.sprites.push(sprite);
    }

    update(){
        this.sprites.forEach(sprite => {
            sprite.update();
        });
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.sprites.forEach(sprite => {
            sprite.draw(this.ctx);
        });
    }

    animate(){
        this.update();
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    bindKeyboardEvents(){
        windows.addEventListener("keydowm", e => {
            this.keys[e.key] = true;
        });

        windows.addEventListener("keyup", e => {
            this.keys[e.key] = false;
        });
    }
}