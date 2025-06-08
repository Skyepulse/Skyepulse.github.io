document.addEventListener('DOMContentLoaded', function() {
    let hasLoadedOnce = false;
    const video = document.getElementById('video1');
    const videoContainer = document.getElementById('trailerDiv');
    video.addEventListener('canplaythrough', function() {
        if (!hasLoadedOnce) {
            console.log('video is ready');
            //get the span element that is a child of trailerDiv, remove it
            const span = document.getElementById('trailerSpan');
            span.remove();
            videoContainer.style.visibility = 'visible';
            hasLoadedOnce = true;
            this.removeEventListener('canplaythrough', arguments.callee);
        }
    });
});