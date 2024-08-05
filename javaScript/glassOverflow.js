let windows = [];
let galleryPictures = ['../../media/GO1.png', '../../media/GO2.png', '../../media/GO3.png', '../../media/GO4.png', '../../media/GO5.png'];
function elt(type, prop, ...childrens) {
    let elem = document.createElement(type);
    if (prop) Object.assign(elem, prop);
    for (let child of childrens) {
        if (typeof child == "string") elem.appendChild(document.createTextNode(child));
        else elem.appendChild(child);  // Correctly append the child element
    }
    return elem;
}

class ProgressBar {
    constructor(now, min, max) {
        this.dom = elt("div", {
            className: "progress-bar"
        });
        this.min = min;
        this.max = max;
        this.intervalCode = 0;
        this.now = now;
        this.syncState();
    }

    syncState() {
        this.dom.style.width = this.now + "%";
    }

    startTo(step, time) {
        if (this.intervalCode !== 0) return;
        console.log('Starting progress bar');
        this.intervalCode = setInterval(() => {
            if (this.now + step > this.max) {
                this.now = this.max;
                this.syncState();
                clearInterval(this.intervalCode);
                this.intervalCode = 0;
                return;
            }
            this.now += step;
            this.syncState()
        }, time);
    }

    end() {
        this.reset();
    }

    reset() {
        clearInterval(this.intervalCode);
        this.intervalCode = 0;
        this.now = this.min;
        this.syncState();
    }

    restart(step, time) {
        this.reset();
        this.startTo(step, time);
    }

    destroy() {
        clearInterval(this.intervalCode);
        this.dom.remove();
    }
}

class Window {
    constructor(title, contentHTML, x, y, width, height, width2, height2, options = {}) {

        if (options.specialType === 'gallery') {
            this.gallery = true;
            this.timer = null;
            this.galleryImages = options.galleryImages;
            this.progressBar = null;
            this.index = 0;
        }

        if (options.fontSize) {
            this.fontSize = options.fontSize;
        }

        if (options.upFontSize) {
            this.upFontSize = options.upFontSize;
        }

        if (options.fontColor) {
            this.fontColor = options.fontColor;
        }

        this.title = title;
        this.contentHTML = contentHTML;
        this.windowElement = null;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.width2 = width2;
        this.height2 = height2;
        this.minimized = false;
        this.maximized = false;
        this.createWindow(x, y, width, height, title, contentHTML);
        windows.push(this);

    }

