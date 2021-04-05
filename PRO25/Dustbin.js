class Dustbin{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var options={
            isStatic: true
        }
        this.image = loadImage("dustbingreen.png")
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.bottomBody);

        this.leftBody=Bodies.rectangle(this.x-90,this.y,this.width,this.height,options);
        World.add(world,this.leftBody);

        this.rightBody=Bodies.rectangle(this.x+90,this.y,this.width,this.height,options);
        World.add(world,this.rightBody);

    }
    display(){
        var posbottom = this.bottomBody.position;
        var posleft = this.leftBody.position;
        var posright = this.rightBody.position;
        push();
        translate(posleft.x,posleft.y)
        fill(255)
        //imageMode(CENTER);
        //image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
        push();
        translate(posright.x,posright.y)
        fill(255)
        //imageMode(CENTER);
        //image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
        push();
        translate(posbottom.x,posbottom.y)
        fill("green")
        imageMode(CENTER);
        image(this.image,posbottom.x,posbottom.y,this.width,this.height);
        pop();
    }
}