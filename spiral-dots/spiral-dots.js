// selecting the canvas
let canvas = document.querySelector('canvas');

// canvas sizes
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// creating a 2D context
let ctx = canvas.getContext('2d');
console.log( 'the canvas context: ' + ctx);

// Circle Class 
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius =  radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(posX, posY, radius, 0, 360, false);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 9;
        ctx.stroke(); 
    }
}

// 1. Loop A
let posX = Math.random() * canvas.width;
let velX = (Math.random() - 0.5) * 10; // (-1, 1) * 10 
let posY = Math.random() * canvas.height;
let velY = (Math.random() - 0.5) * 10; // (-1, 1) * 10
let radius = 50;
let color = '#fff';
function animate() {
    // clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // create circle
    let circle = new Circle(posX, posY, radius, color);
    circle.draw();
    // advance X,Y units
    posX += velX;
    posY += velY;
    // change direction horizontal
    if (posX + radius > canvas.width || posX - radius < 0 ) { velX = -velX; }
    // change direction vertical
    if ( posY + radius > canvas.height || posY - radius < 0) { velY = -velY }
    // call the main Loop
    requestAnimationFrame(animate);
}
animate();



