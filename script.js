var i = 0;
var video = document.getElementById('video');
var spinner = document.getElementById('spinner');
var preloader = document.getElementById('overlay');
var button = document.getElementById('video-button');

var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
}







console.log(size.width +"x"+ size.height);


var buttonPress = false;
var phone = true;
if(size.width < size.height)
    phone = false;
updateVideo();


function updateVideo(){
    size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }
    console.log(size.width +"x"+ size.height);
    if(size.width < size.height && !phone)
    {
        phone = true;
        document.getElementById('video').src = "phone.mp4#t=0.1";
    }    
    else if(size.width > size.height && phone)
    {
        phone = false;
        document.getElementById('video').src = "intro.mp4#t=0.1";
    }
}

function checkLoad() {
    document.getElementById("logo").classList.add("logo-animation");
    preloader.style.display = 'none';
    spinner.style.display = 'none';
    button.className = "fa fa-pause";
}

video.oncanplay = checkLoad;

video.onwaiting = function(){
    spinner.style.display = 'block';
};
video.onplaying = function(){
    spinner.style.display = 'none';
};
video.onpause = function() {
    document.getElementById('video-button').className = "fa fa-play"; 
};

function playPause()
{ 
    if (video.paused) 
    {
        video.play();
        button.className = "fa fa-pause";
    }
    else 
    {
        video.pause();
        button.className = "fa fa-play";
    }
}

function playVideo() {
    video.play();
    button.className = "fa fa-pause";
}

function pauseVideo() {
    video.pause();
    button.className = "fa fa-play";
}

window.addEventListener('blur', pauseVideo);
window.addEventListener('focus', playVideo);

function pauseStream() 
{
    //window.removeEventListener('blur',pauseVideo);
    window.removeEventListener('focus',playVideo);
    //window.removeEventListener('scroll', parallex);

    if (video.paused) {
        playVideo();
        buttonPress = false;
    }
    else {
        pauseVideo();
        buttonPress = true;
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

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};



document.getElementById('video-button').focus();
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
// var block3 = document.getElementById("block3");

block1.style.width = "100px";
block1.style.height = "100px";
block1.style.left = "70%";
block2.style.left = "15%";

// block3.style.width = "25px";
// block3.style.height = "25px";
// block3.style.left = "200px";

var i=0;

var offset = window.scrollY;
function parallex() {
    offset = window.scrollY;
    console.log(offset);
    
    CheckVideo();


    block1.style.transform ="translate3d(" + 0 + "px," +    offset*(-2) +   "px,    0)";
    block2.style.transform ="translate3d(" + 0 + "px," +    offset*(-.76) + "px,    0)";
    
    
    
    //block1.style.backgroundPositionY = (offset * (-2)) + "px";

    //block2.style.backgroundPositionY = (offset * (-0.76)) + "px";

    block1.style.webkitTransform += "rotateZ("+ offset*(.25)+"deg)";

    block2.style.webkitTransform += "rotateZ("+ offset*(-.35)+"deg)";
    block2.style.borderRadius = offset*(.028)+"px";
    block1.style.borderRadius = offset*(.028)+"px";
}
window.addEventListener('scroll', parallex, false);


function CheckVideo()
{
    if(offset*2 > size.height)
    {
        pauseVideo();
        //document.getElementById('video-button').focus();
    }
    else if(offset*2 < size.height  && !buttonPress)
    {
        playVideo();
        //document.getElementById('video-button').focus();
    }
}

// document.addEventListener('keydown', function(e){
//     var key = e.keyCode ? e.keyCode : e.which;
//     if(offset*2 < size.height)
//         if (key == 32)
//         {
//             pauseStream();
//             e.preventDefault();
//         }
// } );
