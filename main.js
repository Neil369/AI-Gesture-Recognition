noseX = 0;
noseY = 0;
difference =0;
leftWristX = 0;
rightWristY = 0;

function setup()
{
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,500);
    canvas.position(500,150);

    PoseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function draw()
{
    background('#7fff00');
    fill('#cdad00');
    stroke('#ffd700');
    square(noseX ,noseY,difference)
    document.getElementById("square_side").innerHTML = "The difference of the square will be =" +difference + "px";
}

function gotPoses(results)
{
    if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = "+ noseX+"noseY =" + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(rightWristX - leftWristX);
console.log("leftWristX = "+leftWristX + "rightWristX =" + rightWristX + "difference = " + difference);
}
}

