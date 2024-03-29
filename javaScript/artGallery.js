const modelUrl = "../models/"; 
const toRenderObjects = [];
//360 rotation per 250 units
const RotationPerUnit = degreesToRadians(360) / 250;
const pointLightRadius = 1/21;

const arrowMin = 13;
const arrowMax = 20;
const arrowTime = 1.0; //seconds
const waitTime = 0.4; //seconds

const dicLight = {0: "moon", 1: "Sun"};
const copperEnd = "_copper.svg";
const normalEnd = ".svg";
let arrowFlag = false;
let StartTime = null;
let arrowInterval = null;


let scene2Width = null;
let scene2Height = null;

let scene2, camera2, renderer2, textureloader2, loader2, OpenGLCanvas, MainCenteringDiv;    
let animateRequestId2 = null;
let renderedArtObject = null;

let mouseInitialPosition, mouseFinalPosition = null;
let isClickedFlag = false;

let nextButtons = null;
let n = 0;
let currentRenderedObject = 0;

let lightButtons = null;
let currentLight = null;
const lightButtonChangeTime = 0.8; //seconds
let lightButtonTimer = null;
let animationInterval = null;
let middlePoint = null;
let radiusLight = null;

let directionalLight2, directionLight, pointLight, sphere = null;
let isSphereClickedFlag = false;

//textures
let textures = {'middleCog': null, 'spikes': null};

function onDestroyContent(){
    //Clean up objects
    if(animateRequestId2 != null){
        cancelAnimationFrame(animateRequestId2);
    }

    if(toRenderObjects != [] )
        for(let i = 0; i < toRenderObjects.length; i++){
            toRenderObjects[i].cleanArtObject();
        }

    //Clean up listeners
    window.removeEventListener('resize', resizeWindow);
    if(OpenGLCanvas != null){
        OpenGLCanvas.removeEventListener('mousedown', onclickMethod);
        OpenGLCanvas.removeEventListener('mousemove', onMouseMove);
        OpenGLCanvas.removeEventListener('mouseup', onMouseUp);
    }

    if(nextButtons != null){
        for(let i = 0; i < nextButtons.length; i++){
            nextButtons[i].removeEventListener('mouseenter', onNextHoverEnter);
            nextButtons[i].removeEventListener('mouseleave', onNextHoverExit);
            nextButtons[i].removeEventListener('click', onNextClick);
        }
    }

    if(lightButtons){
        for(let i = 0; i < lightButtons.length; i++){
            lightButtons[i].removeEventListener('click', onLightClick);
        }
    }

    scene2 = null;
    camera2 = null;
    renderer2 = null;
    textureloader2 = null;
    loader2 = null;
    animateRequestId2 = null;
    renderedArtObject = null;
    scene2Width = null;
    scene2Height = null;
    OpenGLCanvas = null;
    MainCenteringDiv = null;

    mouseInitialPosition = null;
    mouseFinalPosition = null;
    isClickedFlag = false;
    nextButtons = null;
    n = 0;
    currentRenderedObject = 0;
    lightButtons = null;
    currentLight = null;
    lightButtonTimer = null;
    animationInterval = null;
    middlePoint = null;
    radiusLight = null;
    directionalLight2 = null;
    directionLight = null;
    pointLight = null;
    sphere = null;
    isSphereClickedFlag = false;
}

