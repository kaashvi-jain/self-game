class Welcome{
    constructor(){
        this.bg = loadImage("")
        this.start = createButton("start");
    }
    display(){
        background(this.bg);
        fill("black");
        fontSize(30);
        text("welcome "+player.name,displayWidth/2 -40,displayHeight/4);
        text("trivia",displayWidth/2,displayHeight/2);
        this.start.position(displayWidth/2,displayHeight - 200);
        this.start.mousePressed(()=>{
            this.start.hide();
            game.update(2);
            level = new Gamelevel();
            level.show()

        })

    }
}