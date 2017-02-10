ai = {

  //computer picks one of the four keys are randon
  selectKey: function(){
    return Math.floor((Math.random() * (40 - 37 + 1)) + 37);
  },

  buttonPress: function(num){
    if(num){
      key.aiButtonPress(num);
      return;
    }
    const rand = ai.selectKey();
    key.aiButtonPress(rand);
  }

};