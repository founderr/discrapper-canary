var r = n(444675),
    i = n(607974),
    a = n(64750);
if (n(322499)() || n(882171)()) {
    var s = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[s] ? e[s]() : i(e) ? Array.prototype[s].call(e) : void 0;
    };
} else {
    var o = n(189612),
        l = n(163494),
        u = n(690244),
        c = u('%Map%', !0),
        d = u('%Set%', !0),
        f = n(192853),
        _ = f('Array.prototype.push'),
        p = f('String.prototype.charCodeAt'),
        h = f('String.prototype.slice'),
        m = function (e, t) {
            if (t + 1 >= e.length) return t + 1;
            var n = p(e, t);
            if (n < 55296 || n > 56319) return t + 1;
            var r = p(e, t + 1);
            return r < 56320 || r > 57343 ? t + 1 : t + 2;
        },
        g = function (e) {
            var t = 0;
            return {
                next: function () {
                    var n,
                        r = t >= e.length;
                    return (
                        !r && ((n = e[t]), (t += 1)),
                        {
                            done: r,
                            value: n
                        }
                    );
                }
            };
        },
        E = function (e, t) {
            if (o(e) || i(e)) return g(e);
            if (l(e)) {
                var n = 0;
                return {
                    next: function () {
                        var t = m(e, n),
                            r = h(e, n, t);
                        return (
                            (n = t),
                            {
                                done: t > e.length,
                                value: r
                            }
                        );
                    }
                };
            }
            if (t && void 0 !== e['_es6-shim iterator_']) return e['_es6-shim iterator_']();
        };
    if (c || d) {
        var v = n(403006),
            b = n(72859),
            I = f('Map.prototype.forEach', !0),
            S = f('Set.prototype.forEach', !0);
        if (void 0 === r || !r.versions || !r.versions.node) {
            var T = f('Map.prototype.iterator', !0),
                y = f('Set.prototype.iterator', !0);
        }
        var A = f('Map.prototype.@@iterator', !0) || f('Map.prototype._es6-shim iterator_', !0),
            N = f('Set.prototype.@@iterator', !0) || f('Set.prototype._es6-shim iterator_', !0),
            C = function (e) {
                if (v(e)) {
                    if (T) return a(T(e));
                    if (A) return A(e);
                    if (I) {
                        var t = [];
                        return (
                            I(e, function (e, n) {
                                _(t, [n, e]);
                            }),
                            g(t)
                        );
                    }
                }
                if (b(e)) {
                    if (y) return a(y(e));
                    if (N) return N(e);
                    if (S) {
                        var n = [];
                        return (
                            S(e, function (e) {
                                _(n, e);
                            }),
                            g(n)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return C(e) || E(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return E(e, !0);
        };
}
