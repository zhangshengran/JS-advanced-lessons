//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();// Jack
//使用IIFE来解决上述问题
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());