var x,y;
var valx,valy,butt;

function setup() {
  createCanvas(window.innerWidth*9/10,window.innerHeight);
  x=width/2; y=height/2;
  valx=createInput();
  //valx.size(height/100,height/200);
  valx.position(width,0);
  valy=createInput();
  butt=createButton("fund");
  butt.mouseClicked(functie);
}

function draw() {
  background(0);
  strokeWeight(width/100);
  stroke(255);
  point(x,y);
  
}

function functie(){
  x=valx.value();
  y=valy.value();
}