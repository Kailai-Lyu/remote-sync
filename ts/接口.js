var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log(this.name + "的年龄是" + this.age);
    };
    return Person;
}());
// 定义对象结构
var xm = {
    name: "xiaoming",
    age: 18,
    speak: function () {
        console.log("haha");
    }
};
var count = function (x, y) {
    return x + y;
};
var Boss = /** @class */ (function () {
    function Boss(name, age, gender, company) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
    }
    return Boss;
}());
var xh = {
    name: "xiaohong",
    age: 18,
    school: "pku"
};
