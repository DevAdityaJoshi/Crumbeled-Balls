
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,300,10,10);

	rect1 = new Dustbin(200,700,200,20);
  rect2 = new Dustbin(500,700,20,200);
  rect3 = new Dustbin(700,700,20,200);
  rect4 = new Dustbin(600,690,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode = UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{y:50,x:-50})
  }
}


