let arr1: string[]
let arr2: Array<number>  //泛型写法

arr1 = ["a", "b"]
arr2 = [1, 2]


let tuple1: [number, string]
let tuple2: [number, boolean?]  // 可选元素，必须放在必选元素之后
let tuple3: [number, ...string[]]  // 任意数量


tuple1 = [1, "a"]
tuple2 = [2]
tuple3 = [3, "car", "man"]

console.log(tuple2.length)