var w = [1,4,9,16,25]
var x = w.map(Math.sqrt);
var y = w.map((val)=> val * 2);
// var z = w.map((val)=> val!==9);
// console.log(x);
// console.log(y);
console.log([...y]);