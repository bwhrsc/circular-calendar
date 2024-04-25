function textInAnnularSector 
(outerDiameter, innerDiameter, theText, flip)
{
  let midDiameter = 0.5 * (outerDiameter + innerDiameter);
  let midRadius = 0.5 * midDiameter;
  
  push();
  translate (midRadius, 0);
  rotate (HALF_PI);
  rotate (flip * PI);
  textAlign (CENTER, CENTER);
  text (theText, 0, 0);
  pop();
}

function annularSector 
(spanAngle, outerDiameter, innerDiameter, theText="", flip=false)
{
  let start = -0.5 * spanAngle;
  let stop = 0.5 * spanAngle;
  
  push();
  arc (0, 0, outerDiameter, outerDiameter, start, stop, PIE);
  arc (0, 0, innerDiameter, innerDiameter, start, stop, PIE);
  textInAnnularSector (outerDiameter, innerDiameter, theText, flip);
  pop();
}