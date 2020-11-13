var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,200,80,50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(300,300,80,50);
  fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 ){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    } else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }
  drawSprites();
}