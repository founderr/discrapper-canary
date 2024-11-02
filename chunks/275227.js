var r = n(877024),
    i = n(335613),
    a = n(315893),
    s = n(957578).Buffer,
    o = n(180756),
    l = n(138031),
    u = n(871230),
    c = s.alloc(128),
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
function f(e, t, n) {
    var o = (function (e) {
            return 'rmd160' === e || 'ripemd160' === e
                ? function (e) {
                      return new i().update(e).digest();
                  }
                : 'md5' === e
                  ? r
                  : function (t) {
                        return a(e).update(t).digest();
                    };
        })(e),
        l = 'sha512' === e || 'sha384' === e ? 128 : 64;
    t.length > l ? (t = o(t)) : t.length < l && (t = s.concat([t, c], l));
    for (var u = s.allocUnsafe(l + d[e]), f = s.allocUnsafe(l + d[e]), _ = 0; _ < l; _++) (u[_] = 54 ^ t[_]), (f[_] = 92 ^ t[_]);
    var h = s.allocUnsafe(l + n + 4);
    u.copy(h, 0, 0, l), (this.ipad1 = h), (this.ipad2 = u), (this.opad = f), (this.alg = e), (this.blocksize = l), (this.hash = o), (this.size = d[e]);
}
f.prototype.run = function (e, t) {
    return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad);
};
e.exports = function (e, t, n, r, i) {
    o(n, r), (e = u(e, l, 'Password')), (t = u(t, l, 'Salt'));
    var a = new f((i = i || 'sha1'), e, t.length),
        c = s.allocUnsafe(r),
        _ = s.allocUnsafe(t.length + 4);
    t.copy(_, 0, 0, t.length);
    for (var h = 0, p = d[i], m = Math.ceil(r / p), g = 1; g <= m; g++) {
        _.writeUInt32BE(g, t.length);
        for (var E = a.run(_, a.ipad1), v = E, I = 1; I < n; I++) {
            v = a.run(v, a.ipad2);
            for (var S = 0; S < p; S++) E[S] ^= v[S];
        }
        E.copy(c, h), (h += p);
    }
    return c;
};
