status="";
function preload(){
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
video=createCapture();
video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}

function modelLoaded(){
    console.log("Model loaded.");
}