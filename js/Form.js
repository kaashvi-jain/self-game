class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
   
    this.title = createElement('h2');
    this.q1 = createInput("");
    this.q2 = createInput("");
    this.q3 = createInput("");
    this.q4 = createInput("");
    this.q5 = createInput("");
  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("game name");
    this.title.position(displayWidth/2 - 50, 0);
    text ("name : = ",displayWidth/2-100,displayHeight/2 - 80);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    fill ("black");
    text ("age : = ",displayWidth/2-100,displayHeight/2 - 30);
    this.q1.position(displayWidth/2 - 40,displayHeight/2 - 30);
    text ("what is mental health of you : = ",displayWidth/2-100,displayHeight/2 + 20);
    this.q2.position(displayWidth/2 - 40,displayHeight/2+ 20);
    text ("do you face any mental health issues : = ",displayWidth/2-100,displayHeight/2 + 70);
    this.q3.position(displayWidth/2 - 40,displayHeight/2 + 70);
    text ("how do you describe yourself : = ",displayWidth/2-100,displayHeight/2 + 120);
    this.q4.position(displayWidth/2 - 40,displayHeight/2 + 120);
    text ("do you have some to talk to  : = ",displayWidth/2-100,displayHeight/2 + 170);
    this.q5.position(displayWidth/2 - 40,displayHeight/2 + 170);


    this.button.position(displayWidth/2 + 30, displayHeight/2 + 220);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player = new Player();
      player.getCount();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.age = this.q1.value();
      player.q2 = this.q2.value();
      player.q3 = this.q3.value();
      player.q4 = this.q4.value();
      player.q5 = this.q5.value();

      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      Player.reset();
      Player.updatecarsatend(0);
    })
    
  }
}
