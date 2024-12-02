// 定义类结构(接口里的属性和方法只能是公开的；一个类可以实现多个接口)
interface IPerson {
    name: string
    age: number
    gender?: string
    speak():void
}
class Person implements IPerson {
    constructor(public name:string, public age: number){}
    speak(): void {
        console.log(this.name+"的年龄是"+this.age)
    }
}

// 定义对象结构
let xm: IPerson = {
    name: "xiaoming",
    age: 18,
    speak(){
        console.log("haha")
    }
}

// 定义函数结构
interface ICount {
    (a:number, b:number): number
}
const count: ICount = function(x: number, y:number){
    return x + y
}

// 接口之间的继承
interface IMan {
    name: string
    age: number
    gender: string
}
interface IBoss extends IMan {
    company: string
} 
class Boss implements IBoss {
    constructor(
        public name:string, 
        public age: number,
        public gender: string,
        public company: string
    ){}
}

// 接口的自动合并（可重复定义性）
interface IStudent {
    name: string
    age: number
    gender?: string
}
interface IStudent {
    school: string
} 
let xh: IStudent = {
    name: "xiaohong",
    age: 18,
    school: "pku"
}