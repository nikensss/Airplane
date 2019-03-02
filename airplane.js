const KEY_LEFT = 37;
const KEY_RIGHT = 39;

class Airplane {
	constructor(game) {
		if (!(game instanceof Game)) {
			throw new Error(`No Game object received! Received: ${game.constructor.name}`);
		}
		this.game = game;
		this.colour = Block.colour;
		this.width = 33;
		this.height = 42;
		this.x = WIDTH / 2;
		this.y = HEIGHT - 5 / 2 * BLOCK_HEIGHT;
	}

	draw() {
		fill(this.colour.value);
		strokeWeight(1);
		stroke(0);

		triangle(this.x - this.width / 2, this.y, this.x + this.width / 2, this.y, this.x, this.top);
	}

	move(direction) {
		if (direction === KEY_LEFT && this.x - BLOCK_WIDTH > this.width / 2) {
			this.x -= BLOCK_WIDTH;
		} else if (direction === KEY_RIGHT && this.x + BLOCK_WIDTH <= WIDTH - this.width / 2) {
			this.x += BLOCK_WIDTH;
		}
	}

	changeColour(colour) {
		this.colour = colour;
	}

	get top() {
		return this.y - this.height;
	}

	restart() {
		this.x = WIDTH / 2;
	}
}