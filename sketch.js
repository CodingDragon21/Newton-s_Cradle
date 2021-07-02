const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var b1
var b2
var b3
var b4
var b5


var r1
var r2
var r3
var r4
var r5
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,25,roof_options);
    World.add(world,roof);
//////////////////////////////////////// #1
  var ballOptions = {
	  restitution: 1
  }

b1 = Bodies.circle(400, 400, 20,ballOptions)
World.add(world,b1)

	var options1 = {
		bodyA: b1,
		bodyB: roof,
		
		stiffness : 0.2
	
	  }
	 r1 = Constraint.create(options1)
	  World.add(world, r1)


///////////////////////////////////////// #2
////////////////////////////////////////////

  
  b2 = Bodies.circle(350, 400, 20,ballOptions)
  World.add(world,b2)
  
	  var options2 = {
		  bodyA: b2,
		  bodyB: roof,
		
		  stiffness : 0.2
	  
		}
	   r2 = Constraint.create(options2)
		World.add(world, r2)

/////////////////////////////////////////////////
//////////////////////////////////////////////// #3


		b3 = Bodies.circle(300, 395, 20,ballOptions)
		World.add(world,b3)
		
			var options3 = {
				bodyA: b3,
				bodyB: roof,
				
				stiffness : 0.2
			
			  }
			 r3 = Constraint.create(options3)
			  World.add(world, r3)

/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////#4


			  b4 = Bodies.circle(450, 400, 20,ballOptions)
			  World.add(world,b4)
			  
				  var options4 = {
					  bodyA: b4,
					  bodyB: roof,
					 
					  stiffness : 0.2
				  
					}
				   r4 = Constraint.create(options4)
					World.add(world, r4)

///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////#5


					b5 = Bodies.circle(500, 395  , 20,ballOptions)
					World.add(world,b5)
					
						var options5 = {
							bodyA: b5,
							bodyB: roof,
							
							stiffness : 0.2
						
						  }
						 r5 = Constraint.create(options5)
						  World.add(world, r5)



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  Engine.update(engine)


  rect(roof.position.x,roof.position.y,230,20);

  
  ellipse(b1.position.x, b1.position.y, 40,40)
  ellipse(b2.position.x, b2.position.y, 40,40)
  ellipse(b3.position.x, b3.position.y, 40,40)
  ellipse(b4.position.x, b4.position.y, 40,40)
  ellipse(b5.position.x, b5.position.y, 40,40)
 
  push()
strokeWeight(2)
line(roof.position.x, roof.position.y, b1.position.x, b1.position.y)
line(roof.position.x-40, roof.position.y, b2.position.x, b2.position.y)
line(roof.position.x-80, roof.position.y, b3.position.x, b3.position.y)
line(roof.position.x+40, roof.position.y, b4.position.x, b4.position.y)
line(roof.position.x+80, roof.position.y, b5.position.x, b5.position.y)
 


pop()
 

 
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyReleased(){
	if(keyCode === 32){
		Matter.Body.applyForce(b3,{x: 0, y:0},{x: -0.11, y:0} )
	}
}
