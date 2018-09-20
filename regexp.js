function rep (num) {
    let reg = /^(\d)(?=\d{3})+\./g;
    num.toString.replace(reg, function($1, $2){
        return $1 + '.';
    });
}
Function.prototype.clone = function() {
    var that = this;
    var temp = function temporary() { return that.apply(this, arguments); };
    for(var key in this) {
        if (this.hasOwnProperty(key)) {
            temp[key] = this[key];
        }
    }
    return temp;
};
