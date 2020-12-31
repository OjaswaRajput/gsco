var car,carImage;
var wall,wall2;
var score;
var weight;
var gameState = PLAY;
var PLAY = 1;
var END = 0 ;

let  paused = true;

function setup() {
  createCanvas(400,800);
  car = createSprite(200,100, 15, 30);
  wall = createSprite(200,650,400,50);
}

function preload(){
 
}

function draw() {
  background("gray");  
  wall.shapeColor = "red";
  car.shapeColor = "white";
  speed = random(54,90);
  weight = random(400,1500);
    car.velocityY = 10;
     wall2 = createSprite(100,400,800,100);
     car.depth = wall2.depth
     car.depth = car.depth
     car.depth = +1;
  
  wall.dbug = true;
  
    textSize(25);
    fill("red");
    text("weight = "+ weight,2,150);
    textSize(25);
    fill("red");
    text("bullet speed = "+speed,2,200);
    textSize(25);
    fill("red");
    text("Thickness = 50",25,590);
   score = Math.round(random(10,200,+5));

  if(car.isTouching){
   
      car.velocityY = 0 ;
    var deformation = 0.5*weight*score*score/22509;
    if (deformation<100){
       car.shapeColor =color(255,0,0 );
  }
        if (deformation>180){
       car.shapeColor =color(230,230,0 );
  }
        if (deformation<100 && deformation>180){
       car.shapeColor =color(0,255,0 );
  }
    car.y < 700;
    textSize(25);
    fill("red");
    text("PRESS F5 OR RESTART PAGE",25,100);
    textSize(30)
    fill("blue");
    text("Damage = " + score,100,300);
   
      
    
  }
  
  
 
   
    drawSprites();  
  

}
