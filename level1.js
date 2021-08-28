function level1(){
    background(bgImg1);
    var score=0;
    text("Score: "+ score, 200,50);
  

    coin.x = Math.round(random(120,400));
    
    if(keyDown("left_arrow")){
        angryMan.x = angryMan.x - 3;
      }
      
    if(keyDown("right_arrow")){
        angryMan.x = angryMan.x + 3;
      }
      
    if(keyDown("up")){
        angryMan.velocityY = -10;
      }
      angryMan.velocityY = angryMan.velocityY + 0.8
    
    if(tower.y > 400){
      tower.y = 300
    }

    if(angryMan.isTouching(coin)){
      coin.visible=false;
      score=score++;

    }

    }