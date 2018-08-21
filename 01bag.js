var weight = [12, 3, 9, 22, 5];
var value = [23, 9, 14, 8, 10];
var pack = function(weight, value, maxWeight) {
    var len = weight.length;
    // totalValue是一个二维数组，totalValue[i][j]表示当背包重量是i，j个物品时候最大值
    var totalValue = [];
    // resWeight存储的是背包中最多可以装下的重量
    for (var resWeight = 0; resWeight <= maxWeight; resWeight++) {
        totalValue[resWeight] = [];
        for (var j = 0; j < len; j++) {
            if (resWeight === 0) {
                totalValue[resWeight][j] = 0;
            }
            else if (resWeight < weight[j]) {
                totalValue[resWeight][j] = totalValue[resWeight][j - 1] || 0;
            }
            else {
                totalValue[resWeight][j] = Math.max(totalValue[resWeight - weight[j]][j - 1] || 0 + value[j], totalValue[resWeight][j - 1] || 0);
            }
        }
    }
    return totalValue;
};
console.log(pack(weight, value, 27));
