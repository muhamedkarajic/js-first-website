var video = document.getElementById('video');
var preloader = document.getElementById('overlay');
var i = 0;


function checkLoad() {
    console.log(i);
    if(i === 60)
    {
        preloader.style.display = 'none';
        preloader.visibility = "hidden";
        return 0;
    }

    if (video.readyState === 4) {
        //video.play();
        
        preloader.style.display = 'none';
        
        document.getElementById("logo").classList.add("logo-animation");
        if (video.paused) { 
            document.getElementById('video-button').className = "fa fa-play"; 
        }
        
    } else {
        i++;
        setTimeout(checkLoad, 100);
    }
};
checkLoad();




// window.addEventListener('load', function () {

//     var video = document.getElementById('video');
//     var preloader = document.getElementById('overlay');
//     function checkLoad() {

//         if (video.readyState === 4) {
//             //video.play();
            
//             preloader.style.display = 'none';

//             document.getElementById("logo").classList.add("logo-animation");
//             if (video.paused) { 
//                 document.getElementById('video-button').className = "fa fa-play"; 
//             }
            
//         } else {
//                 setTimeout(checkLoad, 100);
//         }
//     }
//     checkLoad();
// }, false);

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




