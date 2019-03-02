class Scene {
  constructor(){
    this.stars = [];
    for (var i = 0; i < 100; i++) {
      this.stars.push(new Star(random(WIDTH),random(HEIGHT), random(20)));
    }
  }

  draw(){
    this.stars.forEach(star => star.draw());
  }

  update(){
    this.stars.forEach(star => star.update());
  }
}
