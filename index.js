 // for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//   document.querySelectorAll("button")[i].addEventListener("click",clicked);
// }
// function clicked(){
//   alert("I got clicked");
// }
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//   document.querySelectorAll("button")[i].addEventListener("click",clicked);
// }
// function clicked(){
//   var a=new Audio('sounds/tom-1.mp3');
//   a.play();
// }
  function sound(ch) {
      switch (ch) {
        case "w":
          var a = new Audio('sounds/tom-1.mp3');
          a.play();
          break;
        case "a":
          var a = new Audio('sounds/tom-2.mp3');
          a.play();
          break;
        case "s":
          var a = new Audio('sounds/tom-3.mp3');
          a.play();
          break;
        case "d":
          var a = new Audio('sounds/tom-4.mp3');
          a.play();
          break;
        case "j":
          var a = new Audio('sounds/crash.mp3');
          a.play();
          break;
        case "k":
          var a = new Audio('sounds/kick-bass.mp3');
          a.play();
          break;
        case "l":
          var a = new Audio('sounds/snare.mp3');
          a.play();
          break;
      }
    }
    for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
      document.querySelectorAll("button")[i].addEventListener("click", function(){
        sound(this.innerHTML);
        buttonAnimation(this.innerHTML);
      });
      }
    document.addEventListener("keydown",function(){
      sound(event.key);
      buttonAnimation(event.key);
    });

    function buttonAnimation(it){
      var item=document.querySelector("."+it);
      item.classList.add("pressed");

      setTimeout(function(){
        item.classList.remove("pressed");
      },100);
    }
