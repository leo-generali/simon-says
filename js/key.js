key = {
  init: function(){
    window.addEventListener('keydown', this.pressButton);
    window.addEventListener('click', this.clickButton);
    this.apply();
  },

  buttons: document.querySelectorAll('.button'),

  //Removes the pressed effect from each arrow
  removeTransition: function(e){
    e.target.classList.remove('pressed');
    if(logic.count === logic.turns){
      key.startNewRound()
    }
  },

  startNewRound: function(){
    logic.playerKeyPressArray = [];
    logic.count = 0;
    logic.playerPlaying = false;
    document.getElementById('status').innerHTML = 'AI Demoing';
    setTimeout(function(){
      ai.demo();
    }, 1250)
  },

  //Give the button a pressed down effect on keyboard press
  pressButton: function(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    btn.classList.add('pressed');
    key.populateArray(e.keyCode);
  },

  //Give the button a pressed down effect on mouse click
  clickButton: function(e){
    if(e.target.tagName !== "HTML"){
      e.target.classList.add('pressed');
      key.populateArray(Number(e.target.dataset.key));
    }
  },

  //keep track of player and ai button presses
  populateArray: function(key){
    if(logic.playerPlaying === true && logic.aiDemoing === false){
      player.check(key);
      logic.playerKeyPressArray.push(key);
    }else if(logic.playerPlaying === false && logic.aiDemoing === false){
      logic.aiKeyPressArray.push(key);
    }
    return;
  },

  aiButtonPress: function(aiNum){
    this.buttons[40 - aiNum].classList.add('pressed');
    this.populateArray(aiNum);
  },

  apply: function(){
    this.buttons.forEach(button => button.addEventListener('transitionend', key.removeTransition));
  }
};

