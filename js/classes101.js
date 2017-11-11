JS
// Will work if correctly transpiled 
export class Particle {
    constructor() {
        console.log('Partcile has been started');
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
    }
    drawParticle() {
        console.log('a particle has been created!');
        ellipse(this.x, this.y, 20, 20);
    }
}