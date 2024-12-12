var i = r(689118),
    a = r(258922),
    s = r(957578).Buffer,
    o = Array(16);
function l() {
    a.call(this, 64), (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878);
}
function u(e, n) {
    return (e << n) | (e >>> (32 - n));
}
function c(e, n, r, i, a, s, o) {
    return (u((e + ((n & r) | (~n & i)) + a + s) | 0, o) + n) | 0;
}
function d(e, n, r, i, a, s, o) {
    return (u((e + ((n & i) | (r & ~i)) + a + s) | 0, o) + n) | 0;
}
function f(e, n, r, i, a, s, o) {
    return (u((e + (n ^ r ^ i) + a + s) | 0, o) + n) | 0;
}
function _(e, n, r, i, a, s, o) {
    return (u((e + (r ^ (n | ~i)) + a + s) | 0, o) + n) | 0;
}
i(l, a),
    (l.prototype._update = function () {
        for (var e = o, n = 0; n < 16; ++n) e[n] = this._block.readInt32LE(4 * n);
        var r = this._a,
            i = this._b,
            a = this._c,
            s = this._d;
        (r = c(r, i, a, s, e[0], 3614090360, 7)), (s = c(s, r, i, a, e[1], 3905402710, 12)), (a = c(a, s, r, i, e[2], 606105819, 17)), (i = c(i, a, s, r, e[3], 3250441966, 22)), (r = c(r, i, a, s, e[4], 4118548399, 7)), (s = c(s, r, i, a, e[5], 1200080426, 12)), (a = c(a, s, r, i, e[6], 2821735955, 17)), (i = c(i, a, s, r, e[7], 4249261313, 22)), (r = c(r, i, a, s, e[8], 1770035416, 7)), (s = c(s, r, i, a, e[9], 2336552879, 12)), (a = c(a, s, r, i, e[10], 4294925233, 17)), (i = c(i, a, s, r, e[11], 2304563134, 22)), (r = c(r, i, a, s, e[12], 1804603682, 7)), (s = c(s, r, i, a, e[13], 4254626195, 12)), (a = c(a, s, r, i, e[14], 2792965006, 17)), (i = c(i, a, s, r, e[15], 1236535329, 22)), (r = d(r, i, a, s, e[1], 4129170786, 5)), (s = d(s, r, i, a, e[6], 3225465664, 9)), (a = d(a, s, r, i, e[11], 643717713, 14)), (i = d(i, a, s, r, e[0], 3921069994, 20)), (r = d(r, i, a, s, e[5], 3593408605, 5)), (s = d(s, r, i, a, e[10], 38016083, 9)), (a = d(a, s, r, i, e[15], 3634488961, 14)), (i = d(i, a, s, r, e[4], 3889429448, 20)), (r = d(r, i, a, s, e[9], 568446438, 5)), (s = d(s, r, i, a, e[14], 3275163606, 9)), (a = d(a, s, r, i, e[3], 4107603335, 14)), (i = d(i, a, s, r, e[8], 1163531501, 20)), (r = d(r, i, a, s, e[13], 2850285829, 5)), (s = d(s, r, i, a, e[2], 4243563512, 9)), (a = d(a, s, r, i, e[7], 1735328473, 14)), (i = d(i, a, s, r, e[12], 2368359562, 20)), (r = f(r, i, a, s, e[5], 4294588738, 4)), (s = f(s, r, i, a, e[8], 2272392833, 11)), (a = f(a, s, r, i, e[11], 1839030562, 16)), (i = f(i, a, s, r, e[14], 4259657740, 23)), (r = f(r, i, a, s, e[1], 2763975236, 4)), (s = f(s, r, i, a, e[4], 1272893353, 11)), (a = f(a, s, r, i, e[7], 4139469664, 16)), (i = f(i, a, s, r, e[10], 3200236656, 23)), (r = f(r, i, a, s, e[13], 681279174, 4)), (s = f(s, r, i, a, e[0], 3936430074, 11)), (a = f(a, s, r, i, e[3], 3572445317, 16)), (i = f(i, a, s, r, e[6], 76029189, 23)), (r = f(r, i, a, s, e[9], 3654602809, 4)), (s = f(s, r, i, a, e[12], 3873151461, 11)), (a = f(a, s, r, i, e[15], 530742520, 16)), (i = f(i, a, s, r, e[2], 3299628645, 23)), (r = _(r, i, a, s, e[0], 4096336452, 6)), (s = _(s, r, i, a, e[7], 1126891415, 10)), (a = _(a, s, r, i, e[14], 2878612391, 15)), (i = _(i, a, s, r, e[5], 4237533241, 21)), (r = _(r, i, a, s, e[12], 1700485571, 6)), (s = _(s, r, i, a, e[3], 2399980690, 10)), (a = _(a, s, r, i, e[10], 4293915773, 15)), (i = _(i, a, s, r, e[1], 2240044497, 21)), (r = _(r, i, a, s, e[8], 1873313359, 6)), (s = _(s, r, i, a, e[15], 4264355552, 10)), (a = _(a, s, r, i, e[6], 2734768916, 15)), (i = _(i, a, s, r, e[13], 1309151649, 21)), (r = _(r, i, a, s, e[4], 4149444226, 6)), (s = _(s, r, i, a, e[11], 3174756917, 10)), (a = _(a, s, r, i, e[2], 718787259, 15)), (i = _(i, a, s, r, e[9], 3951481745, 21)), (this._a = (this._a + r) | 0), (this._b = (this._b + i) | 0), (this._c = (this._c + a) | 0), (this._d = (this._d + s) | 0);
    }),
    (l.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128), this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), (this._blockOffset = 0)), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = s.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e;
    }),
    (e.exports = l);
