var car, wall;

var speed, weight;

function setup() {
  createCanvas(1200,800);
  bullet=createSprite(1100, 400, 50, 50);
  wall=createSprite(100, 400, 60, 100);

  speed=random(55, 90);
  weight=random(400, 1500);

  bullet.velocityX=-speed/2;
}

function draw() {
  background("white");  
  if(wall.x=bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/22509;
if(deformation>180){
  bullet.shapeColor=color(255, 0, 0);
}

if(damage<180 && deformation>100){
  bullet.shapeColor=color(230, 230, 0);
}

if(damage<100){
  bullet.shapeColor=color(0, 255, 0);
}
  
  }
  drawSprites();
}