function InitializeArtGallery(){
    
    OnDestroyContent1();
    onDestroyContent();
    readyLightButtons();

    OpenGLCanvas = document.getElementById('OpenGLCanvasArt');
    MainCenteringDiv = document.getElementById('mainOpenGLDiv');
    scene2Width = MainCenteringDiv.clientWidth;
    scene2Height = MainCenteringDiv.clientHeight;

    //window listeners
    window.addEventListener('resize', resizeWindow);
    OpenGLCanvas.addEventListener('mousedown', onclickMethod);
    OpenGLCanvas.addEventListener('mousemove', onMouseMove);
    OpenGLCanvas.addEventListener('mouseup', onMouseUp);
    nextButtons = document.getElementsByClassName('nextButton');
    for(let i = 0; i < nextButtons.length; i++){
        nextButtons[i].addEventListener('mouseenter', onNextHoverEnter);
        nextButtons[i].addEventListener('mouseleave', onNextHoverExit);
        nextButtons[i].addEventListener('click', onNextClick);
    }

    //Prepare objects to render
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "middleCog.glb", mediaUrl + "middleCogTexture.png", [0, 0, 0], [-15, 0, 0], [1, 1, 1]), new Objectart(modelUrl + "spikes.glb", mediaUrl + "spikesTexture.png", [0, 0, 0], [-15, 0, 0], [1, 1, 1])], [0, 0, 30], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "donut.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 0.2], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "donut2.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 0.2], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "can_1.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 5], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "can_2.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 5], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "can_3.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 5], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "eye.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 1], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "hat_emoji.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 3], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "spikeBall.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 1], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "fruit.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 1], [0, 0, 0], [1, 1, 1]));
    toRenderObjects.push(new ArtObject([new Objectart(modelUrl + "tea.glb", null, [0, 0, 0], [0, 0, 0], [1, 1, 1])], [0, 0, 30], [0, 0, 0], [1, 1, 1]));
    n = toRenderObjects.length;
    
    //Initialize scene2
    scene2 = new THREE.Scene();
    scene2.background = new THREE.Color('#28282B');

    //Initialize camera2
    camera2 = new THREE.PerspectiveCamera(75, scene2Width / scene2Height, 0.1, 1000);
    camera2.aspect = scene2Width / scene2Height;
    

    //Initialize renderer2
    renderer2 = new THREE.WebGLRenderer({canvas: OpenGLCanvas, antialias: true});
    renderer2.setPixelRatio(window.devicePixelRatio);
    renderer2.setSize(scene2Width, scene2Height);
    camera2.updateProjectionMatrix();

    //Initialize texture loader2
    textureloader2 = new THREE.TextureLoader();

    //Initialize loader2
    loader2 = new THREE.GLTFLoader();

    //Initialize lights and constant objects
    directionLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionLight.position.set(0, 0, 1);
    directionLight.rotation.x = -Math.PI / 4;
    scene2.add(directionLight);

    directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight2.position.set(0, 1, 0);
    scene2.add(directionalLight2);
    
    //Initialize objects
    renderedArtObject = 0;
    initializeObjects();

    //Initialize animations
    const animate = function(){
        animateRequestId2 = requestAnimationFrame(animate);
        ////////////////////////////////////////////////
        //Animations here
        ////////////////////////////////////////////////
        renderer2.render(scene2, camera2);
    };
    animate();
}

function initializeObjects(){
    let toRenderObject = toRenderObjects[renderedArtObject];
    toRenderObject.initializeArtObject();
}

//CLASSES
class ArtObject{
    constructor(objects, cameraPosition, cameraRotation, cameraScale){
        this.objects = objects;
        this.cameraPosition = cameraPosition;
        this.cameraRotation = cameraRotation;
        this.cameraScale = cameraScale;
        this.isFullyLoaded = false;
    }

    cleanArtObject(){
        for(let i = 0; i < this.objects.length; i++){
            this.objects[i].cleanObject();
        }
        this.isFullyLoaded = false;
    }

    initializeArtObject(){
        
        let texturePromises = this.objects.map(object => object.initializeTexture());
        Promise.all(texturePromises).then(() => {
            console.log("Textures loaded successfully");
            let promises = this.objects.map(object => object.initializeObject());

            Promise.all(promises).then(() => {
                camera2.position.x = this.cameraPosition[0];
                camera2.position.y = this.cameraPosition[1];
                camera2.position.z = this.cameraPosition[2];

                camera2.rotation.x = this.cameraRotation[0];
                camera2.rotation.y = this.cameraRotation[1];
                camera2.rotation.z = this.cameraRotation[2];

                camera2.scale.set(this.cameraScale[0], this.cameraScale[1], this.cameraScale[2]);
                renderer2.render(scene2, camera2);

                this.isFullyLoaded = true;
                console.log("Art object loaded successfully");
            }).catch((error) => {
                console.error("Failed to load art object", error);
            });
        }).catch((error) => {
            console.error("Failed to load texture", error);
        });
    }

    resetArtObject(){
        for(let i = 0; i < this.objects.length; i++){
            this.objects[i].resetObject();
        }
    }

    rotateArtObject(x, y, z){
        for(let i = 0; i < this.objects.length; i++){
            this.objects[i].rotateObject(x, y, z);
        }
    }

    moveArtObject(x, y, z){
        for(let i = 0; i < this.objects.length; i++){
            this.objects[i].moveObject(x, y, z);
        }
    }

    scaleArtObject(x, y, z){
        for(let i = 0; i < this.objects.length; i++){
            this.objects[i].scaleObject(x, y, z);
        }
    }
}

class Objectart{
    constructor(name, texture, positions, rotations, scales){
        this.objectPath = name;
        this.texturepath = texture;
        this.positions = positions;
        this.rotations = rotations;
        this.scales = scales;
        
        this.texture = null;
        this.object = null;
    }

