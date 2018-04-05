js中只有俩种作用域，函数作用域和全局作用域，这也就是说除了函数的{}相当于块作用域。
词法作用域
var name = "jack"
function echo(){
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();// Jack
/全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    //var x = "inside f1";//如果没有这行，则两次输出都为outside
    console.log(x);
};
f1();
console.log(x);

注意，这种的话，f2会提升，而funtion不会提升！
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
