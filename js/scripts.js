/* Animate Functions */
var delayed_element;

/* Set a delay after every click */
function delayHide() {
    delayed_element = setTimeout(hiddenStartElement, 1000);
    delayed_element = setTimeout(bounceInUp, 1000);
};
/* Hide/Show Classes for display */
function hiddenStartElement() {
    document.getElementById("intro").removeAttribute("show");
    document.getElementById("intro").setAttribute("class", "hide");
};
/* AnimateCSS bounce animation to class */
function bounceOutUp(){
    document.getElementById("intro-button").className = "btn btn-danger-outline play-button center-block animated bounceOutUp"
    delayHide();
};
/* AnimateCSS bounce animation to class */
function bounceInUp() {
    document.getElementById("tic-tac-toe").className = "container show animated bounceInUp"
};
/* Play Button */
var play_button = document.querySelector('.play-button');
play_button.addEventListener('click', bounceOutUp);

/* Setup shop */
var all_block_inputs = document.querySelectorAll('.blocks input[type="radio"]');
var first_block_inputs = document.querySelectorAll('#block-1 input');
var player1 = document.getElementsByClassName('player1');
var player2 = document.getElementsByClassName('player2');
var player1_alt = document.getElementsByClassName('player1alt');
var reset = document.getElementById("reset");

for(var i=0; i < player2.length;i++) {
  player2[i].setAttribute("class", "hide player1alt");   
}


function resetThis() {
    window.location.reload();
}


/* X's and O's */
// if(first_block_inputs) {
//     first_block_inputs[1].remove();
//     first_block_inputs[0].setAttribute("class", "player1alt");
// }

