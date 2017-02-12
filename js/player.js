player = {
  check: function(num){
    document.getElementById('status').innerHTML = 'Player checking';
    if(num === logic.aiKeyPressArray[logic.count] && logic.count < logic.turns){
      logic.count++
      return;
    }
  },
};