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

    case "f":
    var snare3 = new Audio("sounds/snare-on.mp3");
    snare3.play();
      break;

    case "e":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;

    case "t":
    var closedHat = new Audio("sounds/closed-hat.mp3");
    closedHat.play();
      break;

    case "y":
    var openHat = new Audio("sounds/closed-hat2.mp3");
    openHat.play();
      break;

    case "r":
    var openHat = new Audio("sounds/open-hat.mp3");
    openHat.play();
      break;

    case "d":
    var snare2 = new Audio("sounds/treble-snare.mp3");
    snare2.play();
      break;

    case "c":
    var tom2 = new Audio("sounds/conga-hit.mp3");
    tom2.play();
      break;

    case "x":
    var tom3 = new Audio("sounds/bongo-hit.mp3");
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
