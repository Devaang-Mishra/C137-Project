img=""
function preload(){
    img=loadImage("cellphone.jpg");

}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Camera" , 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 100, 300);
    fill("#FF0000");
    text("Cell Phone", 320,120);
    noFill();
    stroke("#FF0000");
    rect(300, 60, 80, 150);
    
}