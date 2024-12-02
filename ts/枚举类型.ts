enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction)

function move(dir: Direction): void{
    if(dir===Direction.Up) {
        console.log("向上走")
    } else if(dir===Direction.Down) {
        console.log("向下走")
    } else if(dir===Direction.Left) {
        console.log("向左走")
    } else if(dir===Direction.Right) {
        console.log("向右走")
    }
}

move(Direction.Down)


// 常量枚举在编译时会被内联，减少代码量
const enum Car {
    Benz,
    Xiaomi
}
