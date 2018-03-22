console.log(++x); //2 注意++和--的隐式类型转换
//下例中有几个是false？（A:0个, B:1个, C:2个, D:3个），运行一下看看
console.log(3===3);//t
console.log(3==="3");//f
console.log(3=="3");//t
console.log(3==new String(3));//t
console.log(3===new String(3));//f

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//f
console.log(obj1 == obj2);//f
console.log(obj1 === obj2);//f
console.log(obj1 == new String("xyz"));//ff

var obj1 = new String("xyz");//
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//f
console.log(obj1 !== obj2);//t
console.log(obj1 != obj2);//t
console.log(obj1 != new String("xyz"));//t


console.log(2 == 2);//t
console.log(new Number(2) == new Number(2));//f
console.log(2 == new Number(2));//转换到基本类型，t
