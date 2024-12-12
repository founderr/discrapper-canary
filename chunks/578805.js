var i = r(444675),
    a = r(607974),
    s = r(64750);
if (r(322499)() || r(882171)()) {
    var o = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[o] ? e[o]() : a(e) ? Array.prototype[o].call(e) : void 0;
    };
} else {
    var l = r(189612),
        u = r(163494),
        c = r(690244),
        d = c('%Map%', !0),
        f = c('%Set%', !0),
        _ = r(192853),
        h = _('Array.prototype.push'),
        p = _('String.prototype.charCodeAt'),
        m = _('String.prototype.slice'),
        g = function (e, n) {
            if (n + 1 >= e.length) return n + 1;
            var r = p(e, n);
            if (r < 55296 || r > 56319) return n + 1;
            var i = p(e, n + 1);
            return i < 56320 || i > 57343 ? n + 1 : n + 2;
        },
        E = function (e) {
            var n = 0;
            return {
                next: function () {
                    var r,
                        i = n >= e.length;
                    return (
                        !i && ((r = e[n]), (n += 1)),
                        {
                            done: i,
                            value: r
                        }
                    );
                }
            };
        },
        v = function (e, n) {
            if (l(e) || a(e)) return E(e);
            if (u(e)) {
                var r = 0;
                return {
                    next: function () {
                        var n = g(e, r),
                            i = m(e, r, n);
                        return (
                            (r = n),
                            {
                                done: n > e.length,
                                value: i
                            }
                        );
                    }
                };
            }
            if (n && void 0 !== e['_es6-shim iterator_']) return e['_es6-shim iterator_']();
        };
    if (d || f) {
        var I = r(403006),
            T = r(72859),
            b = _('Map.prototype.forEach', !0),
            y = _('Set.prototype.forEach', !0);
        if (void 0 === i || !i.versions || !i.versions.node) {
            var S = _('Map.prototype.iterator', !0),
                A = _('Set.prototype.iterator', !0);
        }
        var N = _('Map.prototype.@@iterator', !0) || _('Map.prototype._es6-shim iterator_', !0),
            C = _('Set.prototype.@@iterator', !0) || _('Set.prototype._es6-shim iterator_', !0),
            R = function (e) {
                if (I(e)) {
                    if (S) return s(S(e));
                    if (N) return N(e);
                    if (b) {
                        var n = [];
                        return (
                            b(e, function (e, r) {
                                h(n, [r, e]);
                            }),
                            E(n)
                        );
                    }
                }
                if (T(e)) {
                    if (A) return s(A(e));
                    if (C) return C(e);
                    if (y) {
                        var r = [];
                        return (
                            y(e, function (e) {
                                h(r, e);
                            }),
                            E(r)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return R(e) || v(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return v(e, !0);
        };
}
