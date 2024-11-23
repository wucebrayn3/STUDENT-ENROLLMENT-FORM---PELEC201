let formThings = document.querySelectorAll(".actualInput");

formThings.forEach(a=>{
    const checkInputValue = ()=>{
        if (a.value.length < 1) {
            a.style.border = "1.5px red solid";
            a.style.outlineColor = "red";
        } else {
            a.style.border = "1.5px green solid";
            a.style.outlineColor = "green";
        }
    };

    a.addEventListener("focusin", checkInputValue);
    a.addEventListener("focusout", checkInputValue);
    a.addEventListener("input", checkInputValue);
});

let course = document.getElementById("course");

course.addEventListener("focusin", ()=>{
    if(!course.value){
        course.style.border = "1.5px red solid";
        course.style.outlineColor = "red";
    }
    else{
        course.style.border = "1.5px green solid";
        course.style.outlineColor = "green";
    }
})
course.addEventListener("focusout", ()=>{
    if(!course.value){
        course.style.border = "1.5px red solid";
        course.style.outlineColor = "red";
    }
    else{
        course.style.border = "1.5px green solid";
        course.style.outlineColor = "green";
    }
})
course.addEventListener("input", ()=>{
    if(!course.value){
        course.style.border = "1.5px red solid";
        course.style.outlineColor = "red";
    }
    else{
        course.style.border = "1.5px green solid";
        course.style.outlineColor = "green";
    }
})

let mainCard = document.getElementById("card2");
let upperCard = document.getElementById("card1");
let lowerCard = document.getElementById("card3");
let devCont = document.getElementById("devCont");

mainCard.addEventListener("mouseenter", ()=>{
    upperCard.style.left = "20%"
    lowerCard.style.right = "20%"
    upperCard.style.transitionDelay = ""
    lowerCard.style.transitionDelay = ""
})
devCont.addEventListener("mouseleave", ()=>{
    upperCard.style.transitionDelay = "0.2s"
    lowerCard.style.transitionDelay = "0.1s"
    upperCard.style.left = "50%"
    lowerCard.style.right = "50%"
})

let cardsss = document.querySelectorAll(".card");
cardsss.forEach(a=>{
    a.addEventListener("mouseenter", ()=>{
        a.querySelector("h1").style.opacity = "1"
        a.querySelector("h1").style.color = "white"
        a.querySelector("img").style.filter = "blur(2px)"
        a.querySelector("img").style.scale = "1.5"
    });
    a.addEventListener("mouseleave", ()=>{
        a.querySelector("h1").style.opacity = "0"
        a.querySelector("h1").style.color = "black"
        a.querySelector("img").style.filter = ""
        a.querySelector("img").style.scale = ""
    })
})