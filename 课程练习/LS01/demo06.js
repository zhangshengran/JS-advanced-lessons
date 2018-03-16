var a1=20;
var a2=23.4;
console.log(parseInt(a2));//非数字的话，会先转化成字符串，然后转化成数字
console.log(parseFloat('23.456xy'))//和直接传入一个变量一样
//parseInt和parseFloat都是window中的方法
console.log(Math.ceil(a2))//24
console.log(Math.floor(a2))//23
console.log(Math.round(a2))//23
a3=5e2;//指数形式
console.log(typeof Math);//输出对象
var x = Number("xis021");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true
typeof NaN;//Number
Math.log(x)//ln(x)
Math.acos(x)//返回一个数的反余弦值（单位为弧度）
isFinite()//检测有限数。有限返回true