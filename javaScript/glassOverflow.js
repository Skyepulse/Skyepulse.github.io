let windows = [];

class Window {
    constructor(title, contentHTML, x, y, width, height, width2, height2) {
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
                    if(e.target.classList.contains('window-button')) return;
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
                    if(!this.minimized && !this.maximized) {
                        const body = windowElement.querySelector('.window-body');
                        body.style.display = 'none';
                        this.minimized = true;
                    } else if(this.maximized) {
                        this.windowElement.style.width = `${this.width}px`;
                        this.windowElement.style.height = `${this.height}px`;
                        this.maximized = false;
                    }
                });

                maximizeButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(this.minimized) {
                        const body = windowElement.querySelector('.window-body');
                        body.style.display = 'flex';
                        this.minimized = false;
                    } else if(!this.maximized && !this.minimized) {
                        this.windowElement.style.width = `${this.width2}px`;
                        this.windowElement.style.height = `${this.height2}px`;
                        this.maximized = true;
                    }
                });

                closeButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    console.log('Close button clicked!');
                    document.body.removeChild(windowElement);
                    windows = windows.filter(w => w !== this); // Filter out current window instance
                });
            })
            .catch(error => console.error('Error fetching Handlebars template:', error));
    }
}

//On DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    const HTMLCONTENT1 = `
    <button class="download-button" onclick="downloadGame()">DOWNLOAD GLASSOVERFLOW (WINDOWS x64)</button>
    `;

    new Window('DOWNLOAD', HTMLCONTENT1, maxX*1.0/10.0, maxY*7.0/10.0, 600, 400, 900, 600);
    new Window('Window 2', 'This is the content of Window 2', maxX*4.5/10.0, maxY*1.0/10.0, 400, 200, 800, 400);
    new Window('Window 3', 'This is the content of Window 3', maxX*8.0/10.0, maxY*5.0/10.0, 400, 200, 800, 400);
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
    