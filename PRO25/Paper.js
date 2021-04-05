class Paper {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      };
      this.image=loadImage("paper.png"); 
      this.body=Bodies.circle(this.x, this.y, 35, options) 
      World.add(world, this.body);
    }
    display() {
    
var paperpos=this.body.position;
 push() 
translate(paperpos.x, paperpos.y); 
rectMode(CENTER) 
//strokeWeight(4); 
fill("pink") 
imageMode(CENTER); 
image(this.image, 0,0,70, 70) 
//ellipse(0,0,this.r, this.r);
 pop()
    }
  }