
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof1,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob (310,250,15);
	bob2 = new bob (340,250,15);
	bob3= new bob (370,250,15);
	bob4 = new bob (400,250,15);
	bob5 = new bob (430,250,15);

	roof1 = new roof(370,100,250,20)
	
	rope1 = new rope(bob1.body,{x:310,y:100});
	rope2 = new rope(bob2.body,{x:340,y:100});
	rope3 = new rope(bob3.body,{x:370,y:100});
	rope4 = new rope(bob4.body,{x:400,y:100});
	rope5 = new rope(bob5.body,{x:430,y:100});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  

  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-6,y:-3});
	}
  }

