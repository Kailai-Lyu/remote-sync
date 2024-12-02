// 父类
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log(this.name + "的年龄是" + this.age)
    }
}

let p1 = new Person("mike",18)
p1.say()

// 子类继承父类
class Woman extends Person {
    constructor(name, age, husband){
        super(name, age)
        this.husband = husband
    }

    // 子类覆写父类的方法从而产生多态
    say(){
        console.log(this.name + "的丈夫是" + this.husband)
    }
}

let w1 = new Woman("marry",18, null)
w1.say()

console.log(Woman.prototype===w1.__proto__)

// 方法定义在原型对象上
console.log(w1.__proto__.constructor)
w1.__proto__.say()

console.log(w1.__proto__.__proto__.constructor)
w1.__proto__.__proto__.say()

