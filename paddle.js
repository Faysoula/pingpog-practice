class Paddle extends Sprite{
    constructor(x, y, height, width, speed, controls, canvas) {
        super();
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.controls = controls;
        this.canvas = canvas;
    }

    update(sprites, keys){
        if(keys && keys[this.controls.up]){
            this.y -= this.speed;
        }

        if(keys && keys[this.controls.down]){
            this.y += this.speed;
        }
        this.y = Math.max(0, Math.min(this.y, this.canvas.height - this.height));
    }

    draw(ctx){
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--paddle-color');
    }
    }