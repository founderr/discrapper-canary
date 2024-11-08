var r = n(566885),
    i = n(926515),
    a = n(24033),
    s = n(938507),
    o = n(908355),
    l = n(49693),
    u = n(838957),
    c = n(981971),
    d = n(11697),
    f = n(776245),
    _ = TypeError,
    h = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    p = h.prototype;
e.exports = function (e, t, n) {
    var m,
        g,
        E,
        v,
        I,
        S,
        b,
        T = n && n.that,
        y = !!(n && n.AS_ENTRIES),
        A = !!(n && n.IS_RECORD),
        N = !!(n && n.IS_ITERATOR),
        C = !!(n && n.INTERRUPTED),
        R = r(t, T),
        O = function (e) {
            return m && f(m, 'normal', e), new h(!0, e);
        },
        D = function (e) {
            return y ? (a(e), C ? R(e[0], e[1], O) : R(e[0], e[1])) : C ? R(e, O) : R(e);
        };
    if (A) m = e.iterator;
    else if (N) m = e;
    else {
        if (!(g = d(e))) throw _(s(e) + ' is not iterable');
        if (o(g)) {
            for (E = 0, v = l(e); v > E; E++) if ((I = D(e[E])) && u(p, I)) return I;
            return new h(!1);
        }
        m = c(e, g);
    }
    for (S = A ? e.next : m.next; !(b = i(S, m)).done; ) {
        try {
            I = D(b.value);
        } catch (e) {
            f(m, 'throw', e);
        }
        if ('object' == typeof I && I && u(p, I)) return I;
    }
    return new h(!1);
};
