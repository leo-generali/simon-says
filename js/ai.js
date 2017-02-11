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
    const rand = ai.selectKey();
    key.aiButtonPress(rand);
  },

  //go through each keypress in ai array
  demo: function(){
    logic.aiDemoing = true;
    for (let i = 0; i < logic.turns; i++) {
      setTimeout(function(){
        key.aiButtonPress(logic.aiKeyPressArray[i]);
        if(i === logic.turns - 1){
          ai.post();
        };
      }, 1250 * i)
    }
  },

  post: function(){
      logic.turns++;
      logic.aiDemoing = false;
      console.log('The AI is demoing: ' + logic.aiDemoing);
      setTimeout(function(){
        ai.buttonPress();
        logic.playerPlaying = true
        player.check();
      }, 1250);
  }
};