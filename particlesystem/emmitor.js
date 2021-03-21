class Emittor{
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  emit(num) {
    for (let i = 0; i < num; i += 1) {
    	this.particles.push(new Particle(this.pos.x, this.pos.y));
    }
  }

  setPos(x, y) {
    let p = createVector(x, y);
    this.pos = p;
  }
force
  update() {
    for (let particle of this.particles) {
      particle.show();
      particle.update();
      particle.apply(force);
    }
    this.particles = this.particles.filter(particle => particle.lifetime > 0);
  }
}
