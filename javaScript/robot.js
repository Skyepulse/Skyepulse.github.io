//Global Variables:
let xMax = null;
let yMax = null;
let maxDist = null;
let angle1 = null;
let firstx = null;
let firsty = null;
let secondx = null;
let secondy = null;
let divbox = null;
let startx = null;
let starty = null;
let endx = null;
let endy = null;
let slope = null;
let diagDistance = null;
let IntersectionPoint1 = null;
let IntersectionPoint2 = null;
let diagDistance1 = null;
let diagDistance2 = null;
let purcentage1 = null;
let purcentage2 = null;
let backDisplacement = null;
let frontDisplacement = null;

//Text Colors:
const color1 = "#3c339a";
const color2 = "#eeeeee";

const randomColors = ['#29c4da', '#de004e', '#f887ff', '#1afe49', '#8386f5'];

const videoURL = '../media/';
const videos = [videoURL + 'videoRobot1', videoURL + 'videoRobot2'];

const texts = [

    'The simulator is a fully interactive tool to personnalize the arenas and therefore the reinforcement training. The user can choose the number and size of obstacles, line following patterns, positions and configurations in different arenas. The arenas are a 1-1 representation of Learning Robot\'s real learning tools.',
    'The AlphAI software communicates with the simulator through sockets like with the real robots. The simulator sends in video, ultrasound and infrared sensors data to the software. The software then sends the instructions at the exit of the neural network to the simulator\'s robot.'
];
//Gradient displacement:
const fullDisplacementTime = 10000; //milliSeconds
const displacementWidth = 5; //in % of the screen width
let currentTime = Date.now();
let currentColor = randomColors[0];

function setGradientBackground(){
    let elapsedTime = Date.now() - currentTime;
    if(elapsedTime > fullDisplacementTime){
        currentTime = Date.now();
        elapsedTime = 0;
        currentColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    }
    //We go from 0 to 84 in 3 seconds
    let currentFrontDisplacement = (elapsedTime / fullDisplacementTime) * 89;
    let currentBackDisplacement = currentFrontDisplacement - displacementWidth;
    if(currentBackDisplacement < 0){
        currentBackDisplacement = 0;
    }

    if(currentFrontDisplacement > 84){
        currentFrontDisplacement = 84;
        if(currentBackDisplacement > 84){
            currentBackDisplacement = 84;
        }
    }

    let body = document.body;
    currentBackDisplacement = currentBackDisplacement.toFixed(2);
    currentFrontDisplacement = currentFrontDisplacement.toFixed(2);
    backDisplacement = currentBackDisplacement;
    frontDisplacement = currentFrontDisplacement;
    //console.log(currentBackDisplacement + " " + currentFrontDisplacement);
    resetCoordinates();
    setGradientStyle();
    body.style.backgroundImage = "linear-gradient(135deg, rgba(238,238,238,1) 0%, rgba(238,238,238,1)" +currentBackDisplacement+ "%, " + currentColor + " " + currentBackDisplacement+ "%, " +  currentColor + " " + currentFrontDisplacement+ "%, rgba(238,238,238,1) " + currentFrontDisplacement+ "%, rgba(238,238,238,1) 84%, rgba(174,228,237,1) 84%, rgba(95,183,207,1) 88%, rgba(90,121,200,1) 88%, rgba(60,51,154,1) 93%)";
}


document.addEventListener('DOMContentLoaded', (event) => {
    resetCoordinates();
    setGradientStyle();
    setInterval(setGradientBackground, 10);
});


function findIntersection(a1, b1, a2, b2) {
    // Check if lines are parallel (slopes are equal)
    if (a1 === a2) {
      if (b1 === b2) {
        return 'Lines are identical';
      } else {
        return 'No intersection (lines are parallel)';
      }
    }
  
    // Calculate x coordinate of intersection
    const x = (b2 - b1) / (a1 - a2);
  
    // Calculate y coordinate using the equation of the first line
    const y = a1 * x + b1;
  
    return { x, y };
  }

