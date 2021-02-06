
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();

	bob1 = new Bob(150,500);
	bob2 = new Bob(250,500);
	bob3 = new Bob(350,500);
	bob4 = new Bob(450,500);
    bob5 = new Bob(550,500);
  

	rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,+100,0);
    rope5 = new Rope(bob5.body,roof.body,+200,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  
  roof.display();
 

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
 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:600,y:0});
	}
  }



