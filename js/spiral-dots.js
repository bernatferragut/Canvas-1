// JS
// Selections
let canvas = document.querySelector('canvas');
// Canvas Dimensions
canvas.width = window.innerWidth;
canvas.height =  window.innerHeight;
// Context Creation
let ctx = canvas.getContext('2d');

///////////  C  L  A  S  S  ////////////
class Point {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color =  color;

    }
    // Dot Behaviours
    sayHi() {
        console.log('Hi, je suis un DOT!');
    }
}

// Drawing
function Drawing() {
    ctx.stroke();
    ctx.arc();
}

let myPoint = new Point(2, 2, 45, 'black');
myPoint.sayHi();