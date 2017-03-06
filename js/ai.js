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
      document.getElementById('score').innerHTML = logic.turns;
      logic.aiDemoing = false;
      setTimeout(function(){
          document.getElementById('status').innerHTML = 'AI Picking New Button';
        }, 750)
      setTimeout(function(){
        ai.buttonPress();
        logic.playerPlaying = true
        setTimeout(function(){
          document.getElementById('status').innerHTML = 'Player Turn';
        }, 750)
        //player.check();
      }, 1250);
  }
};