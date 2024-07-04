let windows = [];

class Window {
    constructor(title, contentHTML, x, y, width, height) {
        this.title = title;
        this.contentHTML = contentHTML;
        this.windowElement = null;
        this.x = x;
        this.y = y;
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
                    console.log('Title bar clicked!');
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
                    console.log('Minimize button clicked!');
                    e.stopPropagation();
                });

                maximizeButton.addEventListener('click', (e) => {
                    console.log('Maximize button clicked!');
                    e.stopPropagation();
                });

                closeButton.addEventListener('click', (e) => {
                    console.log('Close button clicked!');
                    document.body.removeChild(windowElement);
                    windows = windows.filter(w => w !== this); // Filter out current window instance
                    e.stopPropagation();
                });
            })
            .catch(error => console.error('Error fetching Handlebars template:', error));
    }
}

function spawnWindow() {
    new Window('Test Window', 'Hello, World!', 100, 100, 300, 200);
}