
var no_of_circles = 45;

var canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/* Circle blueprint */
function Circle(x, y, dx, dy, radius, color){
  // A circle has initial x, y coordinate
  // dx : x-velocity, dy : y-velocity
  // radius and color
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  
  /* draws the circle on the canvas */
  this.draw = function() {
     c.beginPath();
     c.arc(this.x, this.y, this.radius, 0, 3.14*2);
     c.stroke();
     c.fillStyle = this.color;
     c.fill();
  }
  
  /* updates the x and y coordinate */
  this.update = function(){
     if(this.x+this.radius>canvas.width || this.x-this.radius<0 )
       {
         this.dx = -this.dx;
       }
     if (this.y+this.radius>canvas.height || this.y-this.radius<0)
       {
         this.dy = -this.dy;
       }
     this.x+= this.dx;
     this.y+= this.dy;
  }
  
}


var circleArray = [];

/* initialising the circles */
for (var i=0;i<no_of_circles;i++){
   var radius = 30 + Math.random()*20;
   var x = radius + Math.random()*(canvas.width-2*radius);
   var y = radius + Math.random()*(canvas.height-2*radius);
   var dx = randVelocity(Math.floor(Math.random()*2));
   var dy = randVelocity(Math.floor(Math.random()*2));
   var color = colorGen(Math.floor(Math.random()*4));
  
   var circle = new Circle(x, y, dx, dy, radius, color);
   
   circleArray.push(circle);
}



function anime(){
   requestAnimationFrame(anime);
   
   c.clearRect(0, 0, canvas.width, canvas.height);
   for(var i=0;i<no_of_circles;i++){
      circleArray[i].draw();
      circleArray[i].update();
   }
}
anime();

/* function generates random velocity */
function randVelocity(i){
  switch(i){
    case 0: return ( 2 + Math.random()*5 ) ;
    case 1: return ( -2 - Math.random()*5 );
    default: return 2;
  }
}
/* random color generator */
function colorGen(i){
  switch(i){
    case 0: return "#872AA7"; 
    case 1: return "#8940DD";
    case 2: return "#DD40DA";
    case 3: return "#FA499D";
    default: return "black";
          }
}

/* jquery */
$('#no_of_circles span').html(no_of_circles);