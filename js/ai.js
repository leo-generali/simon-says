ai = {

  //computer picks one of the four keys are randon
  selectKey: function(){
    return Math.floor((Math.random() * (40 - 37 + 1)) + 37);
  },

  //press down on button for ai computer
  buttonPress: function(num){
    if(num){
      key.aiButtonPress(num);
      return;
    }
    const rand = this.selectKey();
    key.aiButtonPress(rand);
  },

  //go through each keypress in ai array
  demo: function(){
    logic.aiDemoing = true;
    for (let i = 0; i < logic.turns; i++) {
      setTimeout(function(){
        key.aiButtonPress(logic.aiKeyPressArray[i]);
        if(i === logic.turns - 1){
          ai.selectNewKey();
        };
      }, 1250 * i)
    }
  },

  selectNewKey: function(){
      logic.turns++;
      logic.aiDemoing = false;
      document.getElementById('status').innerHTML = 'AI Selecting a new key';
      setTimeout(function(){
        ai.buttonPress();
        logic.playerPlaying = true
        player.check();
      }, 1250);
  }
};