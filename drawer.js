
function Drawer () {
    this.width = 11;
    this.height = 11;
}

Drawer.prototype.drawAll = function (data) {
    var canvas = document.getElementById('cnv'),
        x = 0,
        y = 0,
        arr = [],
        stepX = 64,
        stepY = 48,
        waves = 1,
        dx = [1, 0, -1, 0],
        dy = [0, 1, 0, -1],
        k = 0,
        xExistenceCells,
        yExistenceCells;
        //conditions;
    canvas.width = 704;
    canvas.height = 528;
    canvas.style.border = '1px solid';
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.font = '20px Georgia';
    ctx.moveTo(0,0);

    for (var i = 0; i < this.height; i++){
        arr[i] = [];
        for (var j = 0; j < this.width; j++){
            arr[i][j] = 0;
        }
    }
    i = 0;
    j = 0;

    arr[x][y] = waves;
    do {
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == waves) {
                    for (k = 0; k < 4; k++) {
                        yExistenceCells = j + dy[k] >= 0 && j + dy[k] < this.height;
                        xExistenceCells = i + dx[k] >= 0 && i + dx[k] < this.width;
                        //conditions = (arr[i + dx[k]][j + dy[k]]) == 0;
                        if (xExistenceCells && yExistenceCells && (arr[i + dx[k]][j + dy[k]])) {
                            ctx.fillText(waves, (i+1) * stepX, (j+1) * stepY);
                            arr[i + dx[k]][j + dy[k]] = waves + 1;
                            console.log(arr[i + dx[k]][j + dy[k]]);
                        }
                    }
                }

            }
        }
        waves++;

    } while (arr[this.width-1][this.height-1] == 0);


/*    for (var i =0; i<data.length; i++){
        var x = i%this.width,
            y = Math.floor(i/this.height),
            xG = x*stepX,
            yG = y*stepY;
        ctx.beginPath();
        if (data[i].left){
            ctx.moveTo(xG, yG);
            ctx.lineTo(xG, stepY+yG);
        }
        if (data[i].top){
            ctx.moveTo(xG, yG);
            ctx.lineTo(stepX+xG, yG);
        }
        ctx.stroke();
    }*/
    // this.compareCells(data);
};
Drawer.prototype.compareCells = function (data) {
    var waves = 0,
        steps = 4,
        i = 0,
        dx = [1, 0, -1, 0],
        dy = [0, this.width, 0, -this.width];

            for (var k = 0; k < steps; k++) {
                if (data[i] >= data.length-1){
                    return 'maze finish'
                }
                if (data[i + dx[k] + dy[k]]) {
                    if (k === 0 || k === 2){
                        if (!(data[i + dx[k] + dy[k]].left)){
                            i = i + dx[k] + dy[k];
                            k = 0;
                        }
                    }
                    if (k === 1 || k === 3){
                        if (!(data[i + dx[k] + dy[k]].top)){
                            i = i + dx[k] + dy[k];
                            k = 0;
                        }
                    }
                    waves++;

                }
            }
        console.log(waves);




    return true;

};


