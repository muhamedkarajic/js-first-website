var phone = false;
if(window.innerWidth < document.body.clientWidth)
    phone = true;
updateVideo();


function updateVideo(){
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }
    console.log(size.width +"x"+ size.height);
    if(size.width < size.height && !phone)
    {
        phone = true;
        document.getElementById('video').src = "phone.mp4";
    }    
    else if(size.width > size.height && phone)
    {
        phone = false;
        document.getElementById('video').src = "intro.mp4";
    }
}





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
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
// var block3 = document.getElementById("block3");

block1.style.width = "100px";
block1.style.height = "100px";
block1.style.left = "70%";

// block3.style.width = "25px";
// block3.style.height = "25px";
// block3.style.left = "200px";

var i=0;
function parallex() {
    var yScrollPosition = window.scrollY;
    ypos = window.pageYOffset;
    //console.log("ypos = "+ypos + "  -> yscroll = "+yScrollPosition);
    block1.style.transform ="translate3d(" +0 +"px,"+ yScrollPosition*(-2)+"px,0)";
    block1.style.webkitTransform += "rotateZ("+ yScrollPosition*(.25)+"deg)";

    block2.style.transform ="translate3d(" +0 +"px,"+ yScrollPosition*(-.76)+"px,0)";
    block2.style.webkitTransform += "rotateZ("+ yScrollPosition*(-.35)+"deg)";
    block2.style.borderRadius = yScrollPosition*(.028)+"px";
    block1.style.borderRadius = yScrollPosition*(.028)+"px";


    // block3.style.transform ="translate3d(" +0 +"px,"+ yScrollPosition*(-.5)+"px,0)";
    // block3.style.webkitTransform += "rotateZ("+ yScrollPosition*(-.1)+"deg)";



}
window.addEventListener('scroll', parallex);
