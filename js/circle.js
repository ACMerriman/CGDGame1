		
var Circle = function() {
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
	};
	
	c.draw = function(ctx)
	{
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.drawRadius, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill()
	};
}();