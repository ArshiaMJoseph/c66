var fixedRect,movingRect;
var fixedrect1,fixedrect2;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,100,50,50);//25
  movingRect = createSprite(500,200,20,100);//10
  fixedRect.shapeColor ="green"
  movingRect.shapeColor = "green"

  fixedrect1 = createSprite(200,100,50,50);
  fixedrect1.shapeColor ="green"

  fixedrect2 = createSprite(300,100,50,50);
  fixedrect2.shapeColor ="green"




  mrect1 = createSprite(600,100,50,50);
  mrect2 = createSprite(600,400,50,50);
  mrect1.velocityY = 2;
  mrect2.velocityY = -2;
  mrect1.shapeColor = "blue";
  mrect2.shapeColor = "pink"
 
}

function draw() {
  background(255,255,255); 
  fixedRect.shapeColor ="green"
  movingRect.shapeColor = "green"
  fixedrect2.shapeColor ="green"
  fixedrect1.shapeColor ="green"

  movingRect.x =World.mouseX;
  movingRect.y = World.mouseY; 

 // console.log(movingRect.y-fixedRect.y)DRY-do not repeat yourself

 if(isTouch(movingRect,fixedrect1)){//argument
  fixedrect1.shapeColor ="red"
  movingRect.shapeColor = "red"
}

if(isTouch(movingRect,fixedRect)){//argument
  fixedRect.shapeColor ="red"
  movingRect.shapeColor = "red"
}
if(isTouch(movingRect,fixedrect2)){//argument
  fixedrect2.shapeColor ="red"
  movingRect.shapeColor = "red"

}


bounce(mrect1,mrect2);




  drawSprites();
}

