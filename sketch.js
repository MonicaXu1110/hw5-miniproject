var x = 80-15;
var y = 120;  
var r = 10;

var x2 = 215+30;
var y2 = 120;
var r2 = 15;

var x3 = 305+30;
var y3 = 120+240;
var r3 = 15;

var x4 = 155;
var y4 = 120+145;
var r4 = 5;

var mp3;
var mp3Now = 0;

function preload(){
  mp3 = loadSound('./bubblesound.mp3');
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(2);
  fill(255);
  stroke(0);
    for (i=50; i <= 350; i+=30){
        line(i, 50, i, 350);
    }
  

  // draw pipe
  rect(0, 100, 80, 20);

  // draw drip
  ellipse(x, y, r);

  y = y + 5

  if (y > height*2) {
    // reset
    y = 100;
  }
  
  
  // draw pipe2
  rect(230, 60, 30, 20);

  // draw drip2
  ellipse(x2, y2, r2);

  y2 = y2 + 6

  if (y2 > height*2) {
    // reset
    y2 = 60;
  }
  
  // draw pipe3
  rect(320, 260, 30, 20);

  // draw drip3
  ellipse(x3,y3, r3);

  y3 = y3 + 4

  if (y3 > height*2) {
    // reset
    y3 = 260;
  }
  
   // draw pipe4
  rect(140, 180, 30, 20);

  // draw drip4
  ellipse(x4,y4, r4);

  y4 = y4 + 3

  if (y4 > height*2) {
    // reset
    y4 = 180;
  }
  noStroke();
  text('startpoint', 0, 150);
  text('end',365,60 );
  
  //the way
  stroke(255,0,0);
  strokeWeight(1);//line weight
  line(25,155,25,375);
  line(25,375,95,375);
  line(95,375,95,30);
  line(95,30,125,30);
  line(125,30,125,375);
  line(125,375,185,375);
  line(185,375,185,30);
  line(185,30,215,30);
  line(215,30,215,375);
  line(215,375,275,375);
  line(275,375,275,30);
  line(275,30,305,30);
  line(305,30,305,375);
  line(305,375,365,375);
  line(365,375,365,70);
  line(365,70,400,70);


  
  strokeWeight(1);
  fill(0);//the mouse fill color
  stroke(0);//the mouse stroke color
  var mouseR = 15;
  if(!mp3.isPlaying()){
    mp3Now = 0;
  }
  ellipse(mouseX,mouseY,mouseR,mouseR);
  if(dist(mouseX,mouseY,x,y) < (r+mouseR)/2){
    if(mp3Now!=1){
      mp3.play();
      mp3Now = 1;
    }
  }
  if(dist(mouseX,mouseY,x2,y2) < (r2+mouseR)/2){
    if(mp3Now!=1){
      mp3.play();
      mp3Now = 1;
    }
  }
  if(dist(mouseX,mouseY,x3,y3) < (r3+mouseR)/2){
    if(mp3Now!=3){
      mp3.play();
      mp3Now = 3;
    }
  }
  if(dist(mouseX,mouseY,x4,y4) < (r4+mouseR)/2){
    if(mp3Now!=4){
      mp3.play();
      mp3Now = 4;
    }
    }

}
