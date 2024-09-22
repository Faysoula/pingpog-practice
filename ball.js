class Ball extends Sprite {
  constructor(x, y, radius, color, scorep1, scorep2) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.scorep1 = scorep1;
    this.scorep2 = scorep2;
    this.resetPos = false;
  }

  update(sprites, keys) {
    if (keys[" "] && !this.resetPos) {
      this.resetPos = true;
    }

    if (this.resetPos) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.y + this.radius >= canvas.height || this.y - this.radius < 0) {
        this.vy *= -1;
      }

      let playerOne = sprites.find(
        (sprite) => sprite instanceof Paddle && sprite.x > canvas.width
      );
      let playertwo = sprites.find(
        (sprite) => sprite instanceof Paddle && sprite.x < canvas.width
      );

      if (
        this.x - this.radius < playerOne.x + playerOne.width && //ball near p1 on x axis
        this.x - this.radius > playerOne.x && // ball is not behind paddle
        this.y + this.radius > playerOne.y && // ball is below the top of the paddle basically aam todroba min fo2
        this.y - this.radius < playerOne.y + playerOne.height // ball is above the bottom of the paddle
      ) {
        this.vx *= -1;
      }

      if (
        this.x + this.radius > playertwo.x &&
        this.x + this.radius < playertwo.x + playertwo.width &&
        this.y + this.radius > playertwo.y &&
        this.y - this.radius < playertwo.y + playertwo.height
      ) {
        this.vx *= -1;
      }
      if(this.x + this.radius >= canvas.width){
        this.scorep1.update();
        this.reset();
      }
        if(this.x - this.radius <= 0){
            this.scorep2.update();
            this.reset
    }
  }
}

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  reset() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.vx = 0;
    this.vy = 0;
    this.resetPos = false;
  }
}
