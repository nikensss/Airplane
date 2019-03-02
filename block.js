const BLOCK_COUNT = 9;
const BLOCK_WIDTH = WIDTH / BLOCK_COUNT;
const BLOCK_HEIGHT = WIDTH / BLOCK_COUNT;
const BLOCK_COLOURS = {
	get red() {
		return {
			name: 'red',
			value: [240, 30, 40]
		};
	},
	get purple() {
		return {
			name: 'purple',
			value: [127, 0, 230]
		};
	},
	get blue() {
		return {
			name: 'blue',
			value: [40, 30, 240]
		};
	}
};

class Block {
	constructor(x, y, game) {
		if (!(game instanceof Game)) {
			throw new Error(`No Game object received! Received: ${game.constructor.name}`);
		}
		this.game = game;
		this.colour = Block.colour;
		this.x = x;
		this.y = y;
		this.firstCollision = true;
	}

	static get colour() {
		let rand = random(3);
		if (rand < 1) {
			return BLOCK_COLOURS.red;
		} else if (rand < 2) {
			return BLOCK_COLOURS.purple;
		} else {
			return BLOCK_COLOURS.blue;
		}
	}

	draw() {
		push();
		noStroke();
		fill(this.colour.value);
		rect(this.x, this.y, BLOCK_WIDTH, BLOCK_HEIGHT);
		pop();
	}

	colliding(airplane) {
		if (this.y + BLOCK_HEIGHT >= airplane.top && this.y < airplane.y &&
			airplane.x - this.x < BLOCK_WIDTH && airplane.x > this.x) {
			if (this.firstCollision) {
				if (this.colour.name !== airplane.colour.name) {
					this.game.isOver = true;
				} else {
					this.colour.value.push(0);
					this.game.updateScore(this.colour);
				}
			}
			this.firstCollision = false;
		}
	}

	update() {
		this.y += 1;
	}

}