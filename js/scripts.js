// Animation Construrctor
function EventStuff() {
    /* Animate Functions */
    var delayed_element;
    // this.delayed_element = true;
    var play_button = document.querySelector('.play-button');
    this.play_button = play_button;
    var self = this;
    this.play_button.addEventListener('click', function() {
      self.bounceOutUp();
    });
}
  EventStuff.prototype = {
    delayHide: function() {
      delayed_element = setTimeout(this.hiddenStartElement, 1000);
      delayed_element = setTimeout(this.bounceInUp, 1000);
    },
    hiddenStartElement: function() {
      document.getElementById("intro").removeAttribute("show");
      document.getElementById("intro").setAttribute("class", "hide");
    },
    bounceOutUp: function() {
      document.getElementById("intro-button").className = "btn btn-danger-outline play-button center-block animated bounceOutUp"
      this.delayHide();
    },
    bounceInUp: function() {
      document.getElementById("tic-tac-toe").className = "container show animated bounceInUp"
    }
  }
  var lets_play = new EventStuff();
//Gameboard Block Constructor
function Blocks(player) {
    /* Setup shop */
    var all_block_inputs = document.querySelectorAll('.blocks input[type="radio"]');
    var first_block_inputs = document.querySelectorAll('#block-1 input');
    var player1 = document.getElementsByClassName('player1');
    var player2 = document.getElementsByClassName('player2');
    var player1_alt = document.getElementsByClassName('player1alt');
    var reset = document.getElementById("reset");
    this.block_inputs = all_block_inputs;
    this.first_block_inputs = first_block_inputs;
    this.player1 = player1;
    this.player2 = player2;
    this.player1_alt = player1_alt;
    this.reset = reset;
    var self = this;
    this.reset.addEventListener('click', function() {
        self.resetThis();
    });
}
Blocks.prototype = {
  resetThis: function() {
      window.location.reload();
  },
  players: function() {
        for(var i=0; i < this.player2.length;i++) {
          this.player2[i].setAttribute("class", "hide player1alt");
      }
  }
}
var game_time = new Blocks();
game_time.players(game_time.player2);
