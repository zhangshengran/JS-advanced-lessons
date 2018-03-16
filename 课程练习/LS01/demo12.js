//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//boolean
console.log(typeof (a==b),a==b);//boolean
console.log(typeof (a<b),a<b);//boolean
//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";//转换为字符串
var d = "23" - 5;//转换成Number
console.log(c,d);
var f = !!34;//false
var g = !!{};//false
console.log(e,f,g);//true// Part2222222
 显式类型转换
Boolean();
Number();
String();
Object();


parseInt();
parseFloat();

toString();//调用的方法必须是boolean
valueOf();//获得原始值

