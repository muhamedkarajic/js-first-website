const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = "muhamedkarajic";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    const toolTip = document.getElementById('testing');
    toolTip.style.visibility = "visible";
    setTimeout(function(){
        toolTip.style.visibility = "hidden";
    }, 2000);
};


window.addEventListener('load', function () {

    var video = document.getElementById('video');
    var preloader = document.getElementById('overlay');

    function checkLoad() {
        if (video.readyState === 4) {
            video.play();
            preloader.style.display = 'none';
        } else {
            setTimeout(checkLoad, 100);
        }
    }

    checkLoad();
}, false);