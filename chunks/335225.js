var r = n(566885),
    i = n(581031),
    a = n(470592),
    o = n(339718),
    s = n(49693),
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
        return function (f, h, p, m) {
            for (var I, T, g = o(f), S = a(g), A = r(h, p), v = s(S), N = 0, O = m || l, R = t ? O(f, v) : n || _ ? O(f, 0) : void 0; v > N; N++)
                if ((E || N in S) && ((T = A((I = S[N]), N, g)), e)) {
                    if (t) R[N] = T;
                    else if (T)
                        switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return I;
                            case 6:
                                return N;
                            case 2:
                                u(R, I);
                        }
                    else
                        switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                u(R, I);
                        }
                }
            return d ? -1 : i || c ? c : R;
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
