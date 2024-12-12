var i = r(927258),
    a = '__lodash_hash_undefined__',
    s = Object.prototype.hasOwnProperty;
function o(e) {
    var n = this.__data__;
    if (i.Z) {
        var r = n[e];
        return r === a ? void 0 : r;
    }
    return s.call(n, e) ? n[e] : void 0;
}
n.Z = o;
