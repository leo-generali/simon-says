player = {
  check: function(num){
    if(num === logic.aiKeyPressArray[logic.count] && logic.count < logic.turns){
      logic.count++
    }else if(num !== logic.aiKeyPressArray[logic.count]){
      console.log('you lose');
      logic.startNewGame();
    }
  },
};