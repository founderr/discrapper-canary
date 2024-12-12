var i = r(21841),
    a = r(689118),
    s = r(726315),
    o = r(449348);
function l() {
    (this.tmp = [, ,]), (this.keys = null);
}
function u(e) {
    o.call(this, e);
    var n = new l();
    (this._desState = n), this.deriveKeys(n, e.key);
}
a(u, o),
    (e.exports = u),
    (u.create = function (e) {
        return new u(e);
    });
var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
(u.prototype.deriveKeys = function (e, n) {
    (e.keys = Array(32)), i.equal(n.length, this.blockSize, 'Invalid key length');
    var r = s.readUInt32BE(n, 0),
        a = s.readUInt32BE(n, 4);
    s.pc1(r, a, e.tmp, 0), (r = e.tmp[0]), (a = e.tmp[1]);
    for (var o = 0; o < e.keys.length; o += 2) {
        var l = c[o >>> 1];
        (r = s.r28shl(r, l)), (a = s.r28shl(a, l)), s.pc2(r, a, e.keys, o);
    }
}),
    (u.prototype._update = function (e, n, r, i) {
        var a = this._desState,
            o = s.readUInt32BE(e, n),
            l = s.readUInt32BE(e, n + 4);
        s.ip(o, l, a.tmp, 0), (o = a.tmp[0]), (l = a.tmp[1]), 'encrypt' === this.type ? this._encrypt(a, o, l, a.tmp, 0) : this._decrypt(a, o, l, a.tmp, 0), (o = a.tmp[0]), (l = a.tmp[1]), s.writeUInt32BE(r, o, i), s.writeUInt32BE(r, l, i + 4);
    }),
    (u.prototype._pad = function (e, n) {
        if (!1 === this.padding) return !1;
        for (var r = e.length - n, i = n; i < e.length; i++) e[i] = r;
        return !0;
    }),
    (u.prototype._unpad = function (e) {
        if (!1 === this.padding) return e;
        for (var n = e[e.length - 1], r = e.length - n; r < e.length; r++) i.equal(e[r], n);
        return e.slice(0, e.length - n);
    }),
    (u.prototype._encrypt = function (e, n, r, i, a) {
        for (var o = n, l = r, u = 0; u < e.keys.length; u += 2) {
            var c = e.keys[u],
                d = e.keys[u + 1];
            s.expand(l, e.tmp, 0), (c ^= e.tmp[0]), (d ^= e.tmp[1]);
            var f = s.substitute(c, d),
                _ = s.permute(f),
                h = l;
            (l = (o ^ _) >>> 0), (o = h);
        }
        s.rip(l, o, i, a);
    }),
    (u.prototype._decrypt = function (e, n, r, i, a) {
        for (var o = r, l = n, u = e.keys.length - 2; u >= 0; u -= 2) {
            var c = e.keys[u],
                d = e.keys[u + 1];
            s.expand(o, e.tmp, 0), (c ^= e.tmp[0]), (d ^= e.tmp[1]);
            var f = s.substitute(c, d),
                _ = s.permute(f),
                h = o;
            (o = (l ^ _) >>> 0), (l = h);
        }
        s.rip(o, l, i, a);
    });
