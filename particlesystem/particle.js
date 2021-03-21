class Particle {

  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.velocity.mult(random(5, 9));
    this.lifetime = 255;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acc);
    this.lifetime -= 50;
    this.acc.mult(0);
    //sound.play(); 
  }

    show() {
    fill(255, this.lifetime);
    noStroke();
    ellipse(this.position.x, this.position.y, 4, 4);
  }

  apply(force) {
    this.acc.add(force);
  }
}
