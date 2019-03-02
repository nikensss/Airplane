class Blocks{
  constructor(game){
    if (!(game instanceof Game)) {
			throw new Error(`No Game object received! Received: ${game.constructor.name}`);
    }
    this.game = game;
    this.blocks = [];
    for (var i = 0; i < BLOCK_COUNT; i++) {
  		this.blocks[i] = new Block(i * BLOCK_WIDTH, 0, this.game);
  		this.blocks[BLOCK_COUNT + i] = new Block(i * BLOCK_WIDTH, -BLOCK_HEIGHT, this.game);
  	}
  }

  draw(){
    this.blocks.forEach(block => block.draw());
  }

  colliding(airplane){
    this.blocks.forEach(block => block.colliding(airplane));
  }

  update(){
    if(this.blocks[0].y > HEIGHT){
      this.removeFirstRow();
    }
    if(this.blocks.last().y >= -1){
      this.addNewRow();
    }
    this.blocks.forEach(block => block.update());
  }

  removeFirstRow(){
    this.blocks.splice(0,BLOCK_COUNT);
  }

  addNewRow(){
    let y = this.blocks.last().y - BLOCK_HEIGHT;
    for (var i = 0; i < BLOCK_COUNT; i++) {
  		this.blocks.push(new Block(i * BLOCK_WIDTH, y, this.game));
  	}
  }

  restart(){
    this.blocks = this.blocks.slice(-BLOCK_COUNT);
  }
}
