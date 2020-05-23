let n = 0
let list = [0, 1, 2, 3]
let str = Custom.numArrayToString(list, Delimiters.Space)
basic.showString("" + (str.split(" ")[2]))
console.log(list);
console.log(str);
console.log(str.split(" "));
