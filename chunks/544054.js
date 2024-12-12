var i = r(524556),
    a = '__lodash_hash_undefined__',
    s = Object.prototype.hasOwnProperty;
function o(e) {
    var n = this.__data__;
    if (i) {
        var r = n[e];
        return r === a ? void 0 : r;
    }
    return s.call(n, e) ? n[e] : void 0;
}
e.exports = o;
