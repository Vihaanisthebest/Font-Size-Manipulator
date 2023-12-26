difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,520);
    video.position(75, 90);

    canvas = createCanvas(500, 410);
    canvas.position(700, 135);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;

        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function draw()
{
    background("#FFFFFF");
    textSize(difference);
    fill("#FF0000");
    text('This Is An Example', 20, 65);
}