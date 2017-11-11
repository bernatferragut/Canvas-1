// selecting the canvas
let canvas = document.querySelector('canvas');

// canvas sizes
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// creating a 2D context
let ctx = canvas.getContext('2d');

// Crating a Javascript Object Circle
function Circle(posX, posY, velX, velY, radius, color) {
    this.posX = posX;
    this.posY = posY;
    this.velX = velX;
    this.velY = velY;
    this.radius = radius;
    this.color = color

    this.draw = function() {
        // circle drawing
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 9;
        ctx.stroke();
    }
    this.update = function() {
        // draw call
        this.draw();
        // change direction horizontal : Behaviour-1
        if (this.posX + this.radius > innerWidth || this.posX - this.radius < 0 ) { this.velX = -this.velX; }
        // change direction vertical :  Behaviour-2
        if ( this.posY + this.radius >innerHeight || this.posY - this.radius < 0) { this.velY = -this.velY }
        // advance X,Y units
        this.posX += this.velX;
        this.posY += this.velY;
    }
}

// Color list
let myColors = ['lightgreen', 'green', 'darkgreen'];
// Creating random circles and adding them to a List
let noc = Math.random() * 100;
let nocList = [];
for ( let i=0; i<noc; i++ ) {
    let posX = Math.random() * canvas.width;
    let velX = (Math.random() - 0.5)*10 ; // (-1, 1)
    let posY = Math.random() * canvas.height;
    let velY = (Math.random() - 0.5)*10 ; // (-1, 1)
    let radius = Math.random() * 40;
    let color = myColors[Math.floor(Math.random()*3)];
    // circle creation
    let nCircle = new Circle(posX, posY, velX, velY, radius, color);
    // added to the list
    nocList.push(nCircle);
}

// Animation
function animate() {
    // 1. clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // 3. We loop te array for each circle object we animate it
    for ( let x=0; x<nocList.length; x++) {
        nocList[x].update();
    }
    // 3. call the main Loop
    requestAnimationFrame(animate);
}
// animate!
animate();




