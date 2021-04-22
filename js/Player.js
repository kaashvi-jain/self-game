class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.age = 0;
      this.q2 = null;
      this.q3 = null;
      this.q4 = null;
      this.q5 = null;
      this.level = 0;
      this.score = 0;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
    }
   
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        age:this.age,
        q2:this.q2,
        q3:this.q3,
        q4:this.q4,
        q5:this.q5,
        level:this.level,
        score:this.score
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    static reset(){
      database.ref('/').update({players:null});
      
    }
    getcarsatend(){
      database.ref('carsatend').on("value",(data)=>{this.rank=data.val()})
    }
    static updatecarsatend(rank){
      database.ref('/').update({carsatend:rank})
    }
  }