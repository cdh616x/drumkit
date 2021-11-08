for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
    var kick = new Audio("sounds/clean-kick.mp3");
    kick.play();
      break;

    case "s":
    var snare = new Audio("sounds/mute-snare.mp3");
    snare.play();
      break;

    case "t":
    var closedHat = new Audio("sounds/crash.mp3");
    closedHat.play();
      break;

    case "r":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;

    case "d":
    var snare2 = new Audio("sounds/treble-snare.mp3");
    snare2.play();
      break;

    case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;
t
    case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
      break;

    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
