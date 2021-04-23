class Obstacle{
    constructor(image,type){
        this.sprite = createSprite(random(50,displayWidth-50),0,10,10);
        this.sprite.velocityY = 3;
        this.sprite.lifetime = displayHeight/3;
        //console.log("createdobstacle")
        obstacleGroup.push(this.sprite);
       // console.log("adedtothegroup")
        this.sprite.addImage(image) ;
        
      }
}