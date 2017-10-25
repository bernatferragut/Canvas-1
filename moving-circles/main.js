"use strict"
// Canvas Selection
let myCanvas = document.querySelector('canvas');
// Expanding the total width
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
// Creating a 2D context
let cx = myCanvas.getContext("2d");
// Creating a Square
cx.fillStyle = 'rgba(255,0,0,0.5)';
cx.fillRect(100,100,100,100);
// Creating a Line
cx.beginPath();
cx.moveTo(50,50);
cx.lineTo(250,250);
cx.lineTo(500,50);
cx.strokeStyle = 'blue';
cx.stroke();
// Creating an Arc
cx.beginPath();
cx.arc(400,400,100,0,Math.PI*2, false);
cx.stroke();
// cx.strokeStyle = 'orange';
cx.stroke()
// Looping through shapes
const repetitionX = window.innerWidth;
for(let i = 0; i < repetitionX; i++) {
    // random vars
    let x = window.innerWidth * Math.random();
    let y = window.innerHeight * Math.random();
    let r = 255 * Math.floor(Math.random()*256);
    let g = 255 * Math.floor(Math.random()*256);
    let b = 255 * Math.floor(Math.random()*256);
    let a =  Math.random();
    
    // random circles
    cx.beginPath();
    cx.arc(Math.random() * x, Math.random() * 1000, 10, 0, Math.PI*2, false);
    cx.stroke();
    cx.strokeStyle = 'rgba(r, g, b, a)';
    cx.stroke()
    // random lines
    cx.beginPath();
    cx.moveTo(50,50);
    cx.lineTo(Math.random()*repetitionX, Math.random() * repetitionX);
    cx.strokeStyle = 'rgba(r, g, b, a)';
    cx.stroke();

}

