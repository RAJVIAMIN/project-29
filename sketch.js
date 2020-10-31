const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body;  

var box1;

function setup() {
  createCanvas(800,400);

  
  
  box1 = new Box(400, 200, 50, 50);
}

function draw() {
  background(0);  

  box1.display();
  
  drawSprites();
}