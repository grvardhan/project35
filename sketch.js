//Create variables here
var dog,happydog,database,foods,foodstack;
function preload()
{
	//load images here
  dog =loadImage("Dog.png")
happydog=loadImage("happydog.png")  

}

function setup() {
	createCanvas(500, 500);

 dog = createSprite (250,250,20,20);
 dog.addImage(dog,"Dog.png");
}


function draw() {  

  drawSprites();
  //add styles here

}



