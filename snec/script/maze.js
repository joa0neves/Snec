function Maze(){
    this.walls = [];

    this.createMaze=function (){
        this.walls=[];
        var cols = floor(width/scl);
        var rows = floor(height/scl);
        for (var i=200;i>=0;i--){
            var px=floor(random(cols));
            var py=floor(random(rows));
            if(px<5 && py<5) {
                i++;
            }else{
                this.walls[i] = createVector(px, py);
                this.walls[i].mult(scl);
            }

        }
    }

    this.drawMaze=function (){
        fill(0,0,0);
        for(var i = 0 ; i< this.walls.length ; i++){
            rect(this.walls[i].x,this.walls[i].y,scl,scl);
        }
    }

}