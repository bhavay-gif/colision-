var movingrect , fixedrect


function setup() {
createCanvas(800,800)

movingrect=createSprite(400,100,70,120)
fixedrect=createSprite(600,500,50,100)
 
fixedrect.shapeColor="red"
movingrect.shapeColor="red"

movingrect.debug=true
fixedrect.debug=true  
}

function draw(){

background("black")
movingrect.x=World.mouseX
movingrect.y=World.mouseY

 if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
   fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
     fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)
  {
  fixedrect.shapeColor="blue"
  movingrect.shapeColor="blue"
  }
else{
  fixedrect.shapeColor="red"
movingrect.shapeColor="red"
}
drawSprites()
}