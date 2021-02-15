var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var line;
var particles = [];
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var count=0
var End=0
var Play=1
var gameState=Play
var particle
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80  ) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("red")
  text("Score : "+score,50,30);
  text("500",180,550)
  text("500",100,550)
  text("500",10,550)
  text("500",250,550)
  text("100",500,550)
  text("200",580,550)
  text("100",340,550)
  text("200",740,550)
  text("100",430,550)
  text("200",650,550)
  Engine.update(engine);
  // line=createSprites(30,30,30,30)
 if (gameState===Play) {
   
 
  
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
     
  //   }
    
    // for (var j = 0; j < particles.length; j++) {
      
      //  particles[j].display()
      // }
      if (particle!=null) {
        particle.display();
        if (particle.body.position.y>760) {
          if (particle.body.position.x<305) {
          score+=500
           particle=null
          
        }
      }
      
    }
      if (particle!=null) {
        particle.display();
        if (particle.body.position.y>760) {
          if (particle.body.position.x>305 && particle.body.position.x< 600) {
            score+=100
             particle=null
            
          }
      }
      
    }
      if (particle!=null) {
        particle.display();
        if (particle.body.position.y>760) {
          if (particle.body.position.x>601 &&particle.body.position.x<900 ) {
            score+=200
            particle=null
           
         }  
      }
      
    }
    


    if (count>=6) {
      gameState=End
    }
  }
  else if (gameState===End) {
   textSize(60)
    fill(255,255,255)
    text ("Game Over ",230,250)
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
    
    plinkos[i].display();
    
  }

  //  drawSprites()
}

function mousePressed() {
  if (gameState!=End) {
    particle=new Particle(mouseX,10,10,10)
    count+=1
    console.log(count)
  }
  
}





