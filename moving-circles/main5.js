// selecting the canvas
let canvas = document.querySelector('canvas');

// canvas sizes
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// creating a 2D context
let ctx = canvas.getContext('2d');

// Crating a Javascript Object Circle
function Circle(posX, posY, velX, velY, radius) {
    this.posX = posX;
    this.posY = posY;
    this.velX = velX;
    this.velY = velY;
    this.radius = radius;

    this.draw = function() {
        // circle drawing
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 9;
        ctx.stroke();
        // console.log('drawing!');
    }
    this.update = function() {
        // draw call
        this.draw();
        // change direction horizontal
        if (this.posX + this.radius > innerWidth || this.posX - this.radius < 0 ) { this.velX = -this.velX; }
        // change direction vertical
        if ( this.posY + this.radius >innerHeight || this.posY - this.radius < 0) { this.velY = -this.velY }
        // advance X,Y units
        this.posX += this.velX;
        this.posY += this.velY;
    }
}

// randomization
let posX = Math.random() * canvas.width;
let velX = (Math.random() - 0.) * 10; // (-1, 1)
let posY = Math.random() * canvas.height;
let velY = (Math.random() - 0.5) * 10; // (-1, 1)
let radius = 100;
// new circle object creation 
let circle1 = new Circle(posX, posY, velX, velY, radius);

function animate() {
    // 1. clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // 2. circle update
    circle1.update();
    // 3. call the main Loop
    requestAnimationFrame(animate);
}
// animate!
animate();


