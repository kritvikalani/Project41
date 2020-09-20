const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder;
var Drops = []

function preload(){
    
}

function setup(){
   createCanvas(650,1000)
   engine = Engine.create();
   world = engine.world; 

   var maxDrops = 100;
   for(var i=0; i<maxDrops; i++){
       Drops.push(new drops(random(0,600), random(0,600)));
   }
   var Umboy = new umbrella(325,900)
}

function draw(){
    background("black");
    Engine.update(engine)

    if(frameCount%20===0) {
    switch(thunder) {
        case 10: thunder= loadImage("thunder1")
        break;
        case 20: thunder= loadImage("thunder2")
        break;
        default: break;
      }
    }


    Umboy.display();
    maxDrops.display();
    maxDrops.update();
    thunder.display();
}   

