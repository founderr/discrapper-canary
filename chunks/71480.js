var r = n(566885),
    i = n(926515),
    a = n(24033),
    s = n(938507),
    o = n(908355),
    l = n(49693),
    u = n(838957),
    c = n(981971),
    d = n(11697),
    _ = n(776245),
    E = TypeError,
    f = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    h = f.prototype;
e.exports = function (e, t, n) {
    var p,
        I,
        m,
        T,
        S,
        g,
        A,
        N = n && n.that,
        O = !!(n && n.AS_ENTRIES),
        R = !!(n && n.IS_RECORD),
        v = !!(n && n.IS_ITERATOR),
        C = !!(n && n.INTERRUPTED),
        L = r(t, N),
        D = function (e) {
            return p && _(p, 'normal', e), new f(!0, e);
        },
        y = function (e) {
            return O ? (a(e), C ? L(e[0], e[1], D) : L(e[0], e[1])) : C ? L(e, D) : L(e);
        };
    if (R) p = e.iterator;
    else if (v) p = e;
    else {
        if (!(I = d(e))) throw E(s(e) + ' is not iterable');
        if (o(I)) {
            for (m = 0, T = l(e); T > m; m++) if ((S = y(e[m])) && u(h, S)) return S;
            return new f(!1);
        }
        p = c(e, I);
    }
    for (g = R ? e.next : p.next; !(A = i(g, p)).done; ) {
        try {
            S = y(A.value);
        } catch (e) {
            _(p, 'throw', e);
        }
        if ('object' == typeof S && S && u(h, S)) return S;
    }
    return new f(!1);
};
