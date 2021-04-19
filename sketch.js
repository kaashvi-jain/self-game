
var gameState
var database;
var playerCount = 0;
var form,player,game,welcome,bg1,bg2;
var level;


function preload(){
  bg1 = loadImage("images/background.png");
  bg2 = loadImage("images/welcome.jpg");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  form = new Form();
 
}
 


function draw(){
  if(gameState == 0 ){
    background(bg1);
    form.display(); 
  }
  else if (gameState == 1 ){
    background(bg2);
    form.hide();
    welcome = new Welcome();
    welcome.display();
  }
  else if(gameState == 2){
    level = new Gamelevel();
    level.show()
  }


}
