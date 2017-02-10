
key = {

  init: function(){
    window.addEventListener('keydown', this.pressButton);
    this.apply();
  },

  buttons: document.querySelectorAll('.button'),

  //Removes the pressed effect from each arrow
  removeTransition: function(e){
    console.log(e);
    e.target.classList.remove('pressed');
  },

  //Give the button a pressed down effect
  pressButton: function(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    btn.classList.add('pressed');
  },

  apply: function(){
    this.buttons.forEach(button => button.addEventListener('transitionend', key.removeTransition));
  }
}

key.init();