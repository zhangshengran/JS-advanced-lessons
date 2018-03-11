console.log(typeof(123))//number    
console.log(typeof("abc"))//string
console.log(typeof(true))//布尔
console.log(typeof(null))//object
console.log(typeof(undefined))//undeifned
console.log(typeof({name:"123",age:20}))//object
console.log(typeof function foo (){})//function
var a={name:"123",age:11}
console.log(a instanceof Object)//类型的名字首字母要大写
var b=["abc",123,"",{}]//左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true
b instanceof Array;


