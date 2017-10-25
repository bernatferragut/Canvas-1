// JS
// selecting your Canvas5
let canvas = document.querySelector('canvas');
console.log(canvas);

// resizing your canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// canvas execution context
let ctx = canvas.getContext('2d');
// console.log(ctx);

// Utility function to get random values
function randomIntegerFromRange (min, max) {
    return Math.floor(Math.random() * ( max - min + 1) + min);
}

// particle object creation
function Particle (x, y, radius, color) {
    // variables
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians =  Math.random() * Math.PI * 2; // random angle spawner
    this.velocity = 0.05;
    // update function
    this.update = function() {
        // Behavoiur
        this.radians += (this.velocity);
        this.x = x + (Math.cos(this.radians)) * randomIntegerFromRange(50, 120);
        this.y = y + (Math.sin(this.radians)) *  randomIntegerFromRange(50, 120);
        // console.log(Math.cos(this.radians));
        // Draw
        this.draw();
    };
    // draw function
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };
}

// vars
let particles =[];
let nParticles = 50;
let radius = 3;
let color = 'blue';
// implementation
function init() {
    for (let i = 0; i < nParticles; i++) {
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, color));
    }
}
//init call
init();
console.log(particles);

// animation loop
function animate() {
    ctx.clearRect(0 ,0 , canvas.width, canvas.height);
    particles.forEach( function(particle) { particle.update() });
    requestAnimationFrame(animate);
}
// animate call
animate();
