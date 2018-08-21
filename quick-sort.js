var arr = [21, 1, 33, 2, 4243, 2, 1, 3112, 78];
var sort = function(arr, start, end) {
    var middle = Math.ceil((start + end) / 2);
    if (start < end) {
        sort(arr, start, middle);
        sort(arr, middle + 1, end);
    }
    var left = start;
    var right = end;
    for(var i = start; i < end - start; i++) {
        
    }
};