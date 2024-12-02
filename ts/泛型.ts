// 泛型函数，即调用时再指定参数类型
function printData<T, U>(data1: T, data2: U): T | U {
    let data = Date.now() % 2 === 1 ? data1 : data2
    console.log(data)
    return data
}
printData<number, boolean>(90, true)
printData<string, boolean>('bad', false)

// 泛型类
class Man<T> {
    constructor(
        public name: string,
        private info: T
    ){}
}
let m1 = new Man<string>("Bob", "kind")
let m2 = new Man<number>("Mike", 45)

// 泛型接口
interface IMessage<T, U> {
    info1: T;
    info2: U
}
let res1: IMessage<Man<number>, boolean> = {
    info1: m2,
    info2: true
}
console.log(res1)
