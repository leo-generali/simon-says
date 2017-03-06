player = {
  check: function(num){
    if(num === logic.aiKeyPressArray[logic.count] && logic.count < logic.turns){
      logic.count++
    }else if(num !== logic.aiKeyPressArray[logic.count]){
      document.getElementById('status').innerHTML = 'Oh no! Wrong button! Refresh to start a new game.';
    }
  },
};