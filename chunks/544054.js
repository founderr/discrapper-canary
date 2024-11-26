var a = r(524556),
    n = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    var t = this.__data__;
    if (a) {
        var r = t[e];
        return '__lodash_hash_undefined__' === r ? void 0 : r;
    }
    return n.call(t, e) ? t[e] : void 0;
};
