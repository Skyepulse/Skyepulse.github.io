const pi = Math.PI;
const barRotation = 1 / 3.35;
let rotationInProgress = false;
let totalRotation = 0;
let rotateTimes = 0;
let rotateNum = 0;
let GoLeft = false;

const mediaUrl = '../media/';
const htmlUrl = '../HTMLContents/Projects/';
const projectImages = [mediaUrl + 'projects1.png', mediaUrl + 'projects2.png', mediaUrl + 'OpenGLHeader.png', mediaUrl + 'steamRoom.png', mediaUrl + 'ecolife.png', mediaUrl + 'slider1.png', mediaUrl + 'kmk.png', mediaUrl + 'projects1.png']
const projectDescriptions = ['3D Robot Simulator', 'Alice the WonderGame', 'OpenGL Projects', 'Rooms.XYZ', 'Ecolife', 'Slider\'s Adventure', 'Kiss Marry Kill', 'GlassOverflow']
const projectDescriptionSizes = ['500%', '450%', '500%', '500%', '500%', '500%', '500%', '500%']
const URLS = [htmlUrl + '3DSimulator.html', 'https://matelou.itch.io/alice-the-wonder-game', htmlUrl + 'OpenGL.html', 'https://rooms.xyz/elmrysmordred/steamroom', htmlUrl + 'ecolife.html', htmlUrl + 'slider.html', 'https://matelou.itch.io/kiss-marry-kill', htmlUrl + 'Glassoverflow.html'];
// Interactive Div
let interactiveDiv = null;
let ProjectTitle = null;
let SelectionButtons = [];

let scene, camera, renderer, textureLoader, loader; // Declare these variables globally

let animateRequestId = null;

let is3DRender = true;

function set3DRender(value) {
    is3DRender = value;
}

function onWindowResize() {
    // Update camera aspect ratio and projection matrix
    camera.aspect = window.innerWidth / (800*0.6);
    camera.updateProjectionMatrix();

    // Update renderer size
    renderer.setSize(window.innerWidth, 800*0.6);
}

function OnDestroyContent1() {
    //console.log('OnDestroyContent1');
    if (renderer) {
        renderer.dispose();
    }

    if(scene){
        // Remove all children from the scene
        while(scene.children.length > 0){ 
            let child = scene.children[0];
            scene.remove(child);
        }
    }

    if (animateRequestId) {
        cancelAnimationFrame(animateRequestId);
        animateRequestId = null;
    }

    // Reset state variables
    rotationInProgress = false;
    totalRotation = 0;
    rotateTimes = 0;
    rotateNum = 0;

    // Remove event listeners if any
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('keydown', function (event) {
        if (event.keyCode === 37) {
            rotate();
        }
    }, false);
    if(SelectionButtons.length > 0){
        SelectionButtons.forEach(button => button.removeEventListener('click', WhichSelectionButtonClicked));
    }
    if(interactiveDiv) interactiveDiv.removeEventListener('click', () => {
        loadNewPage(URLS[rotateTimes]);
    });

    // Reset SelectionButtons array and interactiveDiv
    SelectionButtons = [];
    interactiveDiv = null;
    ProjectTitle = null;
    camera = null;
    scene = null;
    textureLoader = null;
    loader = null;
}

function rotate(rotateN = 1, goleft = false) {
    rotateNum = rotateN;
    if(rotateNum > 0){
        rotationInProgress = true;
        GoLeft = goleft;
        //console.log('rotatingLeft: ' + GoLeft);
        if(goleft){
            rotateTimes = (rotateTimes - 1);
            if(rotateTimes < 0) rotateTimes = SelectionButtons.length - 1;
        } else {
            rotateTimes = (rotateTimes + 1)%SelectionButtons.length;
        }
        
        
        if(interactiveDiv){
            interactiveDiv.style.display = 'none';
            interactiveDiv.style.backgroundImage = 'url(' + projectImages[rotateTimes] + ')';
            console.log('projectImages[rotateTimes]: ' + projectImages[rotateTimes]);
            ProjectTitle.innerHTML = projectDescriptions[rotateTimes];
            ProjectTitle.style.fontSize = projectDescriptionSizes[rotateTimes];
        } 
        rotateNum--;
    }
}

