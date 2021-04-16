


var database;
var playerCount = 0;
var form,player;


function preload(){


}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  form = new Form();
  form.display();
}
 


function draw(){
 
}
