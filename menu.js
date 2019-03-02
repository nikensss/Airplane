class Menu {
    constructor() {
        this.x = 0.1 * WIDTH;
        this.y = 0.85 * HEIGHT;
        this.width = 0.8 * WIDTH / 3;
        this.height = 0.1 * HEIGHT;
    }

    draw() {
        push();
        translate(this.x, this.y);
        this.drawMainContainer();        
        this.drawRedOption();
        this.drawPurpleOption();
        this.drawBlueOption();
        pop();
    }

    drawMainContainer(){
        push();
        fill(180, 180, 180, 120);
        rect(0, 0, this.width, this.height);
        rect(this.width, 0, this.width, this.height);
        rect(2 * this.width, 0, this.width, this.height);
        pop();
    }

    drawRedOption(){
        push();
        rectMode(CENTER);
        fill(BLOCK_COLOURS.red.value);
        rect(this.width / 2, this.height / 2, 30, 30);
        fill(255);
        textAlign(CENTER);
        text('1', this.width / 2, 12 * this.height / 13);
        pop();
    }

    drawPurpleOption(){
        push();
        translate(this.width,0);
        rectMode(CENTER);
        fill(BLOCK_COLOURS.purple.value);
        rect(this.width / 2, this.height / 2, 30, 30);
        fill(255);
        textAlign(CENTER);
        text('2', this.width / 2, 12 * this.height / 13);
        pop();
    }

    drawBlueOption(){
        push();
        rectMode(CENTER);
        translate(2*this.width,0);
        fill(BLOCK_COLOURS.blue.value);
        rect(this.width / 2, this.height / 2, 30, 30);
        fill(255);
        textAlign(CENTER);
        text('3', this.width / 2, 12 * this.height / 13);
        pop();
    }
}