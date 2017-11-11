let particle;

function setup() {
    particle = new Particle(200,200, 10, 10);
    particle2 = new Particle(300,200, 30, 30);
    createCanvas(window.innerWidth, window.innerHeight);
 
}

function draw(){
    background(200);
    particle.drawParticle();
    particle.moveParticle();
    particle2.drawParticle();
    particle2.moveParticle();
}

class Particle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    drawParticle() {
        fill(0);
        ellipse(this.x, this.y, this.radius, this.radius);
    }   

    moveParticle() {
        this.x += random(-1,1);
        this.y += random(-1,1);
    }
}