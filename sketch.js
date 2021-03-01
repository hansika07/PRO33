const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=150;
var score = 0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(640, 500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }

    ground1=new Ground(0,10,10,1700);
    ground2=new Ground(640,10,10,1700);

}
 
function draw() {
  background("black");
  
  fill("white");
  textSize(16);
  text("Score : "+score,20,40);
  text(" 500 ", 10, 460);
  text(" 500 ", 85, 460);
  text(" 500 ", 165, 460);
  text(" 500 ", 245, 460);
  text(" 100 ", 325, 460);
  text(" 100 ", 405, 460);
  text(" 100 ", 485, 460);
  text(" 100 ", 565, 460);
  Engine.update(engine);
  ground.display();
  ground1.display();
  ground2.display();
  
  if ( count===5) {
    gameState ="end";
    textSize(50);
    fill("red")
    text("GameOver", 200, 240);
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }

  for (var i = 0; i < particles.length; i++) {
     particles[i].display();
      
     if (particles[i].body.position.x < 320 && particles[i].body.position.y>480) {
      score=score+500;
      particles.pop();
     }
     else if (particles[i].body.position.x > 320 && particles[i].body.position.y>480) {
      score = score + 100;
      particles.pop();

    }
  }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}
function mousePressed(){
  if(gameState!=="end"){
     count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   

}
