const turningCog1 = document.getElementById('cog1');
const turningCog2 = document.getElementById('cog2');
const turningCog3 = document.getElementById('cog3');
const pipe1 = document.getElementById('pipe1');
const lightbulb = document.getElementById('LightBulb');
const lightbulb2 = document.getElementById('IllumLightBulb');
const cable2 = document.getElementById('cable2');
const MainCog = document.getElementById('MainCog');
const rootStyle = document.documentElement.style;
let scrollTimeout = null;
let switch1 = document.getElementById('Switch');
let switchStyle = window.getComputedStyle(switch1);
let style = window.getComputedStyle(pipe1);
let switchP = document.getElementById('SwitchPlacing');
let switchPStyle = window.getComputedStyle(switchP);

let turningcog1value = 1.5;
let turningcog2value = 1.5;
let turningcog3value = 2.0;

let pageNumber = 0;


let alreadyLoaded1 = false;
let alreadyLoaded2 = false;
let alreadyLoaded3 = false;
let alreadyLoaded4 = false;

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function drawDebugPoint(x,y){
    let debugPoint = document.createElement('div');
    debugPoint.style.position = 'absolute';
    debugPoint.style.top = y + 'px';
    debugPoint.style.left = x + 'px';
    debugPoint.style.width = '5px'; // Size of the point
    debugPoint.style.height = '5px';
    debugPoint.style.backgroundColor = 'red'; // Color of the point
    debugPoint.style.borderRadius = '50%'; // Make it circular
    debugPoint.style.zIndex = '1000'; // Ensure it's on top

    // Append the debug point to the body
    document.body.appendChild(debugPoint);
}

