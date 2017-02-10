logic = {
  playerPlaying: false,

  aiDemoing: false,

  turns: 0,

  playerKeyPressArray: [],

  aiKeyPressArray: [],

  gameLoop: function(){
    //Start the game
    //Computer either demos it's series of numbers or picks the first number
    if(this.turns === 0){
      ai.buttonPress();
    }
    this.aiDemoing = true;
    this.aiDemo();
    //Human presses keys to match ai demo
    //If the key does not match, player loses. went for x amount of turns
    //If they match, computer goes again and selects random numbers
    this.aiDemoing = false;
  }

}

