class Mover {
  constructor(x, y, m) {
    this.pos =createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(2);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
    this.angle = 0;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.velocity);
    this.velocity.add(this.acc);
    this.acc.set(0, 0);
  }

  show() {
    fill(255);
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = this.velocity.heading();
    rotate(this.angle);
    sound.play();
    triangle(-this.r, -this.r/2, -this.r, this.r/2, this.r, 0);
    pop();
  }
}
