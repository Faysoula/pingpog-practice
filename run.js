// Game initialization
const game = new Game();

const score1 = new Score("score1", "Player 1");
const score2 = new Score("score2", "Player 2");

const ball = new Ball(
  game.canvas.width / 2,
  game.canvas.height / 2,
  10,
  "purple",
  score1,
  score2,
  game.canvas
);

const p1 = new Paddle(
  30,
  game.canvas.height / 2 - 50,
  100,
  10,
  5,
  { up: "w", down: "s" },
  game.canvas
);

const p2 = new Paddle(
  game.canvas.width - 40,
  game.canvas.height / 2 - 50,
  100,
  10,
  5,
  { up: "ArrowUp", down: "ArrowDown" },
  game.canvas
);

game.addSprite(p1);
game.addSprite(p2);
game.addSprite(ball);
game.addSprite(score1);
game.addSprite(score2);

game.animate();
