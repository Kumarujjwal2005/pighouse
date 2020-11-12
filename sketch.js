const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    pig1 = new Pig (780,300);
    box1 = new Box(700,300,70,70);
    box2 = new Box(860,300,70,70);
    log1 = new Log(780,250,250,PI/2);

    box3 = new Box(700,200,70,70);
    pig2 = new Pig(780,200);
    box4 = new Box(860,200,70,70);
    log2 = new Log(780,150,250,PI/2);
    box5 = new Box(780,100,70,70);
    log3 = new Log(696,100,120,PI/7);
    log4 = new Log(856,100,120,-PI/7);
    bird = new Bird(50,50);
        ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}