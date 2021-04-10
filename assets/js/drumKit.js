var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0 ; i <= numberOfButtons ; i++){

  document.querySelectorAll("button")[i].addEventListener("click" , function (){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
});

  }

    function makeSound(key){

      switch(key) {

        case "A":
        var boom = new Audio("../assets/sounds/boom.wav");
        boom.play();
        break;

        case "S":
        var clap = new Audio("../assets/sounds/clap.wav");
        clap.play();
        break;

        case "D":
        var hihat = new Audio("../assets/sounds/hihat.wav");
        hihat.play();
        break;

        case "F":
        var boom = new Audio("../assets/sounds/boom.wav");
        boom.play();
        break;

        case "G":
        var openhat = new Audio("../assets/sounds/openhat.wav");
        openhat.play();
        break;

        case "H":
        var ride = new Audio("../assets/sounds/ride.wav");
        ride.play();
        break;

        case "J":
        var snare = new Audio("../assets/sounds/snare.wav");
        snare.play();
        break;

        case "K":
        var tink = new Audio("../assets/sounds/tink.wav");
        tink.play();
        break;

        case "L":
        var tom = new Audio("../assets/sounds/tom.wav");
        tom.play();
        break;

        default : console.log(key);
    }
  }


// To remove animation on key clicked
function buttonAnimation(currentkey){

var activeButton = document.querySelector("." + currentkey);
activeButton.classList.add("pressed");

setTimeout(function () {
  activeButton.classList.remove("pressed");
}, 100);

}
