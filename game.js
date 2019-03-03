const KEY_ONE = 49;
const KEY_TWO = 50;
const KEY_THREE = 51;
const KEY_PAUSE = 80;
const KEY_RESTART = 82;

class Game {
    constructor() {
        this.pause = true;
        this.gameOver = false;
        this.score = {
            red: 0,
            purple: 0,
            blue: 0,
            get total() {
                return this.red + this.purple + this.blue;
            }
        }
        this.lastColour = null;
        this.streak = 0;
        this.bestScore = 0;
    }

    draw() {
        push();
        stroke(255);
        strokeWeight(3);
        noStroke();
        fill(45, 187, 92);
        textSize(32);
        text(`Score: ${this.score.total}`, 20, 35);
        textSize(22);
        text(`Best score: ${this.bestScore}`, 20, 70);
        pop();
        if(this.isPaused){
            this.drawPause();
        } else if (this.isOver){
            this.drawGameOver();
        }
    }

    drawPause(){
        push();
        fill(120,255,180);
        textSize(42);
        noStroke();
        textAlign(CENTER);
        text('PAUSE', WIDTH/2, HEIGHT/2);
        pop();
    }
    
    drawGameOver(){
        push();
        fill(255,176,80);
        textSize(42);
        noStroke();
        textAlign(CENTER);
        text('GAME OVER', WIDTH/2, HEIGHT/2);
        textSize(30);
        text('R: Restart', WIDTH/2, HEIGHT/2 + 42);
        pop();
    }

    get isPaused() {
        return this.pause;
    }

    get pauseIsClicked(){
        let clicked = mouseX > 0 && mouseX < WIDTH && mouseY > 0 && mouseY < HEIGHT/2;
        return clicked;
    }

    set isPaused(state) {
        if (typeof state === 'boolean') {
            if (!this.isOver) {
                this.pause = state;
            }
        } else {
            throw new Error(`The state must be a boolean. Received: ${typeof state}`);
        }
    }

    switchState() {
        this.isPaused = !this.isPaused;
    }

    get isOver() {
        return this.gameOver;
    }

    set isOver(state) {
        if (typeof state === 'boolean') {
            if (!this.isPaused) {
                this.gameOver = state;
            }
        } else {
            throw new Error(`The state must be a boolean. Received: ${typeof state}`);
        }
    }

    updateScore(colour) {
        if (colour.name === this.lastColour) {
            this.streak += 1;
        } else {
            this.streak = 1;
            this.lastColour = colour.name;
        }
        this.score[colour.name] += this.streak;
        if(this.score.total > this.bestScore){
            this.bestScore = this.score.total;
        }
    }

    restart(gameObjects){
        if(this.isOver){
            this.isOver = !this.isOver;
            this.score.red = 0;
            this.score.purple = 0;
            this.score.blue = 0;
            for (const gameObject of gameObjects) {
                gameObject.restart();
            }
        }
    }

    get restartIsClicked(){
        if(mouseX > WIDTH/2 - 50 && mouseX < WIDTH/2+50 && mouseY > HEIGHT/2 - 50 && mouseY < HEIGHT/2 + 50){
            return true;
        }
        return false;
    }
}