function Cell () {
    this.top = randomBool();
    this.left = randomBool();
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

   console.log(self.data);
   self.drawer.drawAll(this.data);
};