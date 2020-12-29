var car;
var carImg;

var score;
var canvs, backgroundImg;



function preload(){
   backgroundImg = loadImage("track.jpg");
   carImg = loadImage("car.png");
  
   
   // ground = loadImage("track.png");
   
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    track = createSprite(windowWidth/2,windowHeight/2,50,50);
    track.addImage("track",backgroundImg)
    image(backgroundImg, 0,-windowHeight*4,windowWidth, windowHeight*5);
    track.velocityY = -4;

    car = createSprite(windowWidth/2,windowHeight/2,50,50);
    car.addImage("car",carImg,10,10);
    car.scale = 0.1
    
    

   


    //gameOver = createSprite(windowWidth/2,windowHeight/2,100,100);
    //gameOver.visible = false;
    //restart = createSprite(windowWidth/2,windowHeight/4,100,100);
    //restart.visible = false;
    


    obstacleGroup = new Group();
    
   // button = createButton('Click To Play');
    //button.position(windowWidth/2,windowHeight/2,20,20);
   // button.mousePressed(gameState === PLAY);

}
function draw(){
    background(101,101,101);
    
    if(track.y < 0){
        track.y = track.height/2
    }
   
  
       
    car.x = mouseX;
    car.y = mouseY;
      


  drawSprites();
}