    createWindow(x, y, width, height, title, contentHTML) {
        fetch('../Templates/window-template.handlebars')
            .then(response => response.text())
            .then(template => {
                const compiledTemplate = Handlebars.compile(template);

                const data = {
                    title: title,
                    content: contentHTML
                };

                const html = compiledTemplate(data);

                const windowElement = document.createElement('div');
                windowElement.classList.add('window');
                windowElement.style.left = `${x}px`;
                windowElement.style.top = `${y}px`;
                windowElement.style.width = `${width}px`;
                windowElement.style.height = `${height}px`;
                windowElement.innerHTML = html;

                document.body.appendChild(windowElement);

                this.windowElement = windowElement; // Assign windowElement to instance variable

                const minimizeButton = windowElement.querySelector('.minimize');
                const maximizeButton = windowElement.querySelector('.maximize');
                const closeButton = windowElement.querySelector('.close');

                const tab = windowElement.querySelector('.title-bar');

                // Function to handle window dragging
                const handleDrag = (e) => {
                    e.preventDefault();
                    const offsetX = e.clientX - this.dragStartX;
                    const offsetY = e.clientY - this.dragStartY;
                    this.x = this.startX + offsetX;
                    this.y = this.startY + offsetY;
                    this.windowElement.style.left = `${this.x}px`;
                    this.windowElement.style.top = `${this.y}px`;
                };

                // Event listeners for dragging
                tab.addEventListener('mousedown', (e) => {
                    if (e.target.classList.contains('window-button')) return;
                    this.dragging = true;
                    this.startX = this.windowElement.offsetLeft;
                    this.startY = this.windowElement.offsetTop;
                    this.dragStartX = e.clientX;
                    this.dragStartY = e.clientY;
                    document.addEventListener('mousemove', handleDrag);
                    document.addEventListener('mouseup', () => {
                        this.dragging = false;
                        document.removeEventListener('mousemove', handleDrag);
                    });
                });

                minimizeButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (!this.minimized && !this.maximized) {
                        const body = windowElement.querySelector('.window-body');
                        body.style.display = 'none';
                        this.minimized = true;
                    } else if (this.maximized) {
                        this.windowElement.style.width = `${this.width}px`;
                        this.windowElement.style.height = `${this.height}px`;
                        this.maximized = false;
                        if(this.upFontSize){
                            let pElements = windowElement.querySelectorAll('p');
                            pElements.forEach(p => {
                                p.style.fontSize = this.fontSize;
                            });
                        }
                    }
                });

                maximizeButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (this.minimized) {
                        const body = windowElement.querySelector('.window-body');
                        body.style.display = 'flex';
                        this.minimized = false;
                    } else if (!this.maximized && !this.minimized) {
                        this.windowElement.style.width = `${this.width2}px`;
                        this.windowElement.style.height = `${this.height2}px`;
                        this.maximized = true;
                        if(this.upFontSize){
                            console.log('Up font size');
                            let pElements = windowElement.querySelectorAll('p');
                            pElements.forEach(p => {
                                p.style.fontSize = this.upFontSize;
                            });
                        }
                    }
                });

                closeButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    console.log('Close button clicked!');
                    if(this.gallery){
                        clearInterval(this.timer);
                        this.progressBar.destroy();
                    }
                    document.body.removeChild(windowElement);
                    windows = windows.filter(w => w !== this); // Filter out current window instance
                });

                if (this.gallery) {
                    console.log('Gallery window created');
                    this.index = 0;
                    this.changeGalleryPicture = this.changeGalleryPicture.bind(this); // Bind context
                    this.resetTimer = this.resetTimer.bind(this); // Bind context
                    this.timer = setInterval(this.changeGalleryPicture.bind(this), 5000);
                    this.progressBar = new ProgressBar(10, 10, 100);
                    this.windowElement.querySelector(".timer-bar-container").appendChild(this.progressBar.dom);
                    this.progressBar.startTo(10, 500);
                    setTimeout(() => {
                        this.progressBar.end()
                    }, 5000);

                    windowElement.querySelector('.gallery-picture').addEventListener('click', this.changeGalleryPicture);
                }

                if (this.fontSize) {
                    let pElements = windowElement.querySelectorAll('p');
                    pElements.forEach(p => {
                        p.style.fontSize = this.fontSize;
                    });
                }

                if (this.fontColor) {
                    let pElements = windowElement.querySelectorAll('p');
                    pElements.forEach(p => {
                        p.style.color = this.fontColor;
                    });
                }

                this.windowElement.style.visibility = 'hidden';
            })
            .catch(error => console.error('Error fetching Handlebars template:', error));
    }

    changeGalleryPicture() {
        console.log('Changing gallery picture');
        this.resetTimer();
        var gallery = this.windowElement.querySelector('.gallery-picture');
        this.index = (this.index + 1) % this.galleryImages.length;
        gallery.src = this.galleryImages[this.index];
    }

    resetTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(this.changeGalleryPicture.bind(this), 5000); // Bind context again
        this.progressBar.restart(10, 500);
    }


    popUpAnimation() {
        this.windowElement.style.transform = 'scale(0.1)';
        this.windowElement.style.visibility = 'visible';

        //add animation of scale from 0.1 to 1.2 then back to one in a smooth way
        let scale = 0.1;
        let scaleStep = 0.2;
        let scaleInterval = setInterval(() => {
            if (scale >= 1.0) {
                clearInterval(scaleInterval);
                this.windowElement.style.transform = 'scale(1)';
                return;
            }
            scale += scaleStep;
            this.windowElement.style.transform = `scale(${scale})`;
        }, 50);
    }
}

