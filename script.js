

function pauseStream() 
{
    var video = document.getElementById('video');
    var button = document.getElementById('video-button');

    if (video.paused) {
        video.play();

        button.className = "fa fa-pause";
    }
    else {
        video.pause();
        button.className = "fa fa-play";
    }
}


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
            document.getElementById("logo").classList.add("logo-animation");

            //for button
            var button = document.getElementById('video-button');
            if (video.paused) {
                button.setAttribute("class", "fa fa-play");
                // button.innerHTML = "H3770 W0R7D";
            }
            else {
                button.setAttribute("class", "fa fa-pause");

                // document.getElementById('video-button').innerHTML = "HELLO WORLD";
            }
            
        } else {
            setTimeout(checkLoad, 100);
        }
    }

    checkLoad();

}, false);


// setTimeout(function(){ 
//     document.getElementById('video').play();
//     console.log("Executed!");
// }, 20000);

