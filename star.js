const STAR_STROKEWEIGHT = 4;
const STAR_STROKE = 255;

class Star{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = map(z,0,20,6,2);
    this.strokeWeight = 4;
  }

  draw(){
    push();
    stroke(STAR_STROKE);
    strokeWeight(STAR_STROKEWEIGHT/2);
    //triangle(this.x-STAR_STROKEWEIGHT/4,this.y,this.x+STAR_STROKEWEIGHT/4,this.y,this.x,this.y-5);
    strokeWeight(STAR_STROKEWEIGHT);
    point(this.x, this.y);
    pop();
  }

  update(){
    this.y += this.speed;
    if(this.y > HEIGHT){
      this.y = -10;
    }
  }
}
