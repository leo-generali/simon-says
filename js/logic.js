logic = {
  playerPlaying: false,

  aiDemoing: false,

  turns: 0,

  playerKeyPressArray: [],

  aiKeyPressArray: [],

  gameLoop: function(){
    //Start the game
    this.aiDemoing = true;
    console.log(this.aiDemoing);
    ai.demo();
    //Human presses keys to match ai demo
    //If the key does not match, player loses. went for x amount of turns
    //If they match, computer goes again and selects random numbers
  }

}