window.addEventListener('scroll', function() {
    let valuecog1 = window.scrollY * turningcog1value; 
    turningCog1.style.transform = `translate(-20%, -36%) rotate(${valuecog1}deg)`;
    let valuecog2 = window.scrollY * turningcog2value + 9;
    turningCog2.style.transform = `translate(-23%, 50%) rotate(${-valuecog2}deg)`;
    let valuecog3 = window.scrollY * turningcog3value + 11;
    turningCog3.style.transform = `translate(14%, 28%) rotate(${valuecog3}deg)`;

    //For the pipe:
    //Translate towards left for valuecog3-11 between 0 and 180 modulo 360
    //Translate towards right for valuecog3-11 between 180 and 360 modulo 360
    //For angle, 0 at 0, -12 at 90, 0 at 180, 12 at 270, 0 at 360
    let valuepipe1 = valuecog3 - 11;
    let moduloValuepipe1 = valuepipe1 % 360;
    let offsetx = 32;
    let offsety = 161;
    let translateValuepipe1 = 0;
    let angleValuepipe1 = 0;
    let x = 0;
    let y = 0;
    let rad = degreesToRadians(valuepipe1);

    x = (17/2) * Math.cos(rad);
    y = (17/2) * Math.sin(rad);

    let compareXpoint = x + offsetx;

    //compute the angle between the two points (x, y) and (compareXpoint, offsety) horizontal line
    let angle = Math.atan2(-y, -x + compareXpoint) * 180 / Math.PI;

    pipe1.style.transform = `translate(${compareXpoint - 17/2}%, 129%) rotate(${angle}deg)`;
    position_switch();
    //Lightbulb
    lightbulb.style.display = 'none';
    lightbulb2.style.filter = 'drop-shadow(0px -6px 40px yellow)';

    if(scrollTimeout!= null){
        clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(function(){
        lightbulb.style.display = 'flex';
        lightbulb2.style.filter = 'none';
    }, 150);


}, false);

window.onload = function() {
    position_cable_2();
    position_switch();
    position_switch_placeholder();
    position_cable_2();
    ready_bolts_hidebar();
    loadContent('HTMLContents/home.html');
}

window.addEventListener('resize', function() {
    position_switch();
    position_switch_placeholder();
    position_cable_2();
    resizeDetails();
}, false);


/*window.addEventListener('mouseover', function(event) {
    console.log(event.target);
});*/

function position_cable_2(){
    const leftRect = switchP.getBoundingClientRect();
    const rightRect = lightbulb.getBoundingClientRect();

    const leftImageCenter = leftRect.left + (leftRect.width / 2);
    const rightImageCenter = rightRect.left + (rightRect.width / 2);

    cable2.style.left = leftImageCenter + 'px';
    cable2.style.width = (rightImageCenter - leftImageCenter) + 'px';
}

function position_switch(){
    
    const leftRect = pipe1.getBoundingClientRect();
    const leftImageCenter = leftRect.left + (leftRect.width / 2);
    const leftImageTop = leftRect.top + (leftRect.height / 2);

    switch1.style.left = leftImageCenter - 35 + 'px';
    switch1.style.top = leftImageTop - 15 + 'px';
}

function position_switch_placeholder(){
    const leftRect = switch1.getBoundingClientRect();
    const leftImageCenter = leftRect.left + (leftRect.width / 2);

    switchP.style.left = leftImageCenter - 95 + 'px';
}

function ready_bolts_hidebar() {
    let hideClicks = document.getElementsByClassName('HideClick');
    let boltSource = "media/bolt.png";
    for (let i = 0; i < hideClicks.length; i++) {
        hideClicks[i].style.position = 'relative'; 

        for (let j = 1; j <= 4; j++) {
            let bolt = document.createElement('img');
            bolt.src = boltSource;
            bolt.style.width = '15px';
            bolt.style.height = 'auto';
            bolt.style.position = 'absolute'; 
            bolt.style.pointerEvents = 'none';

            // Customize position for each bolt
            switch (j) {
                case 1: // Top left
                    bolt.style.left = '0%';
                    bolt.style.top = '-3%';
                    break;
                case 2:
                    bolt.style.left = '84%';
                    bolt.style.top = '-3%';
                    break;
                case 3:
                    bolt.style.left = '0%';
                    bolt.style.top = '55%';
                    break;
                case 4:
                    bolt.style.left = '84%';
                    bolt.style.top = '55%';
                    break;
            }
            hideClicks[i].appendChild(bolt);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let hideClicks = document.getElementsByClassName('HideClick');
    hideClicks[0].addEventListener('click', function() {
        if(pageNumber != 0){
            pageNumber = 0;
            loadContent('HTMLContents/home.html');
        }
    });
    hideClicks[1].addEventListener('click', function() {
        if(pageNumber != 1){
            pageNumber = 1;
            loadContent('HTMLContents/content1.html');
        }
    });
    hideClicks[2].addEventListener('click', function() {
        if(pageNumber != 2){
            pageNumber = 2;
            loadContent('HTMLContents/content2.html');
        }
    });
});

function loadContent(url){
    //console.log("Loading content");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById('ContentDiv').innerHTML = xhr.responseText;
            //console.log("Content loaded");
            loadDetails();
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}


//Resize details
function resizeDetails(){
    switch(pageNumber){
        case 0:
            resizeDetailsHome();
            break;
        case 1:
            resizeDetailsContent1();
            break;
        case 2:
            resizeDetailsContent2();
            break;
        case 3:
            resizeDetailsContent3();
            break;
    }
}

function resizeDetailsHome(){
    const picRect = document.getElementById('IDPic').getBoundingClientRect();
    const picCenter = picRect.left + (picRect.width / 2);
    const profileDiv1 = document.getElementById('profileDiv1');
    const profileDiv2 = document.getElementById('profileDiv2');

    profileDiv1.style.left = picCenter - 130 + 'px';
    profileDiv2.style.left = picCenter - 140 + 'px';
}

function resizeDetailsContent1(){
}

function resizeDetailsContent2(){
}

function resizeDetailsContent3(){
}

//Load details
function loadDetails(){
    switch(pageNumber){
        case 0:
            loadDetailsHome();
            break;
        case 1:
            loadDetailsContent1();
            break;
        case 2:
            loadDetailsContent2();
            break;
        case 3:
            loadDetailsContent3();
            break;
    }
}

function loadDetailsHome(){
    resizeDetailsHome();
    const CVButton = document.getElementById('CVButton');
    CVButton.addEventListener('click', function(){
        window.open('media/cv.pdf');
    });
    const LinkButton = document.getElementById('LinkButton');
    LinkButton.addEventListener('click', function(){
        window.open('https://www.linkedin.com/in/ma%C3%ABl-rios-011564262/');
    });
}

function loadDetailsContent1(){
    if(alreadyLoaded1 == false){
        alreadyLoaded1 = true;
    }
    //console.log("Attempting to load WebGL");
    initializeWebGL();
    //InitializeLever();
}   

function loadDetailsContent2(){
    if(alreadyLoaded2 == false){
        alreadyLoaded2 = true;
    }
    InitializeArtGallery();

}

function loadDetailsContent3(){
    if(alreadyLoaded3 == false){
        alreadyLoaded3 = true;
    }

}