class Menu {
    constructor() {
        this.x = 0.1 * WIDTH;
        this.y = 0.85 * HEIGHT;
        this.width = 0.8 * WIDTH / 3;
        this.height = 0.1 * HEIGHT;
        this.selectedColour = null;
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

    get isClicked(){
        let clicked = mouseX > this.x && mouseX < this.x + this.width * 3 && mouseY > this.y && mouseY < this.y + this.height;
        if(clicked){
            if(mouseX < this.x + this.width){
                this.selectedColour = BLOCK_COLOURS.red;
            } else if (mouseX < this.x + 2 * this.width){
                this.selectedColour = BLOCK_COLOURS.purple;
            } else {
                this.selectedColour = BLOCK_COLOURS.blue;
            }
        }
        return clicked;
    }

    get selectedColour(){
        var sel = this.selectedCol;
        this.selectedCol = null;
        return sel;
    }

    set selectedColour(col){
        this.selectedCol = col;
    }
}