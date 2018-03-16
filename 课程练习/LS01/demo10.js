//包装对象
var a=123;
var b= new Number(a);//将a 包装成了一个对象
console.log(a === b);// false 
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length=1;
console.log(str.length,str)//5 "abcde" 临时包装对象并不影响原始值
//临时包装对象
var arr=[1,2,3,4]
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1