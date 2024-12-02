var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
function move(dir) {
    if (dir === Direction.Up) {
        console.log("向上走");
    }
    else if (dir === Direction.Down) {
        console.log("向下走");
    }
    else if (dir === Direction.Left) {
        console.log("向左走");
    }
    else if (dir === Direction.Right) {
        console.log("向右走");
    }
}
move(Direction.Down);
