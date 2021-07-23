var sea, ship,seaImg,shipAmime;
function preload(){
  seaImg=loadImage("sea.png");
  shipAmime=loadImage("ship-1.png")//,"ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200); 
  sea.addImage(seaImg);
  sea.velocityX=-5;
  ship = createSprite(130,200,30,30);
  ship.addImage(shipAmime);
  ship.scale=0.4;
}

function draw() {
  if(sea.x<0){
    sea.x=sea.width/2;
  }
  
  background("blue");
  drawSprites();
}