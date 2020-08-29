class Pentagon {
    constructor(x,y,width,height){
       var options={
         isStatic:false,
         density:10
       }

       this.image = loadImage("pentagon.png");
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
