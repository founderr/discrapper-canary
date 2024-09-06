var n = r(147018),
    a = r(926515),
    o = r(992051),
    i = r(539459),
    _ = r(354848),
    E = r(673743),
    s = r(144748),
    c = r(276321),
    I = r(865312),
    u = r(251069),
    l = r(859209),
    R = r(641236),
    A = r(874652),
    T = r(84297),
    d = i.PROPER,
    N = i.CONFIGURABLE,
    p = T.IteratorPrototype,
    O = T.BUGGY_SAFARI_ITERATORS,
    f = R('iterator'),
    S = 'keys',
    L = 'values',
    D = 'entries',
    h = function () {
        return this;
    };
e.exports = function (e, t, r, i, R, T, C) {
    E(r, t, i);
    var g,
        M,
        P,
        m = function (e) {
            if (e === R && b) return b;
            if (!O && e && e in y) return y[e];
            switch (e) {
                case S:
                case L:
                case D:
                    return function () {
                        return new r(this, e);
                    };
            }
            return function () {
                return new r(this);
            };
        },
        U = t + ' Iterator',
        G = !1,
        y = e.prototype,
        v = y[f] || y['@@iterator'] || (R && y[R]),
        b = (!O && v) || m(R),
        B = ('Array' === t && y.entries) || v;
    if (
        (B && (g = s(B.call(new e()))) !== Object.prototype && g.next && (!o && s(g) !== p && (c ? c(g, p) : !_(g[f]) && l(g, f, h)), I(g, U, !0, !0), o && (A[U] = h)),
        d &&
            R === L &&
            v &&
            v.name !== L &&
            (!o && N
                ? u(y, 'name', L)
                : ((G = !0),
                  (b = function () {
                      return a(v, this);
                  }))),
        R)
    ) {
        if (
            ((M = {
                values: m(L),
                keys: T ? b : m(S),
                entries: m(D)
            }),
            C)
        )
            for (P in M) (O || G || !(P in y)) && l(y, P, M[P]);
        else
            n(
                {
                    target: t,
                    proto: !0,
                    forced: O || G
                },
                M
            );
    }
    return (!o || C) && y[f] !== b && l(y, f, b, { name: R }), (A[t] = b), M;
};
