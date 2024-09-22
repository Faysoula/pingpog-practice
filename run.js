var game = new game();

var score1 = new Score(10, 30, "Player 1");
var score2 = new Score(680, 30, "Player 2");

var ball = new ball(400, 300, 10, "purple", score1, score2);

var p1 = new Paddle(30, 250, 100, 20, 5, { up: "w", down: "s" });
var p2 = new Paddle(760, 250, 100, 20, 5, { up: "ArrowUp", down: "ArrowDown" });

game.addSprite(p1);
game.addSprite(p2);
game.addSprite(ball);
game.addSprite(score1);
game.addSprite(score2);

game.animate();
