class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 10, 500);
    let g = 5;
    let mag = g * (this.mass * mover.mass) / distanceSq;
    force.setMag(mag);
    mover.applyForce(force);
  }

  show() {
    fill("red");
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
