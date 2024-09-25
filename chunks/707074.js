var r = n(548828),
    i = n(611345),
    a = n(186973),
    o = n(474883),
    s = TypeError,
    l = function (e) {
        return function (t, n, l, u) {
            var c = i(t),
                d = a(c),
                _ = o(c);
            r(n);
            var E = e ? _ - 1 : 0,
                f = e ? -1 : 1;
            if (l < 2)
                for (;;) {
                    if (E in d) {
                        (u = d[E]), (E += f);
                        break;
                    }
                    if (((E += f), e ? E < 0 : _ <= E)) throw new s('Reduce of empty array with no initial value');
                }
            for (; e ? E >= 0 : _ > E; E += f) E in d && (u = n(u, d[E], E, c));
            return u;
        };
    };
e.exports = {
    left: l(!1),
    right: l(!0)
};
