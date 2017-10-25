// selecting the canvas html object
let canvas = document.querySelector('canvas');
console.log(canvas);
// setting canvas width and height
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
// creating a canvas context
let ctx = canvas.getContext('2d');
//  using the Loop for multiple squares > creating squares randomly +  random colors + random sizes

for ( let posY = 0; posY < window.innerHeight; posY++) {
    for( let posX = 0; posX < window.innerWidth; posX++) {
        // Random colors and d sizes
        let color_R = Math.floor(Math.random()*255);
        let color_G = Math.floor(Math.random()*255);
        let color_B = Math.floor(Math.random()*255);
        let sizeX = 100;
        let sizeY = 100;
        // Squares
        ctx.fillStyle = `rgb(${color_R}, ${color_G}, ${color_B})`;
        ctx.fillRect(posX, posY, sizeX, sizeY);
    }
}
