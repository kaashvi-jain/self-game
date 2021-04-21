class Welcome{
    constructor(){
        //this.bg = loadImage("images/welcome.jpg")
        this.start = createButton("start");
    }
    display(){
       // background(this.bg);
        fill("black");
        textSize(30);
        text("welcome "+player.name,displayWidth/2 - 80,displayHeight/4 - 100);
        text("rules and about the game",displayWidth/2 -80,displayHeight/4 - 60);
        this.start.position(displayWidth/2,displayHeight - 200);
        this.start.mousePressed(()=>{
            this.start.hide();
            //game.update(2);
            player.level += 1 ;
            player.update();
           
           /* game.getState();
            console.log(gameState);*/
        })

    }
    hide(){
        background(255);
        this.start.hide();
        clear();
    }
}