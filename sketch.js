const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge,jointPoint;
var base_com;
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
   
  bridge = new Bridge(7,{x:240,y:300});
  jointPoint = new Base(20,20,50,50);
  Matter.Composite.add(bridge.body,jointPoint);
  base_com = new link(bridge,jointPoint)
}

function draw() {
  background(51);
  Engine.update(engine);
 bridge.show();
 leftBase.show();
}
