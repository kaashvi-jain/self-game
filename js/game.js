class Game {
    constructor(){

    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    } 
    play(){
      Player.getPlayerInfo();
      if(allPlayers != undefined){
        for ( var p in allPlayers){
          if(allPlayers[p].level == 1){
            welcome.hide();
            level = new Gamelevel();
            level.show();
           
          }
        }
      }
     
    }  
}
