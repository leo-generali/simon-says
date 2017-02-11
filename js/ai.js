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
  demo: function(test){
    logic.aiDemoing = true;
    for (let i = 0; i < logic.turns; i++) {
      setTimeout(function(){
        console.log('The AI is demoing: ' + logic.aiDemoing);
        key.aiButtonPress(logic.aiKeyPressArray[i]);
        console.log(logic.aiKeyPressArray[i]);
        if(i === logic.turns - 1){
          test();
        };
      }, 1250 * i)
    }
  },

  post: function(){
      logic.aiDemoing = false;
      console.log('The AI is demoing: ' + logic.aiDemoing);
      setTimeout(function(){
        ai.buttonPress();
      }, 2000);
      logic.turns++;
  }



};