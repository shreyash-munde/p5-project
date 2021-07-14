function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(150, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill(133,33,77);
    stroke(55,67,99);
    circle(50,50,80);

     circle(590,50,80);

     circle(50,440,80);

     circle(590,440,80);

     fill(50,80,122);
     stroke(40,69,70);

     rect(90,40,460,20);

     rect(90,430,460,20);

     rect(40,90,20,310);

     rect(580,90,20,310)
}

function take_snapshot(){
    save("silfi.png");
}