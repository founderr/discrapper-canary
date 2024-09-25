var r = n(67867),
    i = n(668530),
    a = n(938988),
    o = n(821819),
    s = n(948634),
    l = n(730427),
    u = n(13780),
    c = n(735471),
    d = n(982665),
    _ = n(250765),
    E = n(414847),
    f = n(349446).f,
    h = n(804104).forEach,
    p = n(447631),
    m = n(29461),
    I = m.set,
    T = m.getterFor;
e.exports = function (e, t, n) {
    var m,
        g = -1 !== e.indexOf('Map'),
        S = -1 !== e.indexOf('Weak'),
        A = g ? 'set' : 'add',
        v = i[e],
        N = v && v.prototype,
        O = {};
    if (
        p &&
        c(v) &&
        (S ||
            (N.forEach &&
                !o(function () {
                    new v().entries().next();
                })))
    ) {
        var R = (m = t(function (t, n) {
                I(u(t, R), {
                    type: e,
                    collection: new v()
                }),
                    !_(n) &&
                        l(n, t[A], {
                            that: t,
                            AS_ENTRIES: g
                        });
            })).prototype,
            C = T(e);
        h(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (e) {
            var t = 'add' === e || 'set' === e;
            e in N &&
                !(S && 'clear' === e) &&
                s(R, e, function (n, r) {
                    var i = C(this).collection;
                    if (!t && S && !d(n)) return 'get' === e && void 0;
                    var a = i[e](0 === n ? 0 : n, r);
                    return t ? this : a;
                });
        }),
            S ||
                f(R, 'size', {
                    configurable: !0,
                    get: function () {
                        return C(this).collection.size;
                    }
                });
    } else (m = n.getConstructor(t, e, g, A)), a.enable();
    return (
        E(m, e, !1, !0),
        (O[e] = m),
        r(
            {
                global: !0,
                forced: !0
            },
            O
        ),
        !S && n.setStrong(m, e, g),
        m
    );
};
