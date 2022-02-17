
var y 

function setup() 
{
  createCanvas(400, 400);

  y = new Box(100,200,15,15,4,2)
}

function draw() 
{
  background(220);
 
  y.show()

  y.move()
  
  }


