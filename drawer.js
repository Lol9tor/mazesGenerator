
function Drawer () {

}

Drawer.prototype.drawAll = function (data) {
    var canvas = document.getElementById('cnv'),
        stepX = 64,
        stepY = 48,
        xG, yG,
        centrCellX = 27,
        centrCellY = 19;

    canvas.width = 704;
    canvas.height = 528;
    //canvas.style.border = '1px solid';

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.font = '20px Georgia';

    for (var i =0; i<data.length; i++){

        for (var j=0; j<data[i].length; j++) {
            xG = i*stepX;
            yG = j*stepY;
            ctx.beginPath();
            if (data[i][j].left) {
                ctx.moveTo(xG, yG);
                ctx.lineTo(xG, stepY + yG);
            }
            if (data[i][j].top) {
                ctx.moveTo(xG, yG);
                ctx.lineTo(stepX + xG, yG);
            }
            ctx.stroke();
            if (data[i][j].type === 3){
                ctx.fillRect(xG+centrCellX, yG+centrCellY, 10, 10)
            }
        }
    }
/*    i = 0;
    j = 0;
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            ctx.fillText(arr[i][j], i * stepX + halfStepX, j * stepY + halfStepY);
        }
    }*/
};



