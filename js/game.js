game = {
  init: function(){
    key.init();
    ai.selectNewKey();
  },

  newInit: function(){
    var startButton = document.getElementById('start-btn');
    startButton.style.display = 'none';
    key.init();
    ai.selectNewKey();
  },

  gameStart: function(){
    var startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', this.newInit);
  }
}

game.gameStart();