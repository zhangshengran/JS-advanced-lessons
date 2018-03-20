var a = [1,2,3];
var b =a;
console.log(a,b);
b.pop();
    console.log(a,b)
    b = [4,5,6];
    console.log(a,b);


    function foo(x){
        x.push(4);
        x =[5,6,7];
        x.push(8);
    }
    var a= [1,2,3];
    foo(a);
    console.log(a);

    function foo(x){
        x.push(4);
        x.length =0;
        x.push(5,6,7,8);

    }
    var obj = {x:1,y:2};
    var arr =[1,2,3,4,5];
    var o ={x:4,y:2}
    a>b;
    var max=function(x,y){
        return x>y?x:y;
    }
    {
        foo:max(2,3)
    }
    var max = function (x,y) {
        return x>y?x:y;
    };
    {
        console.log(123);
        console.log(456);
        foo:max(2,3)
    }
    23;
    obj = {x:2};
    arr = [1,2]
    var foo = function(){
        console.log("foo");

    };
    obj.x;
    foo();
    2+3;
    2>3;
    1&&2;

    2>3;
    var a = 2;
    var b = 3;
    if(a>b){
        console.log("a>b");

    }else(
        console.log("a<b");
    )
    function foo(){
        var a=b=3;
    }
    foo();
    console.log(b);
    console.log(a);
    for(var i = 0;i<5;i++){
        console.log("in for",i);
    }
    //Es5没有快作用域
    {
        var a = 20;
        console.log("大括号外还能访问a");
        for(var i=0;i<5;i++)
            
    }
    if(false){
        var b = 30;
        }
        console.log(b);

        //使用严格模式
        'use strict'
        function foo()
        {
            "use strict"
        }
        function sloppyFunc(){
            sloppyVar = 123;
        }
        sloppyFunc();
        console.log(sloppyVar);
        function sloppyFunc(){
            sloppyVar = 123;
        }
        sloppyFunc();
        console.log(sloppyVar);
        "use strict"
        function isStrictMode(){
            return this===window?false:true
        }、、