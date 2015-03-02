
var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 480;

function Circle(x, y, xSpeed, ySpeed)
{
	this.x = x;
	this.y = y;
	this.active = true;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.radius = 0;
	this.drawRadius = 10;
	this.color = "#FFF";
};

var c = Circle.prototype;

c.update = function(dt)
{
	this.x += this.xSpeed * dt;
	this.y += this.ySpeed * dt;
	if(this.x < 0 || this.y < 0 || this.x > CANVAS_WIDTH ||this.y > CANVAS_HEIGHT)
	{
		this.active = false;
	}
};

c.draw = function(ctx)
{
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.drawRadius, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill()
	
	ctx.lineWidth = 4;
	ctx.strokeStyle = "black";
	ctx.stroke();
};
