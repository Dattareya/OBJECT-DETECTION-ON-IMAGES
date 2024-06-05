imgstatus = "";
objects = [];
img="";

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status1").innerHTML = "Status:Detecting Objects";
}

function preload() {
    img = loadImage("Crysta.jpg");
}


function modelloaded() {
    console.log("modelloaded");
    imgstatus = true;
}

function draw() {
    image(img, 0, 0, 400, 400);
    if (imgstatus != "") {

        objectDetector.detect(img, gotresults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status1").innerHTML = "Status: Objects Detected " + objects.length;
            fill("red");
            textSize(30);
            text(objects[i].label, objects[i].x, objects[i].y);
            noFill();
            stroke("green");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}