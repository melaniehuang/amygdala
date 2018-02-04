var w = 500;
var h = 120;
var i = 0;
var horizontal = 0;
var origin;
var paintBreak = 0;
var paintGap = 50;
var aPrev;

var selectBoxes = {
  82: "hexA0", // R
  // 84: "hexA1", // T
  // 89: "hexA2", // Y
  // 85: "hexA3", // U
  // 73: "hexA4", // I
  // 79: "hexA5", // D
  // 80: "hexB0", // P
  // 71: "hexB1", // G 
  // 72: "hexB2", // H
  // 74: "hexB3", // J
  // 75: "hexB4", // K
  // 76: "hexB5", // L
};

var selectChannels = {};

var selectValues = {
  48: ["0"], // 0
  49: ["1"], // 1
  50: ["2"], // 2
  51: ["3"], // 3
  52: ["4"], // 4
  53: ["5"], // 5
  54: ["6"], // 6
  55: ["7"], // 7
  56: ["8"], // 8
  57: ["9"], // 9
  65: ["A"], // A
  66: ["B"], // B
  67: ["C"], // C
  68: ["D"], // D
  69: ["E"], // E
  70: ["F"], // F
};

var selectNum = selectBoxes[82];

function preload() {
  for (sb in selectBoxes) {
    selectChannels[selectBoxes[sb]] = 0;
  }
}

function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("rothkoCanvas");
  origin = createVector(random(10,windowWidth-10),random(10,windowHeight-10));
  background(144,133,125);
}

function draw(){
  noStroke();
  var colorA = mixPaint(getPaint("A")); 
  var colorB = mixPaint(getPaint("B"));  

  paintBreak++;

  if (paintBreak == paintGap){
    createPaint(1, colorA, colorB, 200,200);
    paintBreak = 0;
  }
}

function getPaint(s){
  var h = "";
  for (var i = 0; i < 6; i++){
    var selectValue = $("#hex" + s + i + " :selected").text(); // The text content of the selected option    
    h += selectValue;
  }
  return h;
}

function mixPaint(h){
  var hexColor = h;
  var colorRGB = [
    parseInt(hexColor.substring(0,2), 16),
    parseInt(hexColor.substring(2,4), 16),
    parseInt(hexColor.substring(4,6), 16)
  ];
  return color(colorRGB[0],colorRGB[1],colorRGB[2],90);
}

function createPaint(num, c1, c2, paintWidth, paintLength){
  stroke(c1);
  var x1, y1;
  var x2, y2;
  var x3, y3;
  var x4, y4;

  var interB;
  var from = c1;
  var to = c2;
  var xoff = 0;
  num = 2;

  for (var a = 0; a < num; a++){
    x1 = random(-200,windowWidth/2+200);
    y1 = random(-200, windowHeight+200);
   
    x2 = x1 + 60;
    y2 = y1 + random(-20,30);
   
    x3 = x1 + random(900,windowWidth); //length
    y3 = y1 + random(-200,300); //direction
   
    x4 = x3 - 60;
    y4 = y3 + random(-30,20);

    var rand = random(paintWidth,paintWidth*2);
   
    for(var i = 0; i <= rand; i++) {
       xoff = xoff + 1;
       var n = noise(xoff);   
       noFill();
       strokeWeight(2);
       var interB = lerpColor(from, to, n);  
       bezier(x1, y1+i, x2, y2+i, x3, y3+i, x4, y4+i);
       stroke(interB, 200);  
    }
   }
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode in selectBoxes) {
    selectNum = selectBoxes[event.keyCode];
    console.log(selectNum);
  }


  if (event.keyCode in selectValues) {
    let hexDigit = selectValues[event.keyCode];
    let newvalue = document.getElementById(selectNum);
    let channel = selectChannels[selectNum];

    newvalue.value = hexDigit[channel];
  }
}, true);