function finished() {
    //console.log('finished ' + rotateNum);
    if(interactiveDiv) interactiveDiv.style.display = 'block';
    
    if(rotateNum > 0){
        //console.log('rotatingLeftAgain: ' + GoLeft);
        rotate(rotateNum, GoLeft);
    } else {
        SelectionButtons.forEach((button) => {
            button.style.backgroundColor = '#6d2316';
        });
        SelectionButtons[rotateTimes].style.backgroundColor = '#ceae7d';
    }
}

function initiateButtons(){
    const WhichSelectionButton1 = document.getElementById('WhichSelectionButton1');
    const WhichSelectionButton2 = document.getElementById('WhichSelectionButton2');
    const WhichSelectionButton3 = document.getElementById('WhichSelectionButton3');
    const WhichSelectionButton4 = document.getElementById('WhichSelectionButton4');
    const WhichSelectionButton5 = document.getElementById('WhichSelectionButton5');
    const WhichSelectionButton6 = document.getElementById('WhichSelectionButton6');
    const WhichSelectionButton7 = document.getElementById('WhichSelectionButton7');
    const WhichSelectionButton8 = document.getElementById('WhichSelectionButton8');
    
    SelectionButtons.push(WhichSelectionButton1);
    SelectionButtons.push(WhichSelectionButton2);
    SelectionButtons.push(WhichSelectionButton3);
    SelectionButtons.push(WhichSelectionButton4);
    SelectionButtons.push(WhichSelectionButton5);
    SelectionButtons.push(WhichSelectionButton6);
    SelectionButtons.push(WhichSelectionButton7);
    SelectionButtons.push(WhichSelectionButton8);
    SelectionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            WhichSelectionButtonClicked(button)
        });
    });
    SelectionButtons[0].style.backgroundColor = '#ceae7d';
    //console.log('buttons initiated');
}

function distance(x, y) {
    // Number of rooms in the circle
    const totalRooms = SelectionButtons.length;

    // Return 0, false if x is the same as y
    if (x === y) {
        return [0, false];
    }

    // Calculate the distance and direction
    let distanceRight = (y - x + totalRooms) % totalRooms;
    let distanceLeft = (x - y + totalRooms) % totalRooms;

    // Determine the shortest path and direction
    // If the distance to the right is shorter or the same, go right (false)
    // Otherwise, go left (true)
    if (distanceRight <= distanceLeft) {
        //console.log('distanceRight: ' + distanceRight);
        return [distanceRight, false];
    } else {
       // console.log('distanceLeft: ' + distanceLeft);
        return [distanceLeft, true];
    }
}

function WhichSelectionButtonClicked(button){
    let index = SelectionButtons.indexOf(button);
    if(!rotationInProgress){
        //console.log('clicked distance' + distance(rotateTimes, index));
        let vars = distance(rotateTimes, index);
        rotate(vars[0], vars[1]);
    }
}

