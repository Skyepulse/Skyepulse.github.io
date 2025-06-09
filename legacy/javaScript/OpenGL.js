let horizontalContainers = null;
let h1 = null;

document.addEventListener("DOMContentLoaded", function(event) {
    horizontalContainers = document.getElementsByClassName("HorizontalContainer");
    h1 = document.getElementById("h1_first");
    
    for (let i = 0; i < horizontalContainers.length; i++) {
        horizontalContainers[i].addEventListener("mouseover", function() {blurr(i);});
        horizontalContainers[i].addEventListener("mouseout", function(){unblurr(i);});
    }


});


function blurr(i){
    horizontalContainers[i].style.zIndex = "1";
    for (let j = 0; j < horizontalContainers.length; j++) {
        if (j != i) {
            horizontalContainers[j].style.filter = "blur(5px)";
            horizontalContainers[j].style.zIndex = "0";
        }
    }
    h1.style.filter = "blur(5px)";
}

function unblurr(i){
    for (let j = 0; j < horizontalContainers.length; j++) {
        if (j != i) {
            horizontalContainers[j].style.filter = "blur(0px)";
        }
    }
    h1.style.filter = "blur(0px)";
}