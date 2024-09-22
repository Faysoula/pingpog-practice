class Paddle extends Sprite{
    constructor(x, y, height, width, speed, controls) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.controls = controls;
    }

    update(keys){
        if(keys[this.controls.up]){
            this.y -= this.speed;
        }

        if(keys[this.controls.down]){
            this.y += this.speed;
        }

        if(this.y < 0){
            this.y = 0;
        }

        this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));
    }

    draw(ctx){
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    }