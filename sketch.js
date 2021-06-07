const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg;
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
    
    Engine.update(engine);

    // write code to display time in correct format here
    
    if(hour>=12){
        
        textSize(35);
        textFont("Gregorian");
        fill("#02b502");
        text("Time: "+ hour%12+ "PM", 450,350);
    }
    else if(hour===0){
        textSize(35);
        textFont("Gregorian");
        fill("#050112");
        text("Time: 12AM ", 450,350);
    }
    else{
        
        textSize(35);
        textFont("Gregorian");
        fill("#fc4e03");
        text("Time: " + hour + "AM", 450,350);
    }
      
      
}



    

    async function getBackgroundImg(){
        //async completely executes, then proceeds to next
        //await waits for a command to be executed first
        var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON= await response.json();
    
        var datetime= responseJSON.datetime;
        //slice slices out info between given characters
         hour= datetime.slice(11,13);
        
        console.log(hour);
    
        if(hour>=04 && hour<=06){
            bg= "sunrise1.png";
            
        }
        else if(hour>=06 && hour<=08){
            bg="sunrise2.png";
            
        }
        else if(hour>=08 && hour<=10){
            bg= "sunrise3.png";
            
        }
        else if(hour>=10 && hour<=12){
            bg= "sunrise4.png";
        }
        else if(hour>=13 && hour<=15){
            bg = "sunrise5.png";
        }
        else if (hour>=15 && hour<=16){
            bg = "sunrise6.png";

        }
        else if (hour>=16 && hour<=17){
            bg = "sunset7.png";
        }
        else if (hour>=17 && hour<=18){
            bg = "sunset8.png";
        }
        else if (hour>=18 && hour<=19){
            bg = "sunset9.png";
        }
        else if (hour>=19 && hour<=20){
            bg = "sunset10.png";
            
        }
        else if (hour>=20 && hour<=22){
            bg = "sunset11.png";
            
        }
         else{
            bg="sunset12.png";
        }
        
        backgroundImg= loadImage(bg);
    }


