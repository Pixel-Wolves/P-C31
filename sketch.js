var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  wall1 = new Divisions(0,400,10,800);
  wall2 = new Divisions(800,400,10,800);

  for (var k = 0; k <=810; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount % 90 === 0){
    particles.push(new Particle(15));
  }

  for (var l = 0; l < particles.length; l++) {
    particles[l].display();
  }

  wall1.display();
  wall2.display();
}
