
var gameState
var database;
var playerCount = 0;
var form,player,game,welcome,bg1,bg2;
var level;
var allPlayers;
var basebg,playerimg;
var seen;


function preload(){
  bg1 = loadImage("images/background1.jpg");
  bg2 = loadImage("images/welcome.jpg");
  basebg = loadImage("images/baselevel.jpg");
  playerimg = loadImage("images/player.jpg");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  form = new Form();
  seen = createSprite(400,400,displayWidth/2,displayHeight/4)
}
 


function draw(){
  if(gameState == 0 ){
    background(bg1);
    form.display(); 
  }
  else if (gameState == 1 && player.level == 0 ){
    background(bg2);
    form.hide();
    welcome = new Welcome();
    welcome.display();
    
  }
  game.play();
  if(level != undefined){
    seen.velocityY = 2;
    seen.scale = 7;
    seen.addImage(basebg);
    if(seen.y> displayHeight){
      seen.y = displayHeight/4;
    }
    level.show();
    
  }
  /*
  else if(gameState == 2){
    level = new Gamelevel();
    level.show()
  }
  */


}
