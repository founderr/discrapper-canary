var r = n(526988),
    i = n(339718),
    a = n(470592),
    s = n(49693),
    o = TypeError,
    l = function (e) {
        return function (t, n, l, u) {
            r(n);
            var c = i(t),
                d = a(c),
                _ = s(c),
                E = e ? _ - 1 : 0,
                f = e ? -1 : 1;
            if (l < 2)
                for (;;) {
                    if (E in d) {
                        (u = d[E]), (E += f);
                        break;
                    }
                    if (((E += f), e ? E < 0 : _ <= E)) throw o('Reduce of empty array with no initial value');
                }
            for (; e ? E >= 0 : _ > E; E += f) E in d && (u = n(u, d[E], E, c));
            return u;
        };
    };
e.exports = {
    left: l(!1),
    right: l(!0)
};
