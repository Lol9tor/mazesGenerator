
function Drawer () {


}

Drawer.prototype.drawAll = function (data) {
    var canvas = document.getElementById('cnv'),
        x1 = 0,
        stepX = 64,
        y1 = 0,
        stepY = 48;
    canvas.width = 640;
    canvas.height = 480;
    canvas.style.border = '1px solid';
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    console.log(data.length);
   for (var i =0; i<data.length; i++){
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(stepX, stepY);
        ctx.stroke();
        x1 += stepX;
        y1 += stepY;
    }

};