//On DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    

    function logDimensions(stage) {
        let galleryContainer = document.querySelector('.gallery-container');
        let galleryPicture = document.querySelector('.gallery-picture');
        console.log(`-- ${stage} --`);
        console.log(`Container Dimensions:`);
        console.log(`  Offset Height: ${galleryContainer.offsetHeight}`);
        console.log(`  Offset Width: ${galleryContainer.offsetWidth}`);
        console.log(`  Client Height: ${galleryContainer.clientHeight}`);
        console.log(`  Client Width: ${galleryContainer.clientWidth}`);
        console.log(`  Scroll Height: ${galleryContainer.scrollHeight}`);
        console.log(`  Scroll Width: ${galleryContainer.scrollWidth}`);
        
        console.log(`Image Dimensions:`);
        console.log(`  Offset Height: ${galleryPicture.offsetHeight}`);
        console.log(`  Offset Width: ${galleryPicture.offsetWidth}`);
        console.log(`  Client Height: ${galleryPicture.clientHeight}`);
        console.log(`  Client Width: ${galleryPicture.clientWidth}`);
        console.log(`  Natural Height: ${galleryPicture.naturalHeight}`);
        console.log(`  Natural Width: ${galleryPicture.naturalWidth}`);
        console.log(`---------------------`);
    }

    document.addEventListener('click', () => {
        //logDimensions('Click');
    });

    const HTMLCONTENT1 = `
    <button class="download-button" onclick="downloadGame()">DOWNLOAD GLASSOVERFLOW (WINDOWS x64)</button>
    `;

    const HTMLCONTENT2 = `
    <div class='gallery-container'>
        <div class='timer-bar-container'></div>
        <img class='gallery-picture' alt='Gallery picture' src='${galleryPictures[0]}' />   
    </div>
    `;

    const HTMLCONTENT3 = `
    <p>
        GlassOverflow is my pixel art SPH fluid physic-based game. I developed it along with two friends for our final Master's 1 project.
        The game is developed in C++ from scratch, using the OpenGL library and ImGUI for the UI.
        I was mainly responsible for the fluid SPH real time simulation research and implementation, and level design plus gameplay design.
    </p>
    `;

    const HTMLCONTENT4 = `
    <div class='GOVideo-container'>
        <video loop autoplay muted>
            <source src = "https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverflowDemo.mp4" type = "video/mp4">
            This browser does not support the video tag.
        </video>
    </div>
    `;

    const HTMLCONTENT5 = `
    <p>
        [1] Bender, Jan Koschier, Dan. (2016). Divergence-Free SPH for Incompressible and
            Viscous Fluids. IEEE Transactions on Visualization and Computer Graphics. 23.
            1-1. 10.1109/TVCG.2016.2578335.
    </p>
    <p>
        [2] Yan, H., Wang, Z., He, J., Chen, X., Wang, C., Peng, Q. (2009). Real-time fluid
            simulation with adaptive SPH. Computer Animation and Virtual Worlds, 20(2-3),
            417–426. doi:10.1002/cav.300.
    </p>
    `;

    let pictureRatio2 = 1.8;
    let pictureRatio1 = 1.3;

    let downloadRatio2 = 1.8;
    let downloadRatio1 = 1.3;

    let textRatio2 = 1.8;
    let textRatio1 = 1.5;

    let videoRatio2 = 2.5;
    let videoRatio1 = 2.1;

    let researchRatio2 = 1.8;
    let researchRatio1 = 1.5;

    new Window('DOWNLOAD', HTMLCONTENT1, maxX * 3.0 / 10.0, maxY * 6.0 / 10.0, maxX * 1.0 / 10.0 * downloadRatio1, maxY * 2.0 / 10.0 * downloadRatio1, maxX * 1.0 / 10.0 * downloadRatio2, maxY * 2.0 / 10.0 * downloadRatio2);
    new Window('GALLERY', HTMLCONTENT2, maxX * 0.5 / 10.0, maxY * 1.0 / 10.0, maxY * 1.0 / 3.5 * pictureRatio1, maxY * 1.0 / 2.5 * pictureRatio1, maxY * 1.0 / 3.5 * pictureRatio2, maxY * 1.0 / 2.5 * pictureRatio2, { specialType: 'gallery', galleryImages: galleryPictures, 'fontSize' : '0.7vw', 'upFontSize': '0.8vw', 'fontColor': 'white'});
    new Window('WHAT IS GLASSOVERFLOW', HTMLCONTENT3, maxX * 3.4 / 10.0, maxY * 0.5 / 10.0, maxX * 2.0 / 10.0 * textRatio1, maxY * 1.6 / 10.0 * textRatio1, maxX * 2.0 / 10.0 * textRatio2, maxY * 1.6 / 10.0 * textRatio2);
    new Window('VIDEO', HTMLCONTENT4, maxX * 6.2 / 10.0, maxY * 5.3 / 10.0, maxY * 1.0 / 3.0 * videoRatio1, maxY * 1.0 / 5.0 * videoRatio1, maxY * 1.0 / 3.0 * videoRatio2, maxY * 1.0 / 5.0 * videoRatio2);
    new Window('RESEARCH PAPERS', HTMLCONTENT5, maxX * 7.0 / 10.0, maxY * 1.0 / 10.0, maxX * 1.7 / 10.0 * researchRatio1, maxY * 2.0 / 10.0 * researchRatio1, maxX * 1.7 / 10.0 * researchRatio2, maxY * 2.0 / 10.0 * researchRatio2, {'fontSize': '0.65vw', 'upFontSize': '0.8vw', 'fontColor': '#BC871A'});

    for (i = 0; i < windows.length; i++) {
        let popupAnimationTimer = setTimeout(windows[i].popUpAnimation.bind(windows[i]), (i + 1) * 500);
    }
});

function downloadGame() {
    var url = 'https://githubpagesvideos.s3.eu-north-1.amazonaws.com/GlassOverFlowInstaller.exe'
    var a = document.createElement('a');
    a.href = url;
    a.download = 'GlassOverFlowInstaller.exe';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
