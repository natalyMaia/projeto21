
var PLAY = 1;
var END = 0;
var gameState = 1;

var coelho, coelhoImg, floresta, florestaImg;

var score, restart, GameOver, restartImg, GameOverImg;

function preload() {
    
    florestaImg = loadImage("floresta.png");

   //coelhoImg = loadAnimation("coelho1.png","coelho2.png","coelho3.png","coelho4.png","coelho5.png","coelho6.png");

   // GameOverImg = loadImage("GameOver.png");
}    

function setup() {
    
    createCanvas(800, 400);
    //createCanvas(windowWidth, windowHeight);
    //floresta = createSprite(width/2,height,width,2);
    floresta = createSprite(400,400);
    floresta.addImage(florestaImg);
    //floresta.scale = 0.1;
    floresta.velocityX = 4;

    //if(floresta.x > 600 ){
       // floresta.x = height/2;
   // }
    /*floresta.addImage("floresta",florestaImage);*/
    //floresta.x = width/2;
   // floresta.velocityX = -(6 + 3*score/100);

    ///coelho = createSprite(50,height-70,20,50);

    //coelho = createSprite(70,580,20,20);
    //coelho.addAnimation("coelhoImg",coelhoImg);
    //coelho.scale = 0.08;

    //GameOver = createSprite(width/2,height/2- 50);
    //GameOver.addImage(GameOverImg);

    //restart = createSprite(width/2,height/2);
    //restart.addImage(restartImg);

    //GameOver.scale = 0.5;
    //restart.scale = 0.1;

    //GameOver.visible = false;
    //restart.visible = false;

    //score = 0;
}

function draw() {
    
    if (gameState === PLAY) {
        
        background(0);

        if(floresta.X > 400 ){
            floresta.X = height/2;
        }
    //score = score + Math.round(getFrameRate()/60);
    //floresta.velocityX = -(6 + 3*score/100);
    /*if (floresta.x < 0){
        floresta.x = floresta.width/2;
    }*/
    //();
    //();
    //();

    

        drawSprite();
    }
}