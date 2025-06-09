/*
let leverPoint = null;
let CenteringLever = null;
let CenteringLeverRect = null;
let leverpointRect = null;
let isLeverPulled = false;
let leverInitialX = 0;
let leverInitialY = 0;
let leverWidth = 0;
const offsetX = 10;
const offsetY = 20;
let mouseX = 0;
let mouseY = 0;

function OnDestroy() {
    window.removeEventListener("resize", InitializeLever);
    document.removeEventListener("mousemove", function (event) {
        if (isLeverPulled) {
            mouseX = event.clientX;
            mouseY = event.clientY;
            let coordinates = computeDistanceToBox(mouseX, mouseY);
            let initialCoordinates = computeDistanceToBox(leverInitialX, leverInitialY);
            let r = calculateDistance(initialCoordinates[0] - leverpointRect.width/2, initialCoordinates[1]-leverpointRect.height/2, 73, 73);
            let y = getYOnSemiCircle(coordinates[0], coordinates[1], 73, 73, r);
            if (y) {
                leverPoint.style.top = y + "px";
                leverPoint.style.left = coordinates[0] + leverWidth/2 + "px";
            } else if(y == null){
                forcemouseUp();
            }
        }
    });
    document.removeEventListener("mouseup", function (event) {
        if (isLeverPulled) {
            isLeverPulled = false;
            let coordinates = computeDistanceToBox(leverInitialX, leverInitialY);
            leverPoint.style.top = coordinates[1] - leverpointRect.height + "px";
            leverPoint.style.left = coordinates[0] - leverpointRect.width + "px";
            //console.log("Lever released");
        }
    });
    if(leverPoint) leverPoint.removeEventListener("mousedown", LeverClicked);
    leverPoint = null;
    CenteringLever = null;
    CenteringLeverRect = null;
    leverpointRect = null;
    isLeverPulled = false;
    leverInitialX = 0;
    leverInitialY = 0;
    mouseX = 0;
    mouseY = 0;
    leverWidth = 0;
}

function InitializeLever() {
    OnDestroy();
    window.addEventListener("resize", InitializeLever);
    document.addEventListener("mousemove", function (event) {
        if (isLeverPulled) {
            mouseX = event.clientX;
            mouseY = event.clientY;
            let coordinates = computeDistanceToBox(mouseX, mouseY);
            let r = calculateDistance(leverInitialX, leverInitialY, 70, 70);
            let y = getYOnSemiCircle(coordinates[0], coordinates[1], 70,70, r);
            if (y) {
                console.log("Angle of lever: " + y[1] + " degrees");
                leverPoint.style.top = y[0] + leverWidth/2 + "px";
                leverPoint.style.left = coordinates[0] - leverWidth/2 + "px";
            } else {
                console.log("Lever forced released");
                forcemouseUp();
            }
        }
    });
    document.addEventListener("mouseup", function (event) {
        if (isLeverPulled) {
            isLeverPulled = false;
            leverPoint.style.top = leverInitialY + "px";
            leverPoint.style.left = leverInitialX + "px";
            console.log("Lever released");
        }
    });

    leverPoint = document.getElementById("leverPoint");
    leverWidth = parseFloat(window.getComputedStyle(leverPoint).getPropertyValue("width"));

    leverPoint.addEventListener("mousedown", function (event) {
        event.preventDefault();
        LeverClicked();
    });

    leverpointRect = leverPoint.getBoundingClientRect();
    CenteringLever = document.getElementById("CenteringLever");
    CenteringLeverRect = CenteringLever.getBoundingClientRect();
    leverInitialX = parseFloat(window.getComputedStyle(leverPoint).getPropertyValue("left"));
    leverInitialY = parseFloat(window.getComputedStyle(leverPoint).getPropertyValue("top"));
    //console.log("Lever initial position: " + leverInitialX + ", " + leverInitialY);
    //console.log("Lever initialized");
}

function LeverClicked() {
    console.log("Lever clicked");
    isLeverPulled = true;
}

function forcemouseUp() {
    isLeverPulled = false;
    let coordinates = computeDistanceToBox(leverInitialX, leverInitialY);
    leverPoint.style.top = leverInitialY + "px";
    leverPoint.style.left = leverInitialY + "px";
}

function Leverfunction(x, y){
    let maxY = leverInitialY + offsetY * leverpointRect.height;
    let minY = leverInitialY - offsetY * leverpointRect.height;
    let maxX = leverInitialX + 50 + offsetX * leverpointRect.width;
    let minX = leverInitialX - offsetX * leverpointRect.width;

    if(x > minX && x < maxX && y > minY && y < maxY){
        return true;
    }
    return false;
}

function computeDistanceToBox(x, y){
    let boxleft = CenteringLeverRect.left;
    let boxTop = CenteringLeverRect.top;
    let coordinates = [];
    coordinates.push(x - boxleft);
    coordinates.push(y - boxTop);
    return coordinates;
}

function getYOnSemiCircle(x, y, xc, yc, r) {
    // Check if x is within the 45-135 degree range of the semi-circle
    const limit = r / Math.sqrt(2);
    if (x < xc - limit || x > xc + limit) {
        console.log("limit angle");
        return null;
    }

    // Check if the y is within +-offsetY of the start of the point
    // Assuming leverInitialY and offsetY are defined elsewhere in your code
    if (y < leverInitialY - offsetY - 20 || y > leverInitialY + offsetY) {
        console.log("limit y");
        return null;
    }

    const squareTerm = Math.pow(r, 2) - Math.pow(x - xc, 2);

    // Check if the squareTerm is negative, which means x is outside the circle
    if (squareTerm < 0) {
        console.log("limit circle");
        return null;
    }

    let values = [];
    values.push(yc - Math.sqrt(squareTerm));
    values.push(angleDegrees);
    return values;
}

function calculateDistance(x1, y1, x2, y2) {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}
*/