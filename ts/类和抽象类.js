var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 属性声明的完整形式
var PackageA = /** @class */ (function () {
    function PackageA(weight, unitPrice) {
        this.weight = weight;
        this.unitPrice = unitPrice;
    }
    return PackageA;
}());
// 属性声明的简写形式
var PackageB = /** @class */ (function () {
    function PackageB(weight, unitPrice) {
        this.weight = weight;
        this.unitPrice = unitPrice;
    }
    return PackageB;
}());
// 抽象类不能被实例化，只能被具体类继承
var Package = /** @class */ (function () {
    // 需要被继承的属性不能设为private
    function Package(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    // 抽象类中也可以有具体实现
    Package.prototype.printName = function () {
        console.log(this.name);
    };
    return Package;
}());
// 具体类继承抽象类
var StandardPackage = /** @class */ (function (_super) {
    __extends(StandardPackage, _super);
    function StandardPackage(name, weight, unitPrice) {
        var _this = _super.call(this, name, weight) || this;
        _this.unitPrice = unitPrice;
        return _this;
    }
    // 具体类中必须实现抽象属性和抽象方法
    StandardPackage.prototype.calculate = function () {
        return this.weight * this.unitPrice;
    };
    return StandardPackage;
}(Package));
var p1 = new StandardPackage("haha", 20, 5);
p1.printName();
console.log(p1.calculate());
console.log(p1.name);
