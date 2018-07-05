function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.score = 0;
  this.tail = [];
  this.name;
  this.sprite1 = loadImage("../sprites/Snec_head_right.png");
  this.sprite2 = loadImage("../sprites/Snec_head_left.png");
  this.sprite3 = loadImage("../sprites/Snec_head_down.png");
  this.sprite4 = loadImage("../sprites/Snec_head_up.png");
  this.sprite5 = loadImage("../sprites/food.png");  //comida normal
  this.sprite6 = loadImage("../sprites/foodGreen.png");   //comida Verde
  this.sprite7 = loadImage("../sprites/foodSpecial.png");   //comida Especial
  this.lastPos=createVector(1,1);
  this.lastFoodEaten=1;
  document.getElementById("Score").innerHTML=0;

  this.getXSpeed = function () {
    return this.xspeed;
  }
  
  this.getYSpeed = function () {
    return this.yspeed;
  }

  this.getX = function () {
    return this.x;
  }
  
  this.getY = function () {
    return this.y;
  }

  this.setposActual = function(){
    this.lastPos = createVector(this.x,this.y);
  }

  this.eat = function(pos,foodTypeVar) {
    this.lastFoodEaten=foodTypeVar;
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
        switch(foodTypeVar){
            //award points by food type
            case 1:
                this.score++;
                this.total++;
                document.getElementById("Score").innerHTML=this.score;
                break;
            case 2:
                this.total++;
                break;
            case 3:
                this.score+=3;
                document.getElementById("Score").innerHTML=this.score;
                break;
            default:
                break;
        }
        return true;
    } 
    else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        document.getElementById("music").pause();
        this.name = prompt("Insert name:");
        localStorage.setItem(this.name,this.score);
        this.total = 0;
        this.tail = [];
        if (confirm("Wanna play again?") == false) {
            window.location.replace("../menuPrincipal.html");   
        }
        this.x=0;
        this.y=0;
        this.xspeed=0;
        this.yspeed=0;
        this.score=0;
        document.getElementById("Score").innerHTML = 0;
        document.getElementById("music").play(); 
      }
    }
    
  }

  this.mazeDeath=function(){
    for(var i=0; i<maze.walls.length;i++){
      var pos=maze.walls[i];
      var d=dist(this.x,this.y,pos.x,pos.y);
      if(d < 1){
        document.getElementById("music").pause();
        this.name = prompt("Insert name:");
        this.name = this.name.concat("(Maze)");
        localStorage.setItem(this.name,this.score.toString());
        this.total = 0;
        this.tail = [];
        if (confirm("Wanna play again?") == false) {
            window.location.replace("../menuPrincipal.html");   
        }
        this.x=0;
        this.y=0;
        this.xspeed=0;
        this.yspeed=0;
        document.getElementById("Score").innerHTML=0;
        document.getElementById("music").play();      
      }
    }    
  }

  this.update = function() {
    
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
        this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);

  }

  this.show = function() {
    fill(106, 158, 104);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    //Desenhar a cabeça da cobra
    if(this.xspeed>0){
      //Cabeça da Cobra para o lado direito
      image(this.sprite1,this.x,this.y,scl,scl);
    }
    else if(this.xspeed<0){
      //Cabeça da Cobra para o lado esquerdo
      image(this.sprite2,this.x,this.y,scl,scl);
    }
    else if(this.yspeed>0){
      //Cabeça da cobra para baixo
      image(this.sprite3,this.x,this.y,scl,scl);
    }
    else if(this.yspeed<0){
      //cabeça da cobra para cima
      image(this.sprite4,this.x,this.y,scl,scl);
    }
    else if(this.yspeed===0 && this.xspeed===0){
        image(this.sprite1,this.x,this.y,scl,scl);
    }
  }
}