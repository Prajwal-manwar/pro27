
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundObject = new Ground(400, 680, 800, 20)
    roofObject1 = new Roof(270, 200, 50, 20)
    roofObject2 = new Roof(320, 200, 50, 20);
    roofObject3 = new Roof(370, 200, 50, 20);
    roofObject4 = new Roof(420, 200, 50, 20);
    roofObject5 = new Roof(470, 200, 50, 20);
    pendulumObject1 = new Paper(270, 500, 50)
    pendulumObject2 = new Paper(320, 500, 50);
	  pendulumObject3 = new Paper(370, 500, 50);
	  pendulumObject4 = new Paper(420, 500, 50);
    pendulumObject5 = new Paper(470, 500, 50);

    rope1 = new Slingshot(pendulumObject1.body, roofObject1.body)
    rope2 = new Slingshot(pendulumObject2.body, roofObject2.body)
    rope3 = new Slingshot(pendulumObject3.body, roofObject3.body);
    rope4 = new Slingshot(pendulumObject4.body, roofObject4.body);
    rope5 = new Slingshot(pendulumObject5.body, roofObject5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  groundObject.display();
  roofObject1.display();
  pendulumObject1.display();
  pendulumObject2.display();
  pendulumObject3.display();
  pendulumObject4.display();
  pendulumObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roofObject1.display();
  roofObject2.display();
  roofObject3.display();
  roofObject4.display();
  roofObject5.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(pendulumObject1.body, pendulumObject1.body.position, {x: -120,y: -120,});
  }
}

