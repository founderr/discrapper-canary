var r = n(927258),
    i = '__lodash_hash_undefined__',
    a = Object.prototype.hasOwnProperty;
function o(e) {
    var t = this.__data__;
    if (r.Z) {
        var n = t[e];
        return n === i ? void 0 : n;
    }
    return a.call(t, e) ? t[e] : void 0;
}
t.Z = o;
