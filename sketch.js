let canvasSize = { w: 1000, h: 1000 }
let canvasCenter = { x: 0.5 * canvasSize.w, y: 0.5 * canvasSize.h }


var outerDiameter;
var innerDiameter;
var segments;
function segmentSpan() { return TWO_PI / segments; }
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setup() {
  createCanvas(canvasSize.w, canvasSize.h);
  background(220);
  translate (canvasCenter.x, canvasCenter.y);
  
  //Outer ring (months)
  outerDiameter = 900;
  innerDiameter =850;
  segments = 12;
  
  push();
  rotate (-HALF_PI);
  rotate (0.5 * segmentSpan());
  noStroke();
  
    for (var i = 0; i < segments; i++)
  {
    let theText = months[i];
    let flip = (i > 2) && (i < 9);
    annularSector (segmentSpan(), outerDiameter, innerDiameter, theText, false);
    rotate (segmentSpan());
  }
  pop();
  
  
  //Inner ring (weeks)
  outerDiameter = 850;
  innerDiameter = 800;
  segments = 52;
  
  push();
  rotate (-HALF_PI);
  rotate (0.5 * segmentSpan());
  
  for (var i = 0; i < segments; i++)
  {
    let weekNum = i + 1;
    let flip = (weekNum > 13) && (weekNum < 40);
    annularSector (segmentSpan(), outerDiameter, innerDiameter, weekNum, flip);
    rotate (segmentSpan());
  }
  pop();
  
  //Next ring (category)
  outerDiameter = 800;
  innerDiameter = 750;
  segments = 5;
  
  push();
  rotate (-HALF_PI);
  fill (0);
  
  for (var i = 0; i < segments; i++)
  {
    let segmentName = "Category";
    let flip = false;
    annularSector (segmentSpan(), outerDiameter, innerDiameter, segmentName, flip);
    rotate (segmentSpan());
  }
  pop();
  
  
}

function draw() {

}