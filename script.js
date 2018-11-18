// var video = document.getElementById('video');
// var preloader = document.getElementById('overlay');
// var i = 0;


// function checkLoad() {
//     // console.log(i);

//     if (video.readyState === 4 || i === 60) {
        
//         preloader.style.display = 'none';
        
//         document.getElementById("logo").classList.add("logo-animation");
//         if (video.paused) { 
//             document.getElementById('video-button').className = "fa fa-play"; 
//         }
        
//     } else {
//         i++;
//         setTimeout(checkLoad, 100);
//     }
// };
// checkLoad();


var i = 0;
var video = document.getElementById('video');
var spinner = document.getElementById('spinner');
var preloader = document.getElementById('overlay');
var button = document.getElementById('video-button');



function checkLoad() {
    console.log("checkLoad()");
    document.getElementById("logo").classList.add("logo-animation");
    preloader.style.display = 'none';
    spinner.style.display = 'none';
    
}

video.oncanplay = checkLoad();

video.onwaiting = function(){
    spinner.style.display = 'block';
};
video.onplaying = function(){
    spinner.style.display = 'none';
};
video.onpause = function() {
    document.getElementById('video-button').className = "fa fa-play"; 
}; 

function playVideo() {
    video.play();
    button.className = "fa fa-pause";
}

function pauseVideo() {
    video.pause();
    button.className = "fa fa-play";
}

window.addEventListener('blur', pauseVideo, false);
window.addEventListener('focus', playVideo, false);

function pauseStream() 
{
    window.removeEventListener('blur',pauseStream);
    if (video.paused) {
        playVideo();
    }
    else {
        pauseVideo();
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


document.getElementById('video-button').focus();
var preview_bar = document.getElementById("preview-bar");

var i=0;
function parallex() {
    var yScrollPosition = window.scrollY;
    ypos = window.pageYOffset;
    //console.log("ypos = "+ypos + "  -> yscroll = "+yScrollPosition);
    preview_bar.style.transform ="translate3d(" +0 +"px,"+ yScrollPosition*(-2)+"px,0)";

}
window.addEventListener('scroll', parallex);


