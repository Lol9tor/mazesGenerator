window.onload = function () {
    var options = { // default config
        height: 11,
        width: 11
    };
    var validate = function (value) {
        if (!(value && value>0 && value<50)){
            value = 11;
        }
        return value;
    };
    var core = new Core(options);
    core.createMaze();
    var generateButton = document.getElementById('generate');
    generateButton.onclick = function () {
        var height = document.getElementById('height');
        var width = document.getElementById('width');
        height = parseInt(height.value);
        width = parseInt(width.value);
        options = {
            height: validate(height),
            width: validate(width)
        };
        core = new Core(options);
        core.createMaze();
    };
};
