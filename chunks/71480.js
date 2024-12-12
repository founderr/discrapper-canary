var i = r(566885),
    a = r(926515),
    s = r(24033),
    o = r(938507),
    l = r(908355),
    u = r(49693),
    c = r(838957),
    d = r(981971),
    f = r(11697),
    _ = r(776245),
    h = TypeError,
    p = function (e, n) {
        (this.stopped = e), (this.result = n);
    },
    m = p.prototype;
e.exports = function (e, n, r) {
    var g,
        E,
        v,
        I,
        T,
        b,
        y,
        S = r && r.that,
        A = !!(r && r.AS_ENTRIES),
        N = !!(r && r.IS_RECORD),
        C = !!(r && r.IS_ITERATOR),
        R = !!(r && r.INTERRUPTED),
        O = i(n, S),
        D = function (e) {
            return g && _(g, 'normal', e), new p(!0, e);
        },
        L = function (e) {
            return A ? (s(e), R ? O(e[0], e[1], D) : O(e[0], e[1])) : R ? O(e, D) : O(e);
        };
    if (N) g = e.iterator;
    else if (C) g = e;
    else {
        if (!(E = f(e))) throw h(o(e) + ' is not iterable');
        if (l(E)) {
            for (v = 0, I = u(e); I > v; v++) if ((T = L(e[v])) && c(m, T)) return T;
            return new p(!1);
        }
        g = d(e, E);
    }
    for (b = N ? e.next : g.next; !(y = a(b, g)).done; ) {
        try {
            T = L(y.value);
        } catch (e) {
            _(g, 'throw', e);
        }
        if ('object' == typeof T && T && c(m, T)) return T;
    }
    return new p(!1);
};