function createRedCircleAtPoint(x, y) {
    // Create a new div element for the circle
    const circle = document.createElement('div');
  
    // Apply styling to make it look like a red circle
    circle.style.width = '10px'; // Circle size
    circle.style.height = '10px';
    circle.style.backgroundColor = 'red';
    circle.style.borderRadius = '50%'; // Circular shape
    circle.style.position = 'absolute';
    circle.style.left = `${x}px`; // X coordinate of the center
    circle.style.top = `${y}px`; // Y coordinate of the center
    circle.style.transform = 'translate(-50%, -50%)'; // Center the circle on the point
  
    // Append the circle to the body
    document.body.appendChild(circle);
  }

  function createRedRectangle(topLeft, bottomRight) {
    // Calculate width and height based on the points
    const width = bottomRight.x - topLeft.x;
    const height = bottomRight.y - topLeft.y;

    // Create a div element for the rectangle
    const rectangle = document.createElement('div');

    // Set CSS styles for the rectangle
    rectangle.style.position = 'absolute';
    rectangle.style.left = `${topLeft.x}px`;
    rectangle.style.top = `${topLeft.y}px`;
    rectangle.style.width = `${width}px`;
    rectangle.style.height = `${height}px`;
    rectangle.style.backgroundColor = 'red';

    // Add the rectangle to the body of the webpage
    document.body.appendChild(rectangle);
}

/*window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    let result1 = y - slope1x(x);
    let result2 = y - slope2x(x);
    if(result1 <= 0){
        console.log("all up");
    } else if(result2 <= 0 && result1 > 0){
        console.log("inside");
    } else if(result2 > 0){
        console.log("all down");
    }
  });*/

window.addEventListener('resize', (event) => {
    resetCoordinates();
    setGradientStyle();
});

function slope1x(x){
    return -1*(x - firstx) + firsty;
}

function slope1y(y){
    return -1*(y - firsty) + firstx;
}

function slope2x(x){
    return -1*(x - secondx) + secondy;
}

function slope2y(y){
    return -1*(y - secondy) + secondx;
}

function slopeDivx(x){
    return slope*(x - startx) + starty;
}

function slopeDivy(y){
    return ((y - starty) / slope) + startx;
}


function resetCoordinates(){
    xMax = window.innerWidth;
    yMax = window.innerHeight;
    maxDist = Math.sqrt(xMax * xMax + yMax * yMax);
    angle1 = Math.atan(yMax / xMax);
    firstx = xMax * backDisplacement / 100;
    firsty = yMax * backDisplacement / 100;
    secondx = xMax * frontDisplacement / 100;
    secondy = yMax * frontDisplacement / 100;

    divbox = document.getElementById("mainText").getBoundingClientRect();
    startx = divbox.left;
    starty = divbox.top;
    endx = divbox.right;
    endy = divbox.bottom;
    slope = (endy - starty) / (endx - startx);
    diagDistance = Math.sqrt((endx - startx)*(endx - startx) + (endy - starty)*(endy - starty));

    IntersectionPoint1 = findIntersection(slope, starty - slope*startx, -1, firsty + firstx);
    IntersectionPoint2 = findIntersection(slope, starty - slope*startx, -1, secondy + secondx);

    diagDistance1 = Math.sqrt((IntersectionPoint1.x - startx)*(IntersectionPoint1.x - startx) + (IntersectionPoint1.y - starty)*(IntersectionPoint1.y - starty));
    diagDistance2 = Math.sqrt((IntersectionPoint2.x - startx)*(IntersectionPoint2.x - startx) + (IntersectionPoint2.y - starty)*(IntersectionPoint2.y - starty));

    purcentage1 = diagDistance1 / diagDistance;
    purcentage2 = diagDistance2 / diagDistance;
}

function setGradientStyle(){
    let div = document.getElementById("mainText");
    mainText.style.backgroundImage = "linear-gradient(" + 135 + "deg, " + color1 + " 0%, "+ color1 + " " + (purcentage1 * 100) + "%, " + color2 + " " + (purcentage1 * 100) + "%, "+ color2 + " " + (purcentage2 * 100) + "%, "+ color1 + " " + (purcentage2 * 100) + "%, "+ color1 + " 100%)";
}


function ChangeVideo(videoNumber){
    console.log(videoNumber);
    let videoTextDiv = document.getElementById("smallText");
    videoTextDiv.innerHTML = texts[videoNumber - 1];
    let video = document.getElementById("video1");
    video.src = videos[videoNumber - 1];
}