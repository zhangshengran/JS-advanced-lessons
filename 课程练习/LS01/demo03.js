var str_a="a";
var str_b=str_a;
str_b="b";
console.log(str_a,str_b)
//原始数据类型是值赋值，不是引用
var obj_a={v:"a"};//obj_a是引用，引用堆区的对象
var obj_b=obj_a;//obj_b是引用,指向的也是{v:“a”}
obj_b.v="b";// 通过obj_b访问(修改)堆内存的变量,这时候堆内存中对象值为:{v:"b"},由于obj_a和obj_b引用的是堆内存中同一个对象值，重要理解
console.log(obj_a,obj_b);

obj_b={v:"c"};
//此时开辟的是一个新对象，另外开辟了空间。而obj_a中的v依旧是b


//注意：是值赋值还是引用赋值取决于变量的类型，而不取决于变量分配在堆区还是栈区
var obj_c = {x1:2,y1:3};//x1存在栈区
var obj_d = {x2:2,y2:3};
// obj_c不等于obj_d，而obj_c.x1等于obj_d.x2
console.log(obj_c.x1 === obj_d.x2);//true
console.log(obj_c === obj_d);//false

console.log({m:1}==={m:1});//false
//经典案例
//
var a =123;
function foo1(x){
	x = 345;
}
foo1(a);
console.log(a);//123

//
var a ={y:123};
function foo2(x){
	x.y = 345;
}
foo2(a);

console.log(a.y);//345

//
var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);//345

//
var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);//456
