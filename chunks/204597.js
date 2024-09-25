var r = n(352644),
    i = '__lodash_hash_undefined__',
    a = Object.prototype.hasOwnProperty;
function o(e) {
    var t = this.__data__;
    if (r) {
        var n = t[e];
        return n === i ? void 0 : n;
    }
    return a.call(t, e) ? t[e] : void 0;
}
e.exports = o;
