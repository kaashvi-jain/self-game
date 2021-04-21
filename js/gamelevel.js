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
        console.log("createdgamelevel");   
    }
   
    show(){
        //this.movebg();
        /*if(this.bgsprite.y>displayHeight*1.5){
            this.bgsprite.y = displayHeight/2
        }*/
        drawSprites();
    }
    
}