var cb = function () {
    console.log(123);
}
// 防抖函数，短时间不断触发，只有最后一次触发生效
function debounce(cb, wait) {
    var timer = null;
    return function() {
        var that = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function() {
            cb.apply(that, args);
        }, wait);
    };
}
setInterval(debounce(cb, 500), 1000);


// 规定时间内，只触发一次，时间很重要，触发完成之后下次触发才生效
function throttle(cb, wait) {
    var pre = null;
    return function() {
        var that = this;
        var args = arguments;
        if (new Date() - pre > wait || pre === null) {
            pre = new Date();
            cb(args);
        }
    }; 
}

setInterval(debounce(cb, 1000), 10);