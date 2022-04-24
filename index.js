var noOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].
    addEventListener("click",function(){

        var ch=this.innerHTML;

        makeSound(ch);
        addAnimation(ch);
    })
}

document.addEventListener("keydown",function(event){

    var ch=event.key;

    makeSound(ch);
    addAnimation(ch);
})


function makeSound(Key){

    switch (Key) {
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

        case 's':
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
            break;  

        case 'a':
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
            break;

        case 'd':
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
            break;

        case 'j':
            var audio=new Audio("sounds/crash.mp3")
            audio.play();
            break;

        case 'k':
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;

        case 'l':
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
            break;  

        default:
            break;
    }

}

function addAnimation(key){
    var drumButton=document.querySelector("."+key);
    drumButton.classList.add("pressed");
    setTimeout(function(){
        drumButton.classList.remove("pressed");
    },100)

}