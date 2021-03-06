const WIDTH = 600;
const HEIGHT = 740;

var game, menu, airplane, blocks, interval, scene, objectsToRestart;

Array.prototype.last = function () {
	return this[this.length - 1];
}

function setup() {
	let c = createCanvas(WIDTH, HEIGHT);
	c.attribute("id", "gameCanvas");
	c = document.getElementById("gameCanvas");
	let g = document.getElementById("game");
	g.appendChild(c);
	interval = 15;
	game = new Game();
	menu = new Menu();
	airplane = new Airplane(game);
	scene = new Scene();
	blocks = new Blocks(game);
	objectsToRestart = [airplane, blocks];
	setInterval(update, interval);
}

function draw() {
	background(180);
	scene.draw();
	blocks.draw();
	airplane.draw();
	menu.draw();
	game.draw();
}

function update() {
	if (!game.isPaused && !game.isOver) {
		scene.update();
		blocks.update();
		blocks.colliding(airplane);
	}
}

function keyPressed() {
	if (keyCode === KEY_PAUSE) {
		game.switchState();
	}
	if (game.isOver && keyCode === KEY_RESTART) {
		console.log('Restarting...');
		game.restart(objectsToRestart);
	}
	if (!game.isPaused && !game.isOver) {
		if (keyCode === KEY_LEFT || keyCode === KEY_RIGHT) {
			airplane.move(keyCode);
		} else if (keyCode <= KEY_THREE && keyCode >= KEY_ONE) {
			let color = BLOCK_COLOURS.red;
			if (keyCode === KEY_TWO) {
				color = BLOCK_COLOURS.purple;
			} else if (keyCode === KEY_THREE) {
				color = BLOCK_COLOURS.blue;
			}
			airplane.changeColour(color);
		}
	}
}

function mouseClicked() {
	//check pause
	if(game.pauseIsClicked){
		game.switchState();
	}
	//check game over and then, what game element was clicked
	if (game.isOver && game.restartIsClicked) {
		game.restart(objectsToRestart);
	} else if (!game.isPaused && !game.isOver) {
		if (menu.isClicked) {
			airplane.changeColour(menu.selectedColour);
		} else {
			airplane.moveOnClick();
		}
	}
}