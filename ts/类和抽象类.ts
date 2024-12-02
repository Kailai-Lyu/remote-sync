// 属性声明的完整形式
class PackageA {
    private weight: number
    public unitPrice: number
    constructor(weight: number, unitPrice: number) {
        this.weight = weight
        this.unitPrice = unitPrice
    }
}

// 属性声明的简写形式
class PackageB {
    constructor(private weight: number, public unitPrice: number) {}
}


// 抽象类不能被实例化，只能被具体类继承
abstract class Package {
    // 需要被继承的属性不能设为private
    constructor(protected name: string, protected weight: number) {}
    public abstract calculate(): number
    // 抽象类中也可以有具体实现
    printName(){
        console.log(this.name)
    }
}

// 具体类继承抽象类（一个类只能继承一个抽象类）
class StandardPackage extends Package {
    // 类属性的简写方法可以混用
    constructor(name: string, weight: number, private unitPrice: number){
        super(name, weight)
    }
    // 具体类中必须实现抽象属性和抽象方法
    calculate(): number {
        return this.weight * this.unitPrice
    }
}

let p1 = new StandardPackage("haha", 20, 5)
p1.printName()
console.log(p1.calculate())




