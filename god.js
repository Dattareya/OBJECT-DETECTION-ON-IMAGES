video="";
imgstatus = "";
objects = [];

function setup() {
    canvas = createCanvas(300,400);
    canvas.center();

    video.size(300,400);
    video.hide();
 
}

function preload()
{
   video=createVideo("thar.mp4");
}

function start()
{
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelloaded()
{
    console.log("modelloaded");
    video.loop();
    video.speed(1);
    video.volume(0);
    imgstatus= true;
}

function draw()
{
    image(video,0,0,300,400);
    if (imgstatus != "") {

        objectDetector.detect(video, gotresults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected " + objects.length;
            fill("red");
            textSize(30);
            text(objects[i].label, objects[i].x, objects[i].y);
            noFill();
            stroke("green");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}