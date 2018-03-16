//未定义直接使用a会报错
function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined


//null 需要注意的一点
console.log(typeof null);//是object
