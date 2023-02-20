var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i =0;i<numberOfDrums;i++)

{

    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    butonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    butonAnimation(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case"k":
        var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case"l":
        var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default: console.log(innerHTML)



    }

}

function butonAnimation(currntKey)
{
    var  activateButton=document.querySelector("."+currntKey);
    activateButton.classList.add("pressed");
   
        activateButton.classList.add("pressed");
        setTimeout(function() 
        {
            activateButton.classList.remove("pressed");
        },100);
        
} 