function foo(){
    var n=10;
    var m=true;
    var str="Hello World";//str为基础类型，存在栈中
    var obj={value:"Hello World"};
    //obj是对象的引用，存在栈中，其所指的对象存在堆区中
}