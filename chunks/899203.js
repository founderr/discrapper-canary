var n = (function e() {
    for (var e, n = [], r = 0; r < 256; r++) {
        e = r;
        for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
        n[r] = e;
    }
    return n;
})();
function r(e, r, i, a) {
    var s = n,
        o = a + i;
    e ^= -1;
    for (var l = a; l < o; l++) e = (e >>> 8) ^ s[(e ^ r[l]) & 255];
    return -1 ^ e;
}
e.exports = r;
