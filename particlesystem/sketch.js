let movers = [];
let attractor;
let emmitors = [];
let force;
// let sound;

// function preload() {
// 	sound = loadSound('dogfight.mp3');	
// }

function setup() {
	createCanvas(windowWidth, windowHeight);
	force = createVector(0, 0.2);
	for (var i = 0; i < 10; i++) {
		let x = random(width);
		let y = random(height);
		m = random(50, 150);
		movers[i] = new Mover(x, y, m);
		emmitors[i] = new Emittor(x, y);
	}
	attractor = new Attractor(width/2, height/2, 100);
}

function draw() {
	background(0);
	for(let emmitor of emmitors) {
		emmitor.update();
		emmitor.emit(5);
	}
	for (let mover = 0; mover < movers.length; mover++) {
		movers[mover].show();
		movers[mover].update();
		attractor.attract(movers[mover]);
		emmitors[mover].setPos(movers[mover].pos.x, movers[mover].pos.y);
	}
	attractor.show();
}
