class Gamelevel{
    constructor(){
      
        //this.bg = loadImage("image/baselevel.jpg");
        //this.image = loadImage("image/player.jpg")
       /* this.bgsprite = createSprite(displayWidth/2,displayHeight/2,100,100);
        this.bgsprite.scale = 5;
        this.bgsprite.velocityY = 2;
        this.bgsprite.addImage(basebg);*/
        this.runner = createSprite(100,100,displayWidth/2,displayHeight-200)
        this.runner.addImage(playerimg);
        this.obstaclegroup = new Group ();
        this.goodgroup = new Group ();
        console.log("createdgamelevel");   
    }
   
    show(){
        if(frameCount%100 == 0 ){
            var select = Math.round(random(1,2));
            if(select == 1){
                var rand=Math.round(random(1,4)) ;
          
              switch(rand){
                case 1:obstacle = new Obstacle(bad1,1);  
                break;
                case 2 :obstacle= new Obstacle(bad2,1); 
                break;
                 case 3 :obstacle = new Obstacle(bad3,1); 
                break;
                 case 4 :obstacle= new Obstacle(bad4,1); 
                break;
               
                default:break;
              }
             
            }
            else{
                var rand=Math.round(random(1,3)) ;
          
                switch(rand){
                  case 1:obstacle = new Obstacle(good1,2);  
                  break;
                  case 2 :obstacle= new Obstacle(good2,2); 
                  break;
                   case 3 :obstacle = new Obstacle(good3,2); 
                  break;
                  
                 
                  default:break;
                }   
            }
        }
        
        drawSprites();
    }
     spawnbad() {
        if(frameCount % 60 === 0) {
          var obstacle = createSprite(random(50,displayWidth-50),0,10,10);
          obstacle.velocityY = - (6 + 3*count/100);
          
          
          this.obstaclegroup.add(obstacle);
        }
    }
    spawngood() {
        if(frameCount % 60 === 0) {
          var obstacle = createSprite(random(50,displayWidth-50),0,10,10);
          obstacle.velocityY = - (6 + 3*count/100);
          
          var rand=Math.round(random(1,6)) ;
      
          switch(rand){
            case 1:obstacle.addImage (obstacle1);  
            break;
            case 2 :obstacle.addImage (obstacle2);
            break;
             case 3 :obstacle.addImage (obstacle3);
            break;
             case 4 :obstacle.addImage (obstacle4);
            break;
             case 5 :obstacle.addImage (obstacle5);
            break;
             case 6 :obstacle.addImage (obstacle6);
            break;
            default:break;
          }
          this.goodgroup.add(obstacle);
        }
    }
}