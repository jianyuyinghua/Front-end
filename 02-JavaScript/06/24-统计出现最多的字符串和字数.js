var a = {
  age: 18
}
if (a['age']) {
  console.log('里面有该属性');
} else {
  console.log('无该属性');
}



var str='abcodeofgohiogkk';
var o ={};
for (var i=0;i<str.length;i++) {
  var chars=str.charAt(i);
  if (o[chars]) {
   o[chars]++;
  } else {
    o[chars]=1
  }
}
console.log(o);

// 2.遍历对象
var max=0;
for (var k in o) {
  //k 属性名
  //o[k] 属性值
  if (o[k]>max) {
    max=o[k];
  }
  ch=k;
}
console.log(max);
console.log(ch);
