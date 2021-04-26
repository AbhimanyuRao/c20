var fixedrect,movingrect;



function setup() {
  createCanvas(800,400);
   fixedrect=createSprite(400, 200, 80, 50);
   fixedrect.shapeColor="gold";
   movingrect=createSprite(600,300,110,60);
   movingrect.shapeColor="purple";
  
  }

function draw() {
  background("black");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
   && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
   && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
   && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
   movingrect.shapeColor="yellow";
   fixedrect.shapeColor="yellow";
   }
  else{
    movingrect.shapeColor="purple";
    fixedrect.shapeColor="gold";
  }
  
  
  drawSprites();
}
