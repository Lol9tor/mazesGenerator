
function Drawer () {


}

Drawer.prototype.drawAll = function (data) {
    var canvas = document.getElementById('cnv'),
        x1 = 0,
        stepX = 64,
        y1 = 0,
        stepY = 48,
        w = 11,
        h = 11;
    canvas.width = 640;
    canvas.height = 480;
    canvas.style.border = '1px solid';
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    for (var i =0; i<data.length; i++){

        var x = i%w;
        var y = Math.floor(i/h);
        var xG = x*stepX;
        var yG = y*stepY;
        console.log(xG);
        console.log(yG);
        ctx.beginPath();
        ctx.moveTo(xG, yG);
        ctx.lineTo(stepX+xG, stepY+yG);
        ctx.stroke();

    }

};
