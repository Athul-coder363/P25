const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  
  var paper1,dustbin1,dustbin2,dustbin3;
  var engine, world;
  
  function preload()
  {
    
  }
  
  function setup() {
    createCanvas(1600, 700);
  
  
    engine = Engine.create();
    world = engine.world;
  
    //Create the Bodies Here.
    paper1 = new Paper(900,350);
    dustbin1 = new Dustbin(1200,665,200,20);
    //dustbin2 = new Dustbin(1110,575,20,200);//dustbin3 = new Dustbin(1310,575,20,200);
      ground = new Ground(width/2,height,width,50);
  
    Engine.run(engine);
    
  }
  
  
  function draw() {
    rectMode(CENTER);
    background("white");
   // paper1.keypressed();
  // paper1.collide = dustbin1,dustbin2,dustbin3
     paper1.display();
     ground.display();
     dustbin1.display();
     //dustbin2.display();
    // dustbin3.display();
    // console.log(paper1.body);
    
    //drawSprites();
   
  }
  function keyPressed(){
    if(keyCode == UP_ARROW){
   Body.applyForce(paper1.body,paper1.body.position,{x:100 ,y: -130})
    }
  }