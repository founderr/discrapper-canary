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
        g,
        S,
        A,
        N = n && n.that,
        O = !!(n && n.AS_ENTRIES),
        R = !!(n && n.IS_RECORD),
        v = !!(n && n.IS_ITERATOR),
        C = !!(n && n.INTERRUPTED),
        y = r(t, N),
        L = function (e) {
            return p && _(p, 'normal', e), new f(!0, e);
        },
        D = function (e) {
            return O ? (a(e), C ? y(e[0], e[1], L) : y(e[0], e[1])) : C ? y(e, L) : y(e);
        };
    if (R) p = e.iterator;
    else if (v) p = e;
    else {
        if (!(I = d(e))) throw E(s(e) + ' is not iterable');
        if (o(I)) {
            for (m = 0, T = l(e); T > m; m++) if ((g = D(e[m])) && u(h, g)) return g;
            return new f(!1);
        }
        p = c(e, I);
    }
    for (S = R ? e.next : p.next; !(A = i(S, p)).done; ) {
        try {
            g = D(A.value);
        } catch (e) {
            _(p, 'throw', e);
        }
        if ('object' == typeof g && g && u(h, g)) return g;
    }
    return new f(!1);
};
