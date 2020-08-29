const World=Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var pentagon, pentagonImg;


function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
 
  stand= new Ground(500,795,1000,5); 

  block1 = new Box(500,765,50,50);
  block2 = new Box(550,765,50,50);
  block3 = new Box(600,765,50,50);
  block4 = new Box(650,765,50,50);
  block5 = new Box(700,765,50,50);
  block6 = new Box(750,765,50,50);
  block7 = new Box(800,765,50,50);
   
  block8 = new Box(550,715,50,50);
  block9 = new Box(600,715,50,50);
  block10 = new Box(650,715,50,50);
  block11 = new Box(700,715,50,50);
  block12 = new Box(750,715,50,50);

  block13 = new Box(600,665,50,50);
  block14 = new Box(650,665,50,50);
  block15 = new Box(700,665,50,50);

  block16 = new Box(650,615,50,50);

  pentagon = new Pentagon(150,600,100,100);

  slingshot = new SlingShot(pentagon.body,{x:180,y:600});

}

function draw() {
  Engine.update(engine);
  background("pink");  

  stand.display();
  block1.display1();
  block2.display1();
  block3.display1();
  block4.display1();
  block5.display1();
  block6.display1();
  block7.display1();
  
  block8.display2();
  block9.display2();
  block10.display2();
  block11.display2();
  block12.display2();

  block13.display3();
  block14.display3();
  block15.display3();

  block16.display4();

  pentagon.display();
  slingshot.display();
  
}


function mouseDragged(){
  Matter.Body.setPosition(pentagon.body, {x : mouseX , y : mouseY});
}

function mouseReleased(){
 slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(pentagon.body);
  }
}