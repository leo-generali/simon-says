
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
  },

  //Give the button a pressed down effect
  pressButton: function(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    btn.classList.add('pressed');
    if(logic.playerPlaying){
      logic.keyPressArray.push(e.keyCode);
    }
  },

  clickButton: function(e){
    if(e.target.tagName !== "HTML"){
      e.target.classList.add('pressed');
      if(logic.playerPlaying){
        logic.keyPressArray.push(Number(e.target.dataset.key));
      }
    }
  },

  apply: function(){
    this.buttons.forEach(button => button.addEventListener('transitionend', key.removeTransition));
  }
};