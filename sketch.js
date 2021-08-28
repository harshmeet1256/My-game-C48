var bg, bgImg, bgImg1;
var angryMan,angrymanImg;
var tower, towerImg;
var coin, coinImg;

var gameState="intro";
var gameLevel = "start";





function preload(){
  bgImg=loadImage("Images/background2.jpg");
  bgImg1=loadImage("Images/background1.jpg");
  angrymanImg=loadAnimation("Images/b1img.png");
  towerImg=loadImage("Images/tower.JPG");
  coinImg=loadImage("Images/coin.png");
}
function setup() {
  createCanvas(1400,700);

 
  angryMan=createSprite(400, 200, 50, 50);
  angryMan.addAnimation("climbing",angrymanImg);

  tower=createSprite(800,500,80,80);
  tower.addImage(towerImg);
  tower.scale=1.5;

  coin=createSprite(600,60);
  coin.addImage(coinImg);
  coin.scale=0.1;
  
}

function draw() {
  //background(bgImg); 

  drawSprites();

  if(gameState==="intro"){

    intro();

    console.log("yess yess")
    angryMan.visible=false;
    tower.visible=false;
    coin.visible=false;

    gameState = "pause"
    
  }

  if(keyDown("space")){
    intro1();
   gameLevel= "level1"
  }
   

  if(keyDown("s")){
    console.log(gameLevel)
    console.log(gameState)
    angryMan.visible=true;
    tower.visible=true;
    coin.visible=true;

    level1();
  }

  if(gameState==="intro1"){
    intro2();
    angryMan.visible=false;
    tower.visible=false;
    coin.visible=false;
    if(keyDown("space")){
      gameState = level2
     }
       
  }

  if(gameLevel === 2){
    level2();
  }

  if(gameState==="intro2"){
    intro3();
    angryMan.visible=false;
    tower.visible=false;
    coin.visible=false;
    if(keyDown("space")){
      gameState = level3
     }
      
  }

  if(gameLevel === 3){
    level3();
  }
}