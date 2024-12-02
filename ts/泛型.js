// 泛型函数，即调用时再指定参数类型
function printData(data1, data2) {
    var data = Date.now() % 2 === 1 ? data1 : data2;
    console.log(data);
    return data;
}
printData(90, true);
printData('bad', false);
// 泛型类
var Man = /** @class */ (function () {
    function Man(name, info) {
        this.name = name;
        this.info = info;
    }
    return Man;
}());
var m1 = new Man("Bob", "kind");
var m2 = new Man("Mike", 45);
var res1 = {
    info1: m2,
    info2: true
};
console.log(res1);
