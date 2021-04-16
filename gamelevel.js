class Gamelevel{
    constructor(){
      
        //this.bg = loadImage("image/");
        this.bgsprite = createSprite(displayWidth,displayHeight*3,displayWidth/2,displayHeight/2);
       // this.bgsprite.addImage(this.bg);
        // this.image = loadImage("image/")
        this.runner = createSprite(100,100,displayWidth/2,displayHeight-200)
        //this.runner.addImage(this.image);

    }
    movebg(){
        this.bgsprite.velocityY = 2;
        if(this.bgsprite.y>displayHeight*1.5){
            this.bgsprite.y = displayHeight/2
        }
    }
    show(){
        this.movebg();
        drawSprites();
    }
    
}