logic = {
  playerPlaying: false,

  aiDemoing: false,

  turns: 0,

  count: 0,

  playerKeyPressArray: [],

  aiKeyPressArray: [],

  startNewRound: function(){
    this.playerKeyPressArray = [];
    this.count = 0;
    this.playerPlaying = false;
    document.getElementById('status').innerHTML = 'AI Demoing';
    setTimeout(function(){
      ai.demo();
    }, 1250)
  },

  startNewGame: function(){
    this.playerKeyPressArray = [];
    this.count = 0;
    this.playerPlaying = false;
    this.turns = 0;
    this.aiKeyPressArray = [];
    document.getElementById('score').innerHTML = logic.turns;
    ai.selectNewKey();
  }

}

