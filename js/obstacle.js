class Obstacle{
    constructor(image,type){
        this.sprite = createSprite(random(50,displayWidth-50),0,10,10);
        this.sprite.velocityY = 3;
        this.sprite.lifetime = displayHeight/3;
        obstacleGroup.push(this.sprite);
        this.sprite.addImage(image) ;
        
      }
}