window.onload = function () {
    var core = new Core();
    core.createMaze();
    var generateButton = document.getElementById('generate');

    generateButton.onclick = function () {
        var height = document.getElementById('height');
        var width = document.getElementById('width');
        height = parseInt(height.value);
        width = parseInt(width.value);
        core = new Core(height, width);
        core.createMaze();
    };

};