function loadContentAnimation(url){
    //console.log("Loading content");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById('Content1Div').innerHTML = xhr.responseText;
            //console.log("Content loaded");
            if(url === 'HTMLContents/barAnimation.html') initializeWebGL();
            else if(url === 'HTMLContents/noBarAnimation.html'){
                const projectSquares = document.querySelectorAll('.projectSquare');
                projectSquares.forEach((square) => {
                    const image = square.getElementsByTagName('img')[0];
                    const span = square.getElementsByTagName('span')[0];
                    square.addEventListener('touchstart', () => {
                        span.style.opacity = '1';
                        image.style.opacity = '0.4';
                    });
                    square.addEventListener('touchend', () => {
                        span.style.opacity = '0';
                        image.style.opacity = '1';
                    });
                    square.addEventListener('click', () => {
                        console.log("TEST");
                    });
                });
            }
            else OnDestroyContent1();
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function initializeWebGL(){
    onDestroyContent();
    OnDestroyContent1();
    initiateButtons();

    window.addEventListener('keydown', function (event) {

        //call the rotate function when the leftArrow is pressed
        if (event.keyCode === 37) {
            rotate();
        }
    }
    , false);

    interactiveDiv = document.getElementById('InteractiveSelection');
    ProjectTitle = document.getElementById('projectTitle');

    interactiveDiv.addEventListener('click', () => {
        loadNewPage(URLS[rotateTimes]);
    });
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#28282B');

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / (800*0.6), 0.1, 1000);
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById('OpenGLCanvas'), antialias: true});

    renderer.setPixelRatio(window.devicePixelRatio);

    const customWidth = window.innerWidth;  // Replace with your desired width
    const customHeight = 800*0.6; // Replace with your desired height
    renderer.setSize(customWidth, customHeight);

    // Update the camera aspect ratio
    camera.aspect = customWidth / customHeight;
    camera.updateProjectionMatrix();


    // Add the event listener for window resize
    window.addEventListener('resize', onWindowResize, false);


    //TEXTURE LOADING
    textureLoader = new THREE.TextureLoader();
    const middleCogTexture = textureLoader.load('media/middleCogTexture.png', () => {
        middleCogTexture.flipY = false;
        middleCogTexture.wrapS = middleCogTexture.wrapT = THREE.ClampToEdgeWrapping;
     });
    const spikesTexture = textureLoader.load('media/spikesTexture.png', () => { 
        spikesTexture.flipY = false;
        spikesTexture.wrapS = spikesTexture.wrapT = THREE.ClampToEdgeWrapping;
     });
    const middleBarTexture = textureLoader.load('media/middleBarTexture.png', () => {
        middleBarTexture.flipY = false;
        middleBarTexture.wrapS = middleBarTexture.wrapT = THREE.ClampToEdgeWrapping;
     });
    /*
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1); // position the light
    scene.add(directionalLight);
    */ 
    const pointLight = new THREE.PointLight(0xffffff, 1, 500, 2);
    pointLight.position.set(0, 40, 70);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0); // position the light
    scene.add(directionalLight);

    //const geometry = new THREE.BoxGeometry();
    //const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);
    const planeMaterial = new THREE.MeshPhongMaterial({ color: '#28282B', side: THREE.DoubleSide });
    const planeSize = 200; // Diameter of the plane (radius is 30)
    const testMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, side: THREE.DoubleSide }); //green material
    const testMaterial2 = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide }); // red material
    const testMaterial3 = new THREE.MeshPhongMaterial({ color: 0x0000ff, side: THREE.DoubleSide }); // blue material
    const testMaterial4 = new THREE.MeshPhongMaterial({ color: 0xffff00, side: THREE.DoubleSide }); // yellow material
    const halfSize = planeSize / 2;

    // Bottom plane
    const bottomPlaneGeometry = new THREE.PlaneGeometry(planeSize, planeSize);
    const bottomPlane = new THREE.Mesh(bottomPlaneGeometry, planeMaterial);
    bottomPlane.rotation.x = Math.PI / 2;
    bottomPlane.position.y = 0;
    scene.add(bottomPlane);

    // Back plane
    const backPlaneGeometry = new THREE.PlaneGeometry(planeSize, planeSize);
    const backPlane = new THREE.Mesh(backPlaneGeometry, planeMaterial);
    backPlane.position.z = -halfSize/1.8;
    backPlane.position.y = halfSize;
    scene.add(backPlane);

    //left plane
    const leftPlaneGeometry = new THREE.PlaneGeometry(planeSize, planeSize);
    const leftPlane = new THREE.Mesh(leftPlaneGeometry, planeMaterial);
    leftPlane.rotation.y = Math.PI / 2;
    leftPlane.position.x = -halfSize/1.8;
    leftPlane.position.y = halfSize;
    scene.add(leftPlane);

    //right plane
    const rightPlaneGeometry = new THREE.PlaneGeometry(planeSize, planeSize);
    const rightPlane = new THREE.Mesh(rightPlaneGeometry, planeMaterial); 
    rightPlane.rotation.y = Math.PI / 2;
    rightPlane.position.x = halfSize/1.8;
    rightPlane.position.y = halfSize;
    scene.add(rightPlane);

    loader = new THREE.GLTFLoader();

    /*
    let model;
    loader.load('models/bar3.glb', function (gltf) {
        model = gltf.scene;
        model.rotation.y = pi*barRotation;
        //scene.add(model);
    }, undefined, function (error) {
        console.error(error);
    });
    */

    let middleCog;
    loader.load('models/middleCog.glb', function (gltf) {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = middleCogTexture;
                child.material.needsUpdate = true;
            }
        });
        middleCog = gltf.scene;
        middleCog.position.y = 15;
        scene.add(middleCog);
    }, undefined, function (error) {
        console.error(error);
    });

    let spikes;
    loader.load('models/spikes.glb', function (gltf) {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = spikesTexture;
                child.material.needsUpdate = true;
            }
        });
        spikes = gltf.scene;
        spikes.position.y = 15;
        scene.add(spikes);
    }, undefined, function (error) {
        console.error(error);
    });

    let middlecog2;
    loader.load('models/middleCog.glb', function (gltf) {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = middleCogTexture;
                child.material.needsUpdate = true;
            }
        });
        middlecog2 = gltf.scene;
        middlecog2.position.y = 15.5;
        middlecog2.position.x = -18.5;
        middlecog2.scale.set(0.5, 0.5, 0.5);
        scene.add(middlecog2);
    }, undefined, function (error) {
        console.error(error);
    });

    let spikes2;
    loader.load('models/spikes.glb', function (gltf) {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = spikesTexture;
                child.material.needsUpdate = true;
            }
        });
        spikes2 = gltf.scene;
        spikes2.position.y = 15;
        spikes2.position.x = -18.5;
        spikes2.scale.set(0.5, 0.5, 0.5);
        scene.add(spikes2);
    }, undefined, function (error) {
        console.error(error);
    });

    let middlecog3;
    loader.load('models/middleCog.glb', function (gltf) {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = middleCogTexture;
                child.material.needsUpdate = true;
            }
        });
        middlecog3 = gltf.scene;
        middlecog3.position.y = 15;
        middlecog3.position.x = 18.5;
        middlecog3.scale.set(0.5, 0.5, 0.5);
        scene.add(middlecog3);
    }, undefined, function (error) {
        console.error(error);
    });

    let spikes3;
    loader.load('models/spikes.glb', function (gltf) {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = spikesTexture;
                child.material.needsUpdate = true;
            }
        });
        spikes3 = gltf.scene;
        spikes3.position.y = 15.5;
        spikes3.position.x = 18.5;
        spikes3.scale.set(0.5, 0.5, 0.5);
        scene.add(spikes3);
    }, undefined, function (error) {
        console.error(error);
    });

    let middleBar;
    loader.load('models/middleBar.glb', function (gltf) {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map = middleBarTexture;
                child.material.needsUpdate = true;
            }
        });
        middleBar = gltf.scene;
        middleBar.rotation.y = pi*barRotation;
        middleBar.position.y = -0.05;
        scene.add(middleBar);
    }, undefined, function (error) {
        console.error(error);
    });

    camera.position.z = 20;
    camera.position.y = 30;
    camera.position.x = 0;

    const animate = function () {
        animateRequestId = requestAnimationFrame(animate);
        if (rotationInProgress && areModelsLoaded()) {
            let rotationAmount = 0.03; // Adjust this for faster or slower rotation
            let rotationAmount2 = 0.05;
            if(totalRotation + rotationAmount > pi) {
                rotationAmount = pi - totalRotation;
                if(GoLeft) turnLeft(rotationAmount, rotationAmount2);
                else turnRight(rotationAmount, rotationAmount2);
                totalRotation += rotationAmount;
                rotationInProgress = false;
                totalRotation = 0;
                finished();
            } else {
                if(GoLeft) turnLeft(rotationAmount, rotationAmount2);
                else turnRight(rotationAmount, rotationAmount2);
                totalRotation += rotationAmount;
            }
        }
        

        renderer.render(scene, camera);
    };

    animate();

    function turnLeft(rotationAmount, rotationAmount2){
        middleBar.rotation.y += rotationAmount;
        middleCog.rotation.y += rotationAmount;
        spikes.rotation.y += rotationAmount;
        middlecog2.rotation.y -= rotationAmount2;
        spikes2.rotation.y -= rotationAmount2;
        middlecog3.rotation.y -= rotationAmount2;
        spikes3.rotation.y -= rotationAmount2;
    }

    function turnRight(rotationAmount, rotationAmount2){
        middleBar.rotation.y -= rotationAmount;
        middleCog.rotation.y -= rotationAmount;
        spikes.rotation.y -= rotationAmount;
        middlecog2.rotation.y += rotationAmount2;
        spikes2.rotation.y += rotationAmount2;
        middlecog3.rotation.y += rotationAmount2;
        spikes3.rotation.y += rotationAmount2;
    }

    function areModelsLoaded() {
        return middleCog && spikes && middleBar;
    }
}   

function loadNewPage(url){
    try{
        window.location.href = url;
    } catch(error){
        console.log('An error occured when handling the page', error);
    }
}