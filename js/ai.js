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
    for (let i = 0; i < logic.aiKeyPressArray.length; i++) {
      setTimeout(function(){
        key.aiButtonPress(logic.aiKeyPressArray[i]);}, 1250 * i);
        console.log(logic.aiKeyPressArray);
    }
    logic.aiDemoing = false;
    setTimeout(ai.buttonPress, 3000);
    
  }

};