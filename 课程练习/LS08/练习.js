function foo(){}
console.log(foo); //foo()
console.log(typeof foo); //fun
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true
console.log(typeof Function);//fun
console.log(typeof Array);	 //fun
console.log(typeof Date);	 //fun
console.log(typeof Error); 	 //fun
console.log(typeof Math);	 //obj
console.log(typeof JSON);	 //obj
console.log(typeof new Function());// function 
console.log(typeof new Array());	 //  object
console.log(typeof new Date());	 //  object
arguments是symbol类型的
arguments是个类数组对象，实参数组，函数对象属性之length 形参个数
/函数对象属性之caller 获取调用当前函数的函数。
function test() {
    if (test.caller == window) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
      
    }
}
1 ：caller 返回一个调用当前函数的引用 如果是由顶层调用的话 则返回null

（举个栗子哈 caller给你打电话的人  谁给你打电话了 谁调用了你 很显然是下面a函数的执行 只有在打电话的时候你才能知道打电话的人是谁 所以对于函数来说 只有caller在函数执行的时候才存在）

      var callerTest = function() {

           console.log(callerTest.caller) ;  

     } ;

      function a() {

           callerTest() ;   

     }

     a() ;//输出function a() {callerTest();}

     callerTest() ;//输出null 
     callee是arguments对象的一个成员 表示对函数对象本身的引用 
     var c = function(x,y) {

        console.log(arguments.length,arguments.callee.length,arguments.callee)

 } ;



c(1,2,3) ;//输出3 2 function(x,y) {console.log(arguments.length,arguments.callee.length,arguments.callee)} 
https://www.cnblogs.com/Zwq286179/p/6042364.html
//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true
//其他相关的属性
//函数对象属性之 constructor 获取创建某个对象的构造函数。可以用来判断对象是哪一类
要分清call，caller,callee
高阶函数
函数是可以做为参数传递给另一个函数的
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});