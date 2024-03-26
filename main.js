song_1 = "";
song_2 = "";

function setup(){
    canvas = createCanvas(500, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function draw(){
    image(video, 0,0, 500, 600);
}

function gotResults(results){
    if (results.length > 0){
        console.log(results);
    }
}