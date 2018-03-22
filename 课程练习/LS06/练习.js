//逻辑与和逻辑或
//逻辑与，前边为true，返回后边，前边false，返回前边
//逻辑或，true,返回前边，前边false，返回后边
//&&和||两侧的操作数不是布尔类型时,直接返回钱或者后的操作数
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"Jack"});//{name:"Jack"}
console.log(null&&"hello");//null
console.log({}&&"world");//"world"
//所有对象转换为布尔类型 都为 true
//demo 17
var sum = function(a,b,c){
    if(b!=false){b = b||4}//短路原则可以赋初值
}
var obja={name:"a",
         foo:function(){
                        alert(this.name);
                       }
          };
var objb={name:"b"};
a.foo();