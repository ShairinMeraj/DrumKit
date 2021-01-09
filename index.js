  var l=document.querySelectorAll(".drum").length;
for(var i=0; i<(l) ;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    var buttonInnerHTML=this.innerHTML;
  var b= check(buttonInnerHTML);
  b.play();
  anni(buttonInnerHTML);
    });
  }
document.addEventListener("keydown",function(event)
{var d= check(event.key);
  d.play();
  anni(event.key);

});
function anni(currentkey)
{document.querySelector("."+currentkey).classList.add("pressed");
setTimeout(function(){
  document.querySelector("."+currentkey).classList.remove("pressed");
},100);}

  function check(buttonInnerHTML){
    switch (buttonInnerHTML) {
      case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
     return tom1;
        break;
        case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        return tom2;
       break;
       case "s":
       var tom3=new Audio("sounds/tom-3.mp3");
    return  tom3;
      break;
     case "d":
     var tom4=new Audio("sounds/tom-4.mp3");
  return  tom4;
    break;
    case "j":
    var tom5=new Audio("sounds/tom-5.mp3");
return   tom5;
   break;
   case "k":
   var tom6=new Audio("sounds/tom-6.mp3");
  return tom6;
  break;
  case "l":
  var tom7=new Audio("sounds/tom-7.mp3");
 return tom7;
 break;
      default: console.log(buttonInnerHTML);}}
