function max(a,b){
    return a>b?a:b;
}
max(2,3);
var max = function(a,b){

}
var max = new Function('a','b','return a>b?a:b');
max(2,3)
//this
//函数嵌套情况下，里层函数的this指向window
function test2(){
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();
//对象方法的调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
}
obj.test();
var sayHi = function(){
    console.log("Hi,i m",this.name);
};
obj.sayHi = sayHi;
obj.sayHi();
//间接调用
var fish = {
    name:"fish",
    swim:function(m,n){
        console.log("i m"+this.name+"i can swim",m,n)
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);
fish.swim.call(me,3,4);
fish.fly.call(me,7,8)
function test() {
    console.log(arguments);//是个对象
    console.log(test.arguments==arguments,arguments);//false 
     console.log(arguments.length); 0
	 console.log(typeof arguments);  object
	 console.log(arguments instanceof Array); f
	 console.log(arguments instanceof Object); t
    console.log(Array.prototype.slice.call(arguments));[]
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}  总的来说，arguments就是参数的一个类数组对象。
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
  console.trace值追踪。