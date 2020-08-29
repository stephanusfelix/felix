let bg=document.getElementById("HomePic");
let hi=document.getElementById("HomeHi");
let textEdu=document.getElementById("AboutEducation");
let textExp=document.getElementById("AboutExperience");

function MoveHi(value){
  hi.style.transform = "translateX("+value/3.63+"px)"
}

document.addEventListener("DOMContentLoaded", function() {
  let start = Date.now();
      let Timer = setInterval(() => {
      let timePassed = Date.now() - start; 
      if (timePassed >= 1000) {
        clearInterval(Timer); // finish the animation after 2 seconds
        return;
      }
      MoveHi(timePassed); 

    }, 20);
});

document.addEventListener('scroll',function(){
    var value = window.scrollY;
    console.log(value)
    bg.style.transform = "translateY("+value*(-0.3)+"px)"
    if(window.scrollY<-190){

    }else{
      textEdu.style.transform = "translateY("+value*(0.2)+"px) rotate(90deg)"
      textExp.style.transform = " translateX("+value+"px)"
    }
})

