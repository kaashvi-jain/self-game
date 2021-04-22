
var gameState
var database;
var playerCount = 0;
var form,player,game,welcome,bg1,bg2;
var level;
var allPlayers;
var basebg,playerimg;
var seen;
var level2,level3,level4,level5,level6,level7,level8,level9,level10;
var obstacleGroup = [];
var score = 0;


function preload(){
  bg1 = loadImage("images/background1.jpg");
  bg2 = loadImage("images/welcome.jpg");
  basebg = loadImage("images/1.jpg");
  playerimg = loadImage("images/player.jpg");
  level2 = loadImage("images/2.jpg");
  level3 = loadImage("images/3.jpg");
  level4 = loadImage("images/4.jpg");
  level5 = loadImage("images/5.jpg");
  level6 = loadImage("images/6.jpg");
  level7 = loadImage("images/7.jpg");
  level8 = loadImage("images/8.jpg");
  level9 = loadImage("images/9.jpg");
  level10 = loadImage("images/10.png");


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
    for(var i = obstacleGroup.length-1;i>= 0;i -- ){
      if(obstacleGroup[i].isTouching(player)){
        switch(obstacleGroup[i].type){
          case 1 :
            game.endgame();
            break;
          case 2 :
           game.countinegame();
           break;
           default:break;
        }
      }
    }
  }
  
  else if(gameState == 2){
  background(endgame);
  
  }
  


}
