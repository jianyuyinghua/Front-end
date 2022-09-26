function Person(name) {
  this.name = name;
}

function f1(x) {
  console.log(x.name);  //崔帆
  x.name='李嘉敏';
  console.log(x.name);  //李嘉敏
}
var p=new Person('崔帆');
console.log(p.name);  //崔帆
f1(p);
console.log(p.name);  //李嘉敏