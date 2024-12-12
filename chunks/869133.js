var i = r(257693),
    a = r(957578).Buffer,
    s = r(875115);
function o(e) {
    var n = e._cipher.encryptBlockRaw(e._prev);
    return s(e._prev), n;
}
var l = 16;
n.encrypt = function (e, n) {
    var r = Math.ceil(n.length / l),
        s = e._cache.length;
    e._cache = a.concat([e._cache, a.allocUnsafe(r * l)]);
    for (var u = 0; u < r; u++) {
        var c = o(e),
            d = s + u * l;
        e._cache.writeUInt32BE(c[0], d + 0), e._cache.writeUInt32BE(c[1], d + 4), e._cache.writeUInt32BE(c[2], d + 8), e._cache.writeUInt32BE(c[3], d + 12);
    }
    var f = e._cache.slice(0, n.length);
    return (e._cache = e._cache.slice(n.length)), i(n, f);
};
