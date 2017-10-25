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

// particle object creation
function Particle (x, y, radius, color) {
    // variables
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    // update function
    this.update = function() {
        this.draw();
        // We could add here behaviours: if's etc
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
let nParticles = 1;
let radius = 5;
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
