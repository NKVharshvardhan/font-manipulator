function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function modelloaded(){
    console.log("poseNet is loaded");
}

function draw(){
background("#0000FF");
}

function gotposes(results){
if(results.length>0)
{
console.log(results);
}
}