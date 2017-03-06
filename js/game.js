game = {
  init: function(){
    key.init();
    ai.selectNewKey();
  },

  newInit: function(){
    var startButton = document.getElementById('start-btn');
    
    key.init();
    ai.selectNewKey();
  }

  gameStart: function(){
    var startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', this.init);
  }
}

game.gameStart();