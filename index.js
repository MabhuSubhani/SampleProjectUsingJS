 var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// For Loop Created for all the drums to execute th body


//Button Press

for (var i = 0; i < numberOfDrumButtons; i++) {

  // function created to make it as an input to the addEventListener() JS

  /*we can create a function without a name and directly add as an input to the

  addEventListener() function, the function is called as anonymous function*/

  document.querySelectorAll(".drum")[i].addEventListener("click",  function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

   });



  /* addEventListener() is a higher order function as it takes another function

  as an input like handleClick, first input is type of the work to be performed

  and the second function is what work to be performed. */

}

//Detecting KeyBoard Press

document.addEventListener("keypress",function(event){
  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key){
switch (key) {
  case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
    break;
  case "a":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "s":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case "d":
  var  tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  case "j":
  var crash= new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "k":
  var kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;

  case "l":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;

  default:console.log(buttonInnerHTML);

}
}

// Adding Animation

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
     activeButton.classList.remove("pressed");

   },100);



}
