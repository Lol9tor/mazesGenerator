function Cell () {
    this.top = randomBool();
    this.left = randomBool();
    this.type = 0; // 0 - usual, 1 - startPoint, 2 - endPoint, 3 - path
}

function Core (height, width) {
    this.data = [];
    this.width = width || 11;
    this.height = height || 11;
    this.drawer = new Drawer();
}

Core.prototype.createMaze = function  () {
    var mazeIsSolvable = false;
    var from = {x: 0, y: 0},
        to = {x: this.width-1, y: this.height-1};
    while (!mazeIsSolvable) {
        var wallsData = this.generate();
        var pathData = this.buildPath(wallsData, from, to);
        mazeIsSolvable = pathData.status;
    }
    wallsData = this.getBestPath(pathData.data, wallsData);
    this.drawer.drawAll(wallsData);
};

Core.prototype.buildPath = function (wallsData, from, to) {
    var fromToPath = this.compareCells(wallsData, from, to);
    var toFromPath = this.compareCells(wallsData, to, from);
    var status = false;
    if (fromToPath[to.x][to.y] !== 0){
        status = true;
    }
    for (var i = 0; i < fromToPath.length; i++) {
        for (var j = 0; j < toFromPath.length; j++) {
            toFromPath[i][j] += fromToPath[i][j];
        }
    }
    return {data : toFromPath, status: status}
};

Core.prototype.getBestPath = function (pathData, wallsData) {
    for (var i =0; i < pathData.length; i++){
        var lastElem = pathData[pathData.length-1][pathData[i].length-1];
        for (var j = 0; j<pathData[i].length; j++){
            if(pathData[i][j] == lastElem){
                wallsData[i][j].type = 3;
            }
        }
    }
    return wallsData;
};

function randomBool () {
    return Math.random() > 0.5;
}
Core.prototype.checkCell = function  (i, j, arr) {
    return !(i<0 || j< 0 || i>=arr.length || j>=arr[0].length) && arr[i][j]==0;
};

Core.prototype.compareCells = function (data, from, to) {
    var x = from.x,
        y = from.y,
        arr = [],
        waves = 1;

    for (var i = 0; i < this.height; i++){
        arr[i] = [];
        for (var j = 0; j < this.width; j++){
            arr[i][j] = 0;
        }
    }
    i = 0;
    j = 0;
    arr[x][y] = waves;
    var somethingChanged = false;
    do {
        somethingChanged = false;
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == waves) {
                    if (this.checkCell(i, j-1, arr) && !(data[i][j].top)){ // step up
                        arr[i][j-1] = waves+1;
                        somethingChanged = true;
                    }
                    if (this.checkCell(i+1, j, arr) && !(data[i+1][j].left)){ // step right
                        arr[i+1][j] = waves+1;
                        somethingChanged = true;
                    }
                    if (this.checkCell(i, j+1, arr) && !(data[i][j+1].top)){ // step down
                        arr[i][j+1] = waves+1;
                        somethingChanged = true;
                    }
                    if (this.checkCell(i-1, j, arr) && !(data[i][j].left)) { // step left
                        arr[i - 1][j] = waves + 1;
                        somethingChanged = true;
                    }
                }
            }
        }
        waves++;
    } while (somethingChanged && arr[to.x][to.y] == 0);// last element
    return arr;
};

Core.prototype.generate = function () {
   var self = this;

   for (var i=0; i<this.width; i++){
       self.data[i] = [];
       for (var j=0; j<this.height; j++){
            self.data[i][j] = new Cell();
       }
   }
    return this.data;
};
