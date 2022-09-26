// 把简单数据类型包装成复杂的数据类型
var str='andy';
console.log(str.length);
// 对象  复杂数据类型 才有属性和方法

// 1.包装
var temp=new String('andy');
// 2.赋值
var str=temp;
// 3.销毁
temp=null;