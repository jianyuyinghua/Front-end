var str='abcodeofgohiogk';
var index=str.indexOf('o')
var num=0
while (index!==-1) {
  console.log(index);
  num++;
  index=str.indexOf('o',index+1)
}
console.log(num);

// 课后作业
var arr=['red','blue','red','green','pink','red']
var index1=arr.indexOf('red');
var num1=0;
while (index1!==-1) {
  console.log(index1);
  num1++;
  index1=arr.indexOf('red',index1+1)
}
console.log(num1);