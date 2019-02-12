var i = 0;
var video = document.getElementById('video');
var spinner = document.getElementById('spinner');
var preloader = document.getElementById('overlay');
var button = document.getElementById('video-button');

video.oncanplay = checkLoad;

if(!video.paused)
    checkLoad();

function checkLoad() {
    document.getElementById("logo").classList.add("logo-animation");
    preloader.style.display = 'none';
    spinner.style.display = 'none';
    if(!video.paused)
        button.className = "fa fa-pause";
}



var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
}




Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

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


console.log(size.width +"x"+ size.height);


var buttonPress = false;
var phone = true;
if(size.width < size.height)
    phone = false;
// updateVideo();




// video.onloadedmetadata = checkLoad;
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
video.onplay = function() {
    button.className = "fa fa-pause"; 
};

function playPause()
{ 
    if (video.paused) 
        video.play();
    else 
        video.pause();
}

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

window.addEventListener('blur', pauseVideo);
window.addEventListener('focus', CheckVideo);

var playAnyway = false;
function pauseStream() 
{
    //window.removeEventListener('blur',pauseVideo);
    //window.removeEventListener('scroll', parallex);
    window.removeEventListener('focus',playVideo);

    if(offset*2 > size.height && !playAnyway)
        playAnyway = true;

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



// document.getElementById('video-button').focus();
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

    block1.style.webkitTransform += "rotateZ("+ offset*(.25)+"deg)";

    block2.style.webkitTransform += "rotateZ("+ offset*(-.35)+"deg)";
    block2.style.borderRadius = offset*(.028)+"px";
    block1.style.borderRadius = offset*(.028)+"px";
}
window.addEventListener('scroll', parallex, false);


function CheckVideo()
{
    if(offset*2 > size.height && !playAnyway)
        pauseVideo();
    else if(offset*2 < size.height  && !buttonPress)
    {
        playVideo();
        playAnyway = false;
    }
    else if(offset > size.height)
        pauseVideo();
}


var newImage = false;
var firstImage = true;
var gallaryImage = document.getElementById('gallaryImage');
var lastURL = "none";

function imageUpdate(x) {
    gallaryImage.classList.add("fadeOut-animation");
    lastURL = "url('"+x.src+"')";
    if(newImage == false)
    {
        if(firstImage == true)
        {
            fadeInImage();
            firstImage = false;
        }
        else{
            newImage = true;
            setTimeout(fadeInImage, 1000);
        }
    }
}

function fadeInImage()
{
    gallaryImage.classList.remove("fadeOut-animation");
    gallaryImage.classList.add("fadeIn-animation");
    gallaryImage.style.backgroundImage = lastURL;
    newImage = false;   
}

var lastValue = 1;
function updateDesignVideo(x)
{
    if(x != lastValue)
    {
        var designVideo = document.getElementById("designVideo");
        if(x == 1)
            designVideo.src = "ae.mp4#t=0.1";
        else
            designVideo.src = "intro.mp4#t=0.1";
        lastValue = x;
    }
}

function noneImage()
{
    firstImage = true;
    lastURL = "none";
    gallaryImage.classList.remove("fadeIn-animation");
}

function imageDelete(x) {
    gallaryImage.classList.remove("fadeIn-animation");
    gallaryImage.classList.add("fadeOut-animation");
}

document.addEventListener('keydown', function(e){
    var key = e.keyCode ? e.keyCode : e.which;
    if(offset*2 < size.height)
        if (key == 32)
        {
            pauseStream();
            e.preventDefault();
        }
} );

