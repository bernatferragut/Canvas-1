// selecting the canvas
let canvas = document.querySelector('canvas');

// canvas sizes
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// creating a 2D context
let ctx = canvas.getContext('2d');
console.log( 'the canvas context: ' + ctx);

// create a circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 360, false);
ctx.strokeStyle = 'red';
ctx.lineWidth = 9;
ctx.stroke();

// moving the circle
// 2. Loop B
// function animate2() { console.log('call 2 made!') }
// setInterval(animate2, 30);

// 1. Loop A
let posX = Math.random() * canvas.width;
let velX = (Math.random() - 0.) * 10; // (-1, 1)
let posY = Math.random() * canvas.height;
let velY = (Math.random() - 0.5) * 10; // (-1, 1)
let radius = 50;
function animate() {
    // clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // create circle
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 360, false);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 9;
    ctx.stroke(); 
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




