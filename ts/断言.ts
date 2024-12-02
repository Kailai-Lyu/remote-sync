let a: unknown = 33

let x: string

// unknown赋值给固定类型时需要进行断言，断言不会进行类型转换
// x = <string>a
x = a as string

console.log(typeof x)


if(typeof x === "string"){
    console.log(x.toUpperCase)
} else{
    // never是ts推导出的，或用于表示函数无法执行完毕
    console.log(x)
}