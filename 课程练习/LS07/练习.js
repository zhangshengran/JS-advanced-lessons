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