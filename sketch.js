const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pig=[];
var engine, world;
var train1,train2,train3,train4,train5
var connect1,connect2,connect3,connect4
var rock1
function preload() {
backgroundImg= loadImage ("images/bg.jpg")
trainImg = loadImage ("images/coach.png")
rockImg = loadImage ("images/rock.png")
rock1Img = loadImage ("images/rock1.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
train1 = new Train (200,10,50,50)
ground = new Ground (650,height,1200,40)
train2 = new Train (250,20,50,50)
train3 = new Train (300,10,50,50)
train4 = new Train (350,10,50,50)
train5 = new Train (400,10,50,50)
connect1 = new SlingShot (train1.body,train2.body)
connect2 = new SlingShot (train2.body,train3.body)   
connect3 = new SlingShot (train3.body,train4.body)  
connect4 = new SlingShot (train4.body,train5.body)
rock1 = new Rock (800,50,200,200)
}
function draw(){
    if(backgroundImg)
        background(backgroundImg);
    train1.display ()
    train2.display ()
    train3.display ()
    train4.display ()
    train5.display ()
    connect1.show ()    
    connect2.show ()    
    connect3.show ()  
    connect4.show ()   
    Engine.update(engine);
    rock1.display ()  
    var collection = Matter.SAT.collides(train5.body,rock1.body)
    if (collection.collided){
        noStroke();
         textSize(35) 
        fill("white") 
        text("Train Is Crashed! ", width-300, 50)
    }
}
function keyPressed(){
	if(keyCode === RIGHT_ARROW)  {
	   Matter.Body.applyForce(train5.body,train5.body.position, 
		   {x:15, y: -15})
	}

  }





