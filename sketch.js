const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var pb,cb,p,c

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   pb = new PB(windowWidth/4,random(450, height - 300),180,150)
   cb = new CB(windowWidth/4*3,random(450, height - 300),180,150)
   p = new P(windowWidth/4,pb.body.position.y-153,180,150)
   c = new C(windowWidth/4*3,cb.body.position.y-153,180,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  

   //display Player and computerplayer
   pb.display()
   cb.display()
   p.display()
   c.display()

}
