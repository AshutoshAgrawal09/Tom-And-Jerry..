
function preload() {
  
    //load the images here
    jerryImage1 = loadImage("jerryOne.png");
    jerryImage2 = loadImage("jerryTwo.png");
    jerryImage3 = loadImage("jerryThree.png");
    jerryImage4 = loadImage("jerryFour.png");

    tomImage1 = loadImage("tomOne.png");
    tomImage2 = loadImage("tomTwo.png");
    tomImage3 = loadImage("tomThree.png");
    tomImage4 = loadImage("tomFour.png");

    backImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    //bakgro = createSprite(500,400);
    //backgro.addAnimation(backImage);
    //backgro.scale= 0.5;
    
     tom = createSprite(870, 600);
     tom.addAnimation("tomSleeping", tomImage1); 
     tom.scale = 0.2;

     jerry = createSprite(200, 600);
     jerry.addAnimation("jerryStanding", jerryImage1); 
     jerry.scale = 0.15;
}

function draw() {
    background(backImage);
    text(mouseX +','+mouseY,10,45);

    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
    //Write condition here to evalute if tom and jerry collide
    tom.velocityX=0;
    tom.addAnimation("tomLastImage", tomImage3); 
    tom.x =300;
    tom.scale=0.2;
    tom.changeAnimation("tomLastImage");
    jerry.addAnimation("jerryLastImage", jerryImage3);
    jerry.scale=0.15;
    jerry.changeAnimation("jerryLastImage"); 

    }
    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.addAnimation(tomImage2);
        tom.changeAnimation("catRunning")
    }


}

