//转义字符 \n \" \' \\
//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
str.split("_");//以_为准分割数组
str.split("_",2);////以_为准分割数组并取前俩个
str.concat("_opq");//后边添加_opq
str.substr(4,7);//stringObject.substr(start,length)
str.substring(4,7);//substring()
// 方法用于提取字符串中介于两个指定下标之间的字符。
//stringObject.substring(start,stop)包括 start 处的字符，但不包括 stop 处的字符。
str.slice(2);//slice(start,end)包含start不包含end
str.slice(2,5);
str.slice(-2);//负数代表从后往前
str.slice(2,-2);