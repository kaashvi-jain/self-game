class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
   // this.bg = loadImage("images/background.png")
    this.title = createElement('h1');
    this.q1 = createInput("");
    this.q2 = createInput("");
    this.q3 = createInput("");
    this.q4 = createInput("");
    this.q5 = createInput("");
    this.teq1 = createElement("h4");
    this.teq2 = createElement("h4");
    this.teq3 = createElement("h4");
    this.teq4 = createElement("h4");
    this.teq5 = createElement("h4");
    this.teq6 = createElement("h4");
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.q1.hide();
    this.q2.hide();
    this.q3.hide();
    this.q4.hide();
    this.q5.hide();
    this.teq1.hide();
    this.teq2.hide();
    this.teq3.hide();
    this.teq4.hide();
    this.teq5.hide();
    this.teq6.hide();
  }

  display(){
   // background(this.bg);
    this.title.html("game name");
    this.title.position(displayWidth/2 - 50, 0);
   this.teq1.html("name");
   this.teq1.position(displayWidth/2-40,100);
    this.input.position(displayWidth/2 - 40 ,150);
    this.teq2.html("age");
    this.teq2.position(displayWidth/2-40,200);
    this.q1.position(displayWidth/2 - 40,250);
    this.teq3.html("do you face any mental health promblems");
    this.teq3.position(displayWidth/2-40,300);
    this.q2.position(displayWidth/2 - 40,350);
    this.teq4.html("how do you describe mental health");
    this.teq4.position(displayWidth/2-40,400);
    this.q3.position(displayWidth/2 - 40,450);
    this.teq5.html("overall how you rate your mental health");
    this.teq5.position(displayWidth/2-40,500);
    this.q4.position(displayWidth/2 - 40,550);
    this.teq6.html("how many times in a week do you feel low");
   this.teq6.position(displayWidth/2-40,600);
    this.q5.position(displayWidth/2 - 40,650);


    this.button.position(displayWidth/2 + 30, 710);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.q1.hide();
      this.q2.hide();
      this.q3.hide();
      this.q4.hide();
      this.q5.hide();
      game = new  Game();
      game.getState();
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
      
      game.update(1);

    });
   
      
  
  }

}
