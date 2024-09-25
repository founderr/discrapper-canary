var r = n(877024),
    i = n(335613),
    a = n(315893),
    o = n(957578).Buffer,
    s = n(180756),
    l = n(138031),
    u = n(871230),
    c = o.alloc(128),
    d = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20
    };
function _(e, t, n) {
    var r = E(e),
        i = 'sha512' === e || 'sha384' === e ? 128 : 64;
    t.length > i ? (t = r(t)) : t.length < i && (t = o.concat([t, c], i));
    for (var a = o.allocUnsafe(i + d[e]), s = o.allocUnsafe(i + d[e]), l = 0; l < i; l++) (a[l] = 54 ^ t[l]), (s[l] = 92 ^ t[l]);
    var u = o.allocUnsafe(i + n + 4);
    a.copy(u, 0, 0, i), (this.ipad1 = u), (this.ipad2 = a), (this.opad = s), (this.alg = e), (this.blocksize = i), (this.hash = r), (this.size = d[e]);
}
function E(e) {
    function t(t) {
        return a(e).update(t).digest();
    }
    function n(e) {
        return new i().update(e).digest();
    }
    return 'rmd160' === e || 'ripemd160' === e ? n : 'md5' === e ? r : t;
}
function f(e, t, n, r, i) {
    s(n, r), (e = u(e, l, 'Password')), (t = u(t, l, 'Salt'));
    var a = new _((i = i || 'sha1'), e, t.length),
        c = o.allocUnsafe(r),
        E = o.allocUnsafe(t.length + 4);
    t.copy(E, 0, 0, t.length);
    for (var f = 0, h = d[i], p = Math.ceil(r / h), m = 1; m <= p; m++) {
        E.writeUInt32BE(m, t.length);
        for (var I = a.run(E, a.ipad1), T = I, g = 1; g < n; g++) {
            T = a.run(T, a.ipad2);
            for (var S = 0; S < h; S++) I[S] ^= T[S];
        }
        I.copy(c, f), (f += h);
    }
    return c;
}
(_.prototype.run = function (e, t) {
    return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad);
}),
    (e.exports = f);