    initializeTexture(){
        return new Promise((resolve, reject) => {
            if(this.texturepath == null){
                resolve(null);
                return;
            }
            let texture = textureloader2.load(this.texturepath, () => {
                texture.flipY = false;	
                texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
            });
            this.texture = texture;
            resolve(texture);
        }, undefined, (error) => {
            console.error("Failed to load texture", error);
            reject(error);
        });
    }

    initializeObject(){
        return new Promise((resolve, reject) => {
            let object;
            loader2.load(this.objectPath, (gltf) => {
                gltf.scene.traverse((child) => {
                    if(child.isMesh){
                        if(this.texture){
                            child.material.map = this.texture;
                            console.log("Texture applied");
                            child.material.needsUpdate = true;
                        }
                    }
                });
                object = gltf.scene;
                object.position.x = this.positions[0];
                object.position.y = this.positions[1];
                object.position.z = this.positions[2];

                object.rotation.x = this.rotations[0];
                object.rotation.y = this.rotations[1];
                object.rotation.z = this.rotations[2];

                object.scale.set(this.scales[0], this.scales[1], this.scales[2]);
                this.object = object;
                scene2.add(object);
                resolve(gltf);
            }, undefined, (error) => {
                console.error("Failed to load object model", error);
                reject(error);
            });
        });
    
    }

    resetObject(){
        this.object.position.x = this.positions[0];
        this.object.position.y = this.positions[1];
        this.object.position.z = this.positions[2];

        this.object.rotation.x = this.rotations[0];
        this.object.rotation.y = this.rotations[1];
        this.object.rotation.z = this.rotations[2];

        this.object.scale.set(this.scales[0], this.scales[1], this.scales[2]);
    }

    rotateObject(x, y, z){
        this.object.rotation.x = x;
        this.object.rotation.y = y;
        this.object.rotation.z = z;
    }

    moveObject(x, y, z){
        this.object.position.x = x;
        this.object.position.y = y;
        this.object.position.z = z;
    }

    scaleObject(x, y, z){
        this.object.scale.x = x;
        this.object.scale.y = y;
        this.object.scale.z = z;
    }
    
    cleanObject(){
        if(this.object){
            scene2.remove(this.object);
            this.object.traverse((child) => {
                if(child.isMesh){
                    if(child.geometry)
                        child.geometry.dispose();
                }

                if(child.material){
                    if(Array.isArray(child.Material)){
                        for (const material of child.material) {
                            if (material.map) material.map.dispose();
                            material.dispose();
                        }
                    } else {
                        if (child.material.map) child.material.map.dispose();
                        child.material.dispose();   
                    }
                }
            });
            this.object = null;
            //console.log("Cleaned object successfully");
        }
        if (this.texture) {
            this.texture.dispose();
            this.texture = null;
        }
    }
}

//EVENTS
resizeWindow = function(){
    scene2Width = MainCenteringDiv.clientWidth;
    scene2Height = MainCenteringDiv.clientHeight;
    camera2.aspect = scene2Width / scene2Height;
    camera2.updateProjectionMatrix();
    renderer2.setSize(scene2Width, scene2Height);
}

onclickMethod = function(event){
    if(sphere){
        let canvasBounds = MainCenteringDiv.getBoundingClientRect();
        let mouseX = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
        let mouseY = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
    
        let raycaster = new THREE.Raycaster();
        raycaster.setFromCamera({x: mouseX, y: mouseY}, camera2);
    
        let touches = raycaster.intersectObject(sphere);

        if(touches.length>0){
            console.log("Sphere clicked");
            isSphereClickedFlag = true;
            return;
        }
    }
    let boundingRect = MainCenteringDiv.getBoundingClientRect();
    let topleftcorner = [boundingRect.left, boundingRect.top];
    let mouseposition = [event.clientX - topleftcorner[0], event.clientY - topleftcorner[1]];
    mouseInitialPosition = mouseposition;
    isClickedFlag = true;
    //console.log("Mouse down");
}

