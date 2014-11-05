function Cell () {
    this.top = randomBool();
    this.left = randomBool();
    this.type = 0; // 0 - usual, 1 - startPoint, 2 - endPoint, 3 - path
}

function Core () {
    this.data = [];
    this.width = 11;
    this.height = 11;
    this.drawer = new Drawer();
    this.createMaze = function () {
        if (!this.compareCells(this.generate())){
            this.createMaze();
        }
    };
}



function randomBool () {
    return Math.random() > 0.5;
}
Core.prototype.checkCell = function  (i, j, arr) {
    return !(i<0 || j< 0 || i>=arr.length || j>=arr[0].length) && arr[i][j]==0;
};

Core.prototype.compareCells = function (data) {
    var x = 0,
        y = 0,
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
    var stop = false;
    var somethingChanged = false;
    //var iters = 30;
    do {
        somethingChanged = false;
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == waves) {
                    if (this.checkCell(i, j-1, arr) /*&& arr[i][j-1] === 0 */&& !(data[i][j].top)){ // step up
                        arr[i][j-1] = waves+1;
                        somethingChanged = true;
                    }
                    if (this.checkCell(i+1, j, arr) /*&& arr[i+1][j] === 0*/&& !(data[i+1][j].left)){ // step right
                        arr[i+1][j] = waves+1;
                        somethingChanged = true;
                    }
                    if (this.checkCell(i, j+1, arr) /*&& arr[i][j+1] === 0*/&& !(data[i][j+1].top)){ // step down
                        arr[i][j+1] = waves+1;
                        somethingChanged = true;
                    }
                    if (this.checkCell(i-1, j, arr) /*&& arr[i-1][j] === 0*/&& !(data[i][j].left)) { // step left
                        arr[i - 1][j] = waves + 1;
                        somethingChanged = true;
                    }
                }
            }
        }
        waves++;
        //iters--;
    } while (somethingChanged && arr[arr.length-1][arr.length-1]==0);// last element
    if (arr[arr.length-1][arr.length-1]==0) {
        return false;
    }
    this.drawer.drawAll(arr, data);
    return true;
};

Core.prototype.generate = function () {
   var self = this;

   for (var i=0; i<11; i++){
       self.data[i] = [];
       for (var j=0; j<11; j++){
            self.data[i][j] = new Cell();
       }
   }
    return this.data;
};
