function getMouse(e)
{			
	var mouse = {};			
	mouse.x = e.pageX - e.target.offsetLeft;
	mouse.y = e.pageY - e.target.offsetTop;		
	return mouse;
}
		
function pointInsideCircle(x,y,I)
{
	var dx = x - I.x;
	var dy = y - I.y;
	return dx * dx + dy * dy <= I.radius * I.radius;
}

function circlesIntersect(c1, c2)
{
	var dx = c2.x - c1.x;
	var dy = c2.y - c1.y;
	var distance = Math.sqrt(dx * dx + dy * dy);
	return distance < c1.radius + c2.radius;
}

function getRandomUnitVector()
{
	var x = getRandom(-1, 1);
	var y = getRandom(-1, 1);
	var length = Math.sqrt(x*x + y*y);
	if (length == 0)
	{
		x = 1;
		y = 0;
	}
	else
	{
		x /= length;
		y /= length;
	}
	
	return {x:x, y:y};
}

function getRandom(min, max)
{
	return Math.random() * (max-min) + min;
}

function clamp(val, min, max)
{
	return Math.max(min, Math.min(max, val));
}