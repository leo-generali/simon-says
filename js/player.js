player = {
  check: function(num){
    if(num === logic.aiKeyPressArray[logic.count] && logic.count < logic.turns){
      logic.count++;
      // if(logic.count === logic.turns){
      //   player.resetTurn();
      //   ai.demo();
      // }
    }
  },

  resetTurn: function(){
    logic.playerKeyPressArray = [];
    logic.count = 0;
    logic.playerPlaying = false;
  }
};