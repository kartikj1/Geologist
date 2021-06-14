
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	plane= new Plane(600,height,1200,20);
	iron = new Iron(300,350);
	rubber = new Rubber (900,450,70);
	stone = new Stone(700,320,100,100);
	hammer = new Hammer (10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  plane.display();
  iron.display();
  rubber.display();
  stone.display();
  hammer.display();
  
 
}



