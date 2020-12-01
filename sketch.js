var ground,engine,world;
const Engine=Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
function setup()
{
var canvas= createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var freeze = {
isStatic: true
}
var moving = {
  restitution: 1.0
}
ground = Bodies.rectangle(200,390,200,20,freeze);
World.add(world,ground)
ball = Bodies.circle(200,100,20,moving);
World.add(world,ball);
console.log(ground)
console.log(ground.position.x)
console.log(ground.position.y)
}

function draw()
{
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
}