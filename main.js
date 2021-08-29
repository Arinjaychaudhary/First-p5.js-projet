function upload(){
    rect(colour,0,10,400,10);
    circle(colour,0,0,30,50);
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(200,250)
    video = createCapture(VIDEO);
    video.hide();
    colour = "";
}

function draw(){

image(video,0,0,400,400);


tint(colour);
}

function take_snapshot(){
    save("sister_name.png");
}

function change_filter(){
  colour =  document.getElementById("color_filter").value;

}