var bananaImage;
var ObstacleImage;
var ObstacleGroup;
var FoodGroup
var backgroundimage;
var score;

function preload()
{
  backgroundimage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}
function setup() {
  createCanvas(600, 400);
  ground = createSprite(200,180,400,20);
  ground.addImage("background", backgroundimage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
    
  invisibleGround = createSprite(20,350,800,10);
  invisibleGround.visible = false;
  
  monk = createSprite(50,360,2,5);
  monk.addAnimation("running", player_running);
  monk.scale = 0.1;
  
  ObstacleGroup = new Group();
  FoodGroup = new Group();
  banana();
  obstacles();
  score = 0;
  
}
function draw() {

  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,300,50);   
  
  if(keyDown("space")) {
    monk.velocityY = -5;
  } 
 
  monk.collide(invisibleGround);
  if (ground.x < 0){
    ground.x = ground.width/2;}
  //add gravity
    monk.velocityY = monk.velocityY + 0.8;
  
  if(FoodGroup.isTouching(monk)){
    score = score+2;
    FoodGroup.destroyEach();
    
  switch(score) {
      case 10: monk.scale = 0.12;
              break;
      case 20: monk.scale = 0.14;
              break;
      case 30: monk.scale = 0.16;
              break;
      case 40: monk.scale = 0.18;
              break;
      default: break;
  }
  }
  if(ObstacleGroup.isTouching(monk)){
    monk.scale = 0.1
}

  drawSprites();
}
function banana(){
  if(frameCount%80===0){
var banana = createSprite(200,random(120,200), 50 ,50);
banana.addImage("banana", bananaImage);
banana.scale = 0.05;
banana.velocityX = -2;
banana.lifetime = 100;
FoodGroup.add(banana);
}
}
function obstacles()
  {
   if(frameCount%300===0)    {
var obstacle = createSprite(200,320,50,50);
obstacle.addImage("Stone", obstacleImage);
obstacle.scale=0.15;
obstacle.lifetime = 100;
ObstacleGroup.add(obstacle);
   }
  
}