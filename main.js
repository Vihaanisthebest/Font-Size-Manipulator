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
    }
}