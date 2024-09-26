var r = n(67867),
    i = n(570596),
    a = n(414629),
    o = n(670622),
    s = n(735471),
    l = n(468154),
    u = n(646948),
    c = n(600385),
    d = n(414847),
    _ = n(948634),
    E = n(691244),
    f = n(360518),
    h = n(519723),
    p = n(594463),
    m = o.PROPER,
    I = o.CONFIGURABLE,
    T = p.IteratorPrototype,
    g = p.BUGGY_SAFARI_ITERATORS,
    S = f('iterator'),
    A = 'keys',
    v = 'values',
    N = 'entries',
    O = function () {
        return this;
    };
e.exports = function (e, t, n, o, f, p, R) {
    l(n, t, o);
    var C,
        y,
        L,
        b = function (e) {
            if (e === f && w) return w;
            if (!g && e && e in P) return P[e];
            switch (e) {
                case A:
                case v:
                case N:
                    return function () {
                        return new n(this, e);
                    };
            }
            return function () {
                return new n(this);
            };
        },
        D = t + ' Iterator',
        M = !1,
        P = e.prototype,
        U = P[S] || P['@@iterator'] || (f && P[f]),
        w = (!g && U) || b(f),
        x = ('Array' === t && P.entries) || U;
    if (
        (x && (C = u(x.call(new e()))) !== Object.prototype && C.next && (!a && u(C) !== T && (c ? c(C, T) : !s(C[S]) && E(C, S, O)), d(C, D, !0, !0), a && (h[D] = O)),
        m &&
            f === v &&
            U &&
            U.name !== v &&
            (!a && I
                ? _(P, 'name', v)
                : ((M = !0),
                  (w = function () {
                      return i(U, this);
                  }))),
        f)
    ) {
        if (
            ((y = {
                values: b(v),
                keys: p ? w : b(A),
                entries: b(N)
            }),
            R)
        )
            for (L in y) (g || M || !(L in P)) && E(P, L, y[L]);
        else
            r(
                {
                    target: t,
                    proto: !0,
                    forced: g || M
                },
                y
            );
    }
    return (!a || R) && P[S] !== w && E(P, S, w, { name: f }), (h[t] = w), y;
};