onMouseMove = function(event){
    if(isClickedFlag){
        let boundingRect = MainCenteringDiv.getBoundingClientRect();
        let topleftcorner = [boundingRect.left, boundingRect.top];
        let mouseposition = [event.clientX - topleftcorner[0], event.clientY - topleftcorner[1]];
        let mouseDelta = [mouseposition[0] - mouseInitialPosition[0], mouseposition[1] - mouseInitialPosition[1]];
        //console.log("Deltax: " + mouseDelta[0] + "// Deltay: " + mouseDelta[1]);
        let toRenderObject = toRenderObjects[renderedArtObject];
        toRenderObject.rotateArtObject(toRenderObject.objects[0].object.rotation.x + RotationPerUnit * mouseDelta[1], toRenderObject.objects[0].object.rotation.y + RotationPerUnit *mouseDelta[0], 0);
        mouseInitialPosition = mouseposition;
    } else if(isSphereClickedFlag){
        let canvasBounds = MainCenteringDiv.getBoundingClientRect();
        let mouseX = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
        let mouseY = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
    
        let raycaster = new THREE.Raycaster();
        raycaster.setFromCamera({x: mouseX, y: mouseY}, camera2);
    
        let planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        let targetPosition = new THREE.Vector3();
        raycaster.ray.intersectPlane(planeZ, targetPosition);
        sphere.position.set(targetPosition.x, targetPosition.y, 0.0);
        pointLight.position.set(targetPosition.x, targetPosition.y, 0.0);
        console.log("Sphere moved");
    }
}

onMouseUp = function(event){
    if(isClickedFlag){
        isClickedFlag = false;
        mouseInitialPosition = null;
    }
    if(isSphereClickedFlag){
        isSphereClickedFlag = false;
    }
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }


onNextHoverEnter = function(event){
    event.target.style.cursor = "pointer";
    arrowFlag = true;
    StartTime = Date.now();
    arrowInterval = setInterval(animateArrow, 10);
}

onNextHoverExit = function(event){
    clearInterval(arrowInterval);
    document.documentElement.style.setProperty('--Arrow1', arrowMax + "%");
    event.target.style.cursor = "default";
    arrowFlag = false;
    StartTime = null;
}

onNextClick = function(event){
    //We clean the current object
    let toRenderObject = toRenderObjects[renderedArtObject];
    if(toRenderObject.isFullyLoaded){
        toRenderObject.cleanArtObject();
        if(event.target.id == "nb1" || event.target.id == "nb3"){
            renderedArtObject = (renderedArtObject + 1) % n;
            let toRenderObject = toRenderObjects[renderedArtObject];
            toRenderObject.initializeArtObject();
        } else{
            renderedArtObject = (renderedArtObject - 1) % n;
            if(renderedArtObject < 0)
                renderedArtObject = n - 1;
            let toRenderObject = toRenderObjects[renderedArtObject];
            toRenderObject.initializeArtObject();
        }
        //We reset the light
        if(currentLight == 0){
            console.log("We reset the light");
            addPointLight();
        }
    } else {
        console.log("Art object not loaded yet");
    }
}

animateArrow = function(){
    if(arrowFlag){
        let currentTime = Date.now();
        let delta = (currentTime - StartTime) / 1000.0;
        let step = parseFloat(delta) / parseFloat(arrowTime);
        if(delta > arrowTime && delta <= arrowTime + waitTime){
            return;
        } else if(delta > arrowTime + waitTime){
            document.documentElement.style.setProperty('--Arrow1', arrowMin + "%");
            StartTime = currentTime;
            return;
        } else {
            let arrowMovement = arrowMax - (arrowMax - arrowMin) * step;
            document.documentElement.style.setProperty('--Arrow1', arrowMovement + "%");
        }
    }
}

function readyLightButtons(){
    lightButtons = document.getElementsByClassName('lightButton');
    for(let i = 0; i < lightButtons.length; i++){
        lightButtons[i].addEventListener('click', onLightClick);
    }
    currentLight = 1;
}

onLightClick = function(event){
    //We get the id of the button
    let target = event.target;
    //what is the index of the target in lightButtons
    let index = -1;
    for(let i = 0; i < lightButtons.length; i++){
        if(lightButtons[i] == target){
            index = i;
            break;
        }
    }

    if(index == -1)
        return;

    if(index == currentLight)
        return;

    //We change the light
    currentLight = index;
    lightButtonTimer = Date.now();
    animationInterval = setInterval(animateLightButton, 10);

    let index1 = currentLight;
    let index2 = (currentLight + 1) % 2;

    lightButtons[index2].style.backgroundColor = "white";
    lightButtons[index1].style.backgroundColor = "#6d2316";
    lightButtons[index2].style.borderColor = "#6d2316";
    lightButtons[index1].style.borderColor = "white";

    lightButtons[index1].getElementsByTagName('img')[0].src = mediaUrl + dicLight[index1] + normalEnd;
    lightButtons[index2].getElementsByTagName('img')[0].src = mediaUrl + dicLight[index2] + copperEnd;

    //Lights in scene
    if(currentLight == 0){
        scene2.remove(directionalLight2);
        scene2.remove(directionLight);
        addPointLight();
    }

    if(currentLight == 1){
        scene2.add(directionalLight2);
        scene2.add(directionLight);
        scene2.remove(pointLight);
        scene2.remove(sphere);
        sphere = null;
        pointLight = null;
    }

    renderer2.render(scene2, camera2);
}

