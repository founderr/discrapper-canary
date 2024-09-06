var r = n(566885),
    i = n(581031),
    a = n(470592),
    s = n(339718),
    o = n(49693),
    l = n(29016),
    u = i([].push),
    c = function (e) {
        var t = 1 === e,
            n = 2 === e,
            i = 3 === e,
            c = 4 === e,
            d = 6 === e,
            _ = 7 === e,
            E = 5 === e || d;
        return function (f, h, p, I) {
            for (var m, T, S = s(f), g = a(S), A = r(h, p), N = o(g), O = 0, R = I || l, v = t ? R(f, N) : n || _ ? R(f, 0) : void 0; N > O; O++)
                if ((E || O in g) && ((T = A((m = g[O]), O, S)), e)) {
                    if (t) v[O] = T;
                    else if (T)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return m;
                            case 6:
                                return O;
                            case 2:
                                u(v, m);
                        }
                    else
                        switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                u(v, m);
                        }
                }
            return d ? -1 : i || c ? c : v;
        };
    };
e.exports = {
    forEach: c(0),
    map: c(1),
    filter: c(2),
    some: c(3),
    every: c(4),
    find: c(5),
    findIndex: c(6),
    filterReject: c(7)
};
