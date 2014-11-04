function Cell () {
    this.top = randomBool();
    this.left = randomBool();
    this.stalemate = false;
}

function Core () {
    this.data = [];
    this.drawer = new Drawer();
}

function randomBool () {
    return Math.random() > 0.5;
}

Core.prototype.generate = function () {
   var self = this;

   for (var i=0; i<11; i++){
       for (var j=0; j<11; j++){
            self.data.push(new Cell());
       }
   }

/*    for (i = 0; i < self.data.length;  i++){
        if (self.data[i] && self.data[i+11]){
            if (self.data[i].left+self.data[i].top+self.data[i+1].left+self.data[i+11].top >= 3){
                self.data[i].stalemate = true;
            }
        }
    }*/

    console.log(self.data);

   self.drawer.drawAll(this.data)


};
