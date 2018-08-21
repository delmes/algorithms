var graph = [
    [0, 7, 9, Infinity, Infinity, 14 ],
    [7, 0, 10, 15, Infinity, Infinity],
    [9, 10, 0, 11, Infinity, 2],
    [Infinity, 15, 11, 0, 6, Infinity],
    [Infinity, Infinity, Infinity, 6, 0, 9],
    [14, Infinity, 2, Infinity, 9, 0]
];
var dijkstra = function(arr) {
    var shortest = arr[0];
    var visited = new Array(arr.length).fill(false);
    visited[0] = true;
    for (var i = 1, len = arr.length; i < len; i++) {
        var min = Infinity;
        var minTag = -1;
        // 循环遍历找出到达j的最短距离，当做下一段起点
        for (var j = 1; j < len; j++) {
            if (!visited[j] && shortest[j] < min) {
                min = shortest[j];
                minTag = j;
            }
        }
        // 标记找到的点
        visited[minTag] = true;
        for (var k = 0; k < len; k++) {
            // 遍历找到从新起点到所有下一个重点最短距离
            if (arr[minTag][k] < Infinity && shortest[k] > shortest[minTag] + arr[minTag][k]) {
                shortest[k] = shortest[minTag] + arr[minTag][k];
            }
        }
    }
    return shortest;
}
console.log(dijkstra(graph));