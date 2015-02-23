"use strict"	

var CIRCLE_SPEED = 200;
	
var Bouller = function(x, y, state) {

	this.x = x;
	this.y = y;
	this.active = true;
	this.state = state;
	this.radius = 25;
	this.color = "#FFF";
}
	
var b = Bouller.prototype;

b.update = function(dt, circles)
{
	for(var i = 0; i < circles.length; i++)
	{
		if(this.collidesWithCircle(circles[i]))
		{
			this.state -= 1;
			circles[i].active = false;
		}
	}
	if(this.state <= 0)
	{
		this.explode(circles);
	}
	else if (this.state == 1)
	{
		this.color = "#F00";
	}
	else if (this.state == 2)
	{
		this.color = "#0F0";
	}
	else if (this.state == 3)
	{
		this.color = "#00F";
	}
	else if (this.state == 4)
	{
		this.color = "#0FF";
	}
	else if (this.state == 5)
	{
		this.color = "#F0F";
	}
	else if (this.state == 6)
	{
		this.color = "#FF0";
	}
	else if (this.state == 7)
	{
		this.color = "#FFF";
	}
};

b.draw = function(ctx)
{
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill()
};

b.collidesWithCircle = function(circle)
{
	return circlesIntersect(this, circle);
};

b.explode = function(circles)
{
	this.active = false;
	circles.push(new Circle(this.x, this.y,  CIRCLE_SPEED, 			   0));
	circles.push(new Circle(this.x, this.y, -CIRCLE_SPEED,		   	   0));
	circles.push(new Circle(this.x, this.y, 			0,  CIRCLE_SPEED));
	circles.push(new Circle(this.x, this.y, 			0, -CIRCLE_SPEED));
	console.log("boom");
};
//}();