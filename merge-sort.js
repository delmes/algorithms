var arr = [21,1,33,2,42343,2,1,3112,78];
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
    
    for (var j = 0; j < tempArr.length; j++) {
        arr[start + j] = tempArr[j];
    }
    return arr;
};
console.log(sort(arr, 0, arr.length - 1));