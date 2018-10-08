var arr = [
    [1,3,4,24],
    [21,56,78,99],
    [9,6,3,21]
];
console.log(arr);
function printArr(arr) {
    var rowLen = arr.length, colLen = arr[0].length;
    for (var i = 0; i <= rowLen + colLen - 2; i++) {
        var start = 0;
        while(start <= i) {
            if (start < rowLen && i - start < colLen) {
                console.log(arr[start][i - start])
            }
            start++;
        }
    }
}
printArr(arr);
// 期望输出结果：
// 1 3 21 4 56 9 24 78 6 99 3 21