let a: Object
a = 1
a = "s"
a = []
// object接受引用数据类型，Object接受除null和undefined以外的数据类型

let person: {
    name: string;
    age?: number;  // 可选属性
    [key: string]: any  // 索引签名
}

person = {name: "mike", city: "Beijing"}
console.log(person)