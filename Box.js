class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        density: 3
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.visibility=255;
  this.image1 = loadImage("greenblock.jpg");
  this.image2 = loadImage("blueblock.png");
  this.image3 = loadImage("yellowblock.png");
  this.image4 = loadImage("redblock.jpg");
  World.add(world, this.body);
  
}

display1(){
  var pos =this.body.position;
  if(this.body.speed<3){
  image(this.image1,pos.x, pos.y, this.width, this.height);
  }

  else{
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image1,pos.x, pos.y, this.width, this.height);
    pop();

  }
}

display2(){
  var pos =this.body.position;
  if(this.body.speed<3){ 
  image(this.image2,pos.x, pos.y, this.width, this.height);
  }

  else{
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image2,pos.x, pos.y, this.width, this.height);
    pop();

  }

}
display3(){
  var pos =this.body.position;
  if(this.body.speed<3){
  image(this.image3,pos.x, pos.y, this.width, this.height);
  }

  else{
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image3,pos.x, pos.y, this.width, this.height);
    pop();

  }

}
display4(){
  var pos =this.body.position;
  if(this.body.speed<3){
  
  image(this.image4,pos.x, pos.y, this.width, this.height);
  }

  else{
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image4,pos.x, pos.y, this.width, this.height);
    pop();

  }

}

  }

