// 归并排序先不断切割划分，然后两两合并
var arr = [21,1,33,2,4243,2,1,3112,78];
var sort = function(arr, start, end) {
    var middle = Math.floor((start + end) / 2);
    if (start < end) {
        sort(arr, start, middle);
        sort(arr, middle + 1, end);
        merge(arr, start, middle, end);
    }
    return arr;
};
var merge = function(arr, start, middle, end) {
    var tempArr = new Array(end - start + 1);
    var left = start;
    var right = middle + 1;
    var k = 0;
    while (left <= middle && right <= end) {
        if (arr[left] <= arr[right]) {
            tempArr[k] = arr[left];
            left++;
            k++;
        }
        else {
            tempArr[k] = arr[right];
            right++;
            k++;
        }
    }
    // 此处有可能其中一个比另外一个长，所以就把剩下的拼接上去
    while(left <= middle) {
        tempArr[k] = arr[left];
        k++;
        left++;
    }
    while(right <= end) {
        tempArr[k] = arr[right];
        k++;
        right++;
    }
    // 拼接完成的新数组tempArr放回原处，保证start -> end这一小段是有序的
    for (var j = 0; j < tempArr.length; j++) {
        arr[start + j] = tempArr[j];
    }
    return arr;
};
console.log(sort(arr, 0, arr.length - 1));