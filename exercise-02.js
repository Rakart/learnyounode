var arr = process.argv;
var res = 0;
for (var i=2; i<arr.length; i++){
    res += Number(arr[i]);
}
console.log(res);