animateLightButton = function(){
    let rect1 = lightButtons[0].getBoundingClientRect();
    let rect2 = lightButtons[1].getBoundingClientRect();
    let dimensionLightFloat = rect1.width;

    let middle1 = [rect1.left + rect1.width / 2, rect1.top + rect1.height / 2];
    let middle2 = [rect2.left + rect2.width / 2, rect2.top + rect2.height / 2];
    middlePoint = [(middle1[0] + middle2[0]) / 2, (middle1[1] + middle2[1]) / 2];
    radiusLight = Math.sqrt(Math.pow(middle1[0] - middlePoint[0], 2) + Math.pow(middle1[1] - middlePoint[1], 2));

    let index2 = currentLight;
    let index1 = (currentLight + 1) % 2;
    let currentTime = Date.now();
    let delta = (currentTime - lightButtonTimer) / 1000.0;
    let radianPosition = (delta / lightButtonChangeTime) *  Math.PI;

    if(radianPosition > Math.PI){
        radianPosition = Math.PI;
        //We compute the position of the two lights
        let y1 = middlePoint[1] + radiusLight * Math.sin(Math.PI - radianPosition);
        let x1 = middlePoint[0] + radiusLight * Math.cos(Math.PI - radianPosition);
        let y2 = middlePoint[1] + radiusLight * Math.sin(-radianPosition);
        let x2 = middlePoint[0] + radiusLight * Math.cos(-radianPosition);
        //We set the position of the lights
        lightButtons[index1].style.left = x1 - dimensionLightFloat / 2 + "px";
        lightButtons[index1].style.top = y1 - dimensionLightFloat / 2 + "px";
        lightButtons[index2].style.left = x2 - dimensionLightFloat / 2 + "px";
        lightButtons[index2].style.top = y2 - dimensionLightFloat / 2 + "px";
        clearInterval(animationInterval);
        return;
    } else {
        let y1 = middlePoint[1] + radiusLight * Math.sin(Math.PI - radianPosition);
        let x1 = middlePoint[0] + radiusLight * Math.cos(Math.PI - radianPosition);
        let y2 = middlePoint[1] + radiusLight * Math.sin(-radianPosition);
        let x2 = middlePoint[0] + radiusLight * Math.cos(-radianPosition);
        //We set the position of the lights
        lightButtons[index1].style.left = x1 - dimensionLightFloat / 2 + "px";
        lightButtons[index1].style.top = y1 - dimensionLightFloat / 2 + "px";
        lightButtons[index2].style.left = x2 - dimensionLightFloat / 2 + "px";
        lightButtons[index2].style.top = y2 - dimensionLightFloat / 2 + "px";
    }
}

function addPointLight(){
    //We get the direction where to get the pointlight
    if(pointLight){
        scene2.remove(pointLight);
        pointLight = null;
        scene2.remove(sphere);
        sphere = null;
    }
    let planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    let yTop = 1.0;
    let xTop = 0.0;
    let raycaster2 = new THREE.Raycaster();
    raycaster2.setFromCamera({x: xTop, y: yTop}, camera2);
    let topPosition = new THREE.Vector3();
    raycaster2.ray.intersectPlane(planeZ, topPosition);
    let distanceToTop = topPosition.y;


    let yDir = 0.7;
    let xDir = 0.0;

    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera({x: xDir, y: yDir}, camera2);

    let targetPosition = new THREE.Vector3();
    raycaster.ray.intersectPlane(planeZ, targetPosition);

    pointLight = new THREE.PointLight(0xFFFFFF, 1);
    pointLight.position.set(targetPosition.x, targetPosition.y, 0.0);
    scene2.add(pointLight);

    //We add a reference sphere where the light is
    //The radius of the sphere depends on the distance to the top. It is a ratio of 1 to 21
    let radius = pointLightRadius * distanceToTop;
    let geometry = new THREE.SphereGeometry(radius, 32, 32);
    let material = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(targetPosition.x, targetPosition.y, 0.0);
    scene2.add(sphere);

    renderer2.render(scene2, camera2);
}