// selecting the canvas html object
let canvas = document.querySelector('canvas');
console.log(canvas);
// setting canvas width and height
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
// creating a canvas context
let ctx = canvas.getContext('2d');
console.log('this is the canvas context: ' + ctx);
// create a square
ctx.fillStyle = 'rgba(255,50,50,0.5)';
// ctx.fillRect(100, 100, 50, 50);
//  using the Loop for multiple squares > creating squares randomly +  random colors + random sizes
for( let sq = 0; sq < 10000; sq++) {
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let color_R = Math.floor(Math.random()*255);
    let color_G = Math.floor(Math.random()*255);
    let color_B = Math.floor(Math.random()*255);
    let sizeX = Math.random() * 5;
    let sizeY = Math.random() * 5;
    // console.log('POS_X: '+posX, 'POS_Y: '+posY);
    ctx.fillStyle = `rgb(${color_R}, ${color_G}, ${color_B})`;
    ctx.fillRect(posX, posY, sizeX, sizeY);
}
