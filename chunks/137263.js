var i = r(689118),
    a = r(676972),
    s = r(957578).Buffer,
    o = [1518500249, 1859775393, -1894007588, -899497514],
    l = Array(80);
function u() {
    this.init(), (this._w = l), a.call(this, 64, 56);
}
function c(e) {
    return (e << 5) | (e >>> 27);
}
function d(e) {
    return (e << 30) | (e >>> 2);
}
function f(e, n, r, i) {
    return 0 === e ? (n & r) | (~n & i) : 2 === e ? (n & r) | (n & i) | (r & i) : n ^ r ^ i;
}
i(u, a),
    (u.prototype.init = function () {
        return (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878), (this._e = 3285377520), this;
    }),
    (u.prototype._update = function (e) {
        for (var n = this._w, r = 0 | this._a, i = 0 | this._b, a = 0 | this._c, s = 0 | this._d, l = 0 | this._e, u = 0; u < 16; ++u) n[u] = e.readInt32BE(4 * u);
        for (; u < 80; ++u) n[u] = n[u - 3] ^ n[u - 8] ^ n[u - 14] ^ n[u - 16];
        for (var _ = 0; _ < 80; ++_) {
            var h = ~~(_ / 20),
                p = (c(r) + f(h, i, a, s) + l + n[_] + o[h]) | 0;
            (l = s), (s = a), (a = d(i)), (i = r), (r = p);
        }
        (this._a = (r + this._a) | 0), (this._b = (i + this._b) | 0), (this._c = (a + this._c) | 0), (this._d = (s + this._d) | 0), (this._e = (l + this._e) | 0);
    }),
    (u.prototype._hash = function () {
        var e = s.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
    }),
    (e.exports = u);
