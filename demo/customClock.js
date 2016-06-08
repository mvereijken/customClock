
function customClock(element, backgroundColor, numberColor, size, positionStyle, cssFloat) {
	this.element = element;
	this.backgroundColor = backgroundColor;
	this.numberColor = numberColor;
	this.size = size;
	this.positionStyle = positionStyle;
	this.cssFloat = cssFloat;
	
	createCanvas(element, backgroundColor, numberColor, size, positionStyle, cssFloat);
}

function createCanvas(element, backgroundColor, numberColor, size, positionStyle, cssFloat){
	
	var canvas = document.createElement('canvas');

	var elem = document.getElementById(element);
	
	canvas.width = size;
	canvas.height = size;
	canvas.style.position = positionStyle;
	canvas.style.cssFloat = cssFloat;

	elem.appendChild(canvas);

	ctx = canvas.getContext("2d");
	radius = canvas.height / 2;
	ctx.translate(radius, radius);
	radius = radius * 0.90;
	
	drawClock(backgroundColor, numberColor);
	setInterval(function(){ drawClock(backgroundColor, numberColor); }, 1000);
}

function drawClock(backgroundColor, numberColor) {
  drawFace(ctx, radius, backgroundColor, numberColor);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = backgroundColor;
  ctx.fill();
  
  ctx.lineWidth = radius*0.1; //omtrek lijn grootte
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI); //cirkel midden grootte
  ctx.fillStyle = numberColor;
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial"; //text grootte
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width; //dikte wijzers
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}