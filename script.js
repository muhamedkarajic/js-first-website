/*var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
    overlay.style.display = 'none';
})
 */

window.addEventListener('load', function() {
    
    var video = document.getElementById('video');
    var preloader = document.getElementById('overlay');

    function checkLoad() {
        if (video.readyState === 4) {
            preloader.style.display = 'none';
        } else {
            setTimeout(checkLoad, 100);
        }
    }

    checkLoad();
}, false);