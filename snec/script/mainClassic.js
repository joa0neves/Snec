var s;
var scl=0;
var maze;
var food;
var moving;
var typeFood = [1,2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2];
var choice=3;
var isPlaying=1;
var arrMusic=["../audio/takeonme.mp3","../audio/feelsgoodinc.mp3","../audio/africa.mp3"];
var posArrMusic=0;
var isPaused=0;

function setup() {
    canvasHeight=592;
    canvasWidth=1152;
    var cnv = createCanvas(canvasWidth, canvasHeight);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    mmc(canvasWidth,canvasHeight);
    s = new Snake();
    frameRate(10);
    pickLocation();
    document.getElementById("music").play();
}


function mmc(a,b){
    var n=floor(a/b);
    var r=a-(n*b);
    if(r!==0){
        while(r!==0){
            a=b;
            b=r;
            n=floor(a/b);
            r=a-(n*b);
        }
    }
    scl=b;
}


function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    var foodx=floor(random(cols));
    var foody=floor(random(rows));
    for (var i = 0; i < s.tail.length; i++){
        if(s.tail[i].x===foodx && s.tail[i].y===foody){
            foodx=floor(random(cols));
            foody=floor(random(rows));
            i = 0;
        }
    }
    food = createVector(foodx, foody);
    food.mult(scl);
}

function draw() {
    if(isPaused===1){
        pauseFunc();
    }
    else{
        background(228, 228, 161);

        if (s.eat(food,choice)) {
            pickLocation();
            choice=typeFood[int(random(20))];
        }

        s.death();
        s.update();
        s.show();

        //Desenhar Comida (escolher random)
        if(choice===1){
            image(s.sprite5,food.x,food.y,scl,scl);
        }
        else if(choice===2){
            image(s.sprite6,food.x,food.y,scl,scl);
        }
        else if(choice===3){
            image(s.sprite7,food.x,food.y,scl,scl);
        }
    }
}

function pauseFunc() {
    textSize(60);
    textAlign(CENTER);
    textStyle(BOLD);
    text ("PAUSE", 590, 250);
    text ("Hit ESC to start Game", 590, 300);
}
    

function keyPressed() {
    if (keyCode === UP_ARROW) {
        if(s.getYSpeed()!==1){
          s.dir(0, -1);
        }
    } else if (keyCode === DOWN_ARROW) {
        if(s.getYSpeed()!==-1){
          s.dir(0, 1);
        }
    } else if (keyCode === RIGHT_ARROW) {
        if(s.getXSpeed()!==-1){
            s.dir(1, 0);
        }
    } else if (keyCode === LEFT_ARROW) {
        if(s.getXSpeed()!==1){
          s.dir(-1, 0);
        }
    } else if (keyCode===ESCAPE){
        if(isPaused===0){
            isPaused++;
        }
        else{
            isPaused=0;
        }
    } else if (keyCode === 66 || keyCode === 98 ){
        switch(isPlaying){
            case 0:
                document.getElementById("music").play();
                isPlaying=1;
                break;
            case 1:
                document.getElementById("music").pause();
                isPlaying=0;
                break;
            default:
                console.log("Error pausing\n");
                break;
        }
    } else if (keyCode===78 || keyCode===110) {
        switch(posArrMusic){
            case 0:
                posArrMusic++;
                document.getElementById("activeAudio").src=arrMusic[posArrMusic];
                document.getElementById("music").load();
                document.getElementById("music").play();
                break;
            case 1:
                posArrMusic++;
                document.getElementById("activeAudio").src=arrMusic[posArrMusic];
                document.getElementById("music").load();
                document.getElementById("music").play();
                break;
            case 2:
                posArrMusic=0;
                document.getElementById("activeAudio").src=arrMusic[posArrMusic];
                document.getElementById("music").load();
                document.getElementById("activeAudio").play();
                break;
            default:
                break;
        }
    } else if (keyCode===77 || keyCode===109) {
        switch(posArrMusic){
            case 0:
                posArrMusic=2;
                document.getElementById("activeAudio").src=arrMusic[posArrMusic];
                document.getElementById("music").load();
                document.getElementById("music").play();
                break;
            case 1:
                posArrMusic=0;
                document.getElementById("activeAudio").src=arrMusic[posArrMusic];
                document.getElementById("music").load();
                document.getElementById("music").play();
                break;
            case 2:
                posArrMusic=1;
                document.getElementById("activeAudio").src=arrMusic[posArrMusic];
                document.getElementById("music").load();
                document.getElementById("music").play();
                break;
            default:
                break;
        }
    } else if (keyCode===74 || keyCode===106) {
        document.getElementById("music").volume-=0.10;
    } else if (keyCode===75 || keyCode===107) {
        document.getElementById("music").volume+=0.10;
    }

}