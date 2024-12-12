var i = r(877024),
    a = r(335613),
    s = r(315893),
    o = r(957578).Buffer,
    l = r(180756),
    u = r(138031),
    c = r(871230),
    d = o.alloc(128),
    f = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
    };
function _(e, n, r) {
    var i = h(e),
        a = 'sha512' === e || 'sha384' === e ? 128 : 64;
    n.length > a ? (n = i(n)) : n.length < a && (n = o.concat([n, d], a));
    for (var s = o.allocUnsafe(a + f[e]), l = o.allocUnsafe(a + f[e]), u = 0; u < a; u++) (s[u] = 54 ^ n[u]), (l[u] = 92 ^ n[u]);
    var c = o.allocUnsafe(a + r + 4);
    s.copy(c, 0, 0, a), (this.ipad1 = c), (this.ipad2 = s), (this.opad = l), (this.alg = e), (this.blocksize = a), (this.hash = i), (this.size = f[e]);
}
function h(e) {
    function n(n) {
        return s(e).update(n).digest();
    }
    function r(e) {
        return new a().update(e).digest();
    }
    return 'rmd160' === e || 'ripemd160' === e ? r : 'md5' === e ? i : n;
}
function p(e, n, r, i, a) {
    l(r, i), (e = c(e, u, 'Password')), (n = c(n, u, 'Salt'));
    var s = new _((a = a || 'sha1'), e, n.length),
        d = o.allocUnsafe(i),
        h = o.allocUnsafe(n.length + 4);
    n.copy(h, 0, 0, n.length);
    for (var p = 0, m = f[a], g = Math.ceil(i / m), E = 1; E <= g; E++) {
        h.writeUInt32BE(E, n.length);
        for (var v = s.run(h, s.ipad1), I = v, T = 1; T < r; T++) {
            I = s.run(I, s.ipad2);
            for (var b = 0; b < m; b++) v[b] ^= I[b];
        }
        v.copy(d, p), (p += m);
    }
    return d;
}
(_.prototype.run = function (e, n) {
    return e.copy(n, this.blocksize), this.hash(n).copy(this.opad, this.blocksize), this.hash(this.opad);
}),
    (e.exports = p);
