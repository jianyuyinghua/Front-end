// 1.replace() 替换替换
var str = 'andyandy';
console.log(str.replace('a', 'b'));


var str1 = 'abcodeofgohiogk';
while (str1.indexOf('o') !== -1) {
  str1 = str1.replace('o', '*')
}
console.log(str1);

// 2.split（'分隔符’） 字符转换为数组
// join  数组转换为字符串
var str1 = 'red,pink,green'
console.log(str1.split(','));


var str2 = 'red&pink&green'
console.log(str2.split('&'));
