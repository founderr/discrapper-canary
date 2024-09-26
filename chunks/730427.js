var r = n(476508),
    i = n(570596),
    a = n(28886),
    o = n(858698),
    s = n(987100),
    l = n(474883),
    u = n(875604),
    c = n(86930),
    d = n(749915),
    _ = n(736849),
    E = TypeError,
    f = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    h = f.prototype;
e.exports = function (e, t, n) {
    var p,
        m,
        I,
        T,
        g,
        S,
        A,
        v = n && n.that,
        N = !!(n && n.AS_ENTRIES),
        O = !!(n && n.IS_RECORD),
        R = !!(n && n.IS_ITERATOR),
        C = !!(n && n.INTERRUPTED),
        y = r(t, v),
        L = function (e) {
            return p && _(p, 'normal', e), new f(!0, e);
        },
        b = function (e) {
            return N ? (a(e), C ? y(e[0], e[1], L) : y(e[0], e[1])) : C ? y(e, L) : y(e);
        };
    if (O) p = e.iterator;
    else if (R) p = e;
    else {
        if (!(m = d(e))) throw new E(o(e) + ' is not iterable');
        if (s(m)) {
            for (I = 0, T = l(e); T > I; I++) if ((g = b(e[I])) && u(h, g)) return g;
            return new f(!1);
        }
        p = c(e, m);
    }
    for (S = O ? e.next : p.next; !(A = i(S, p)).done; ) {
        try {
            g = b(A.value);
        } catch (e) {
            _(p, 'throw', e);
        }
        if ('object' == typeof g && g && u(h, g)) return g;
    }
    return new f(!1);
};
