var r = n(147018),
    i = n(926515),
    a = n(581031),
    s = n(676125),
    o = n(354848),
    l = n(35179),
    u = n(155763),
    c = n(714050),
    d = n(995739),
    f = n(87046),
    _ = n(115726),
    p = n(641236),
    h = n(992051),
    m = p('replace'),
    g = TypeError,
    E = a(''.indexOf),
    v = a(''.replace),
    I = a(''.slice),
    b = Math.max,
    T = function (e, t, n) {
        return n > e.length ? -1 : '' === t ? n : E(e, t, n);
    };
r(
    {
        target: 'String',
        proto: !0
    },
    {
        replaceAll: function (e, t) {
            var n,
                r,
                a,
                p,
                S,
                y,
                A,
                N,
                C = s(this),
                R = 0,
                O = 0,
                D = '';
            if (!l(e)) {
                if ((n = u(e)) && !~E(c(s(f(e))), 'g')) throw g('`.replaceAll` does not allow non-global regexes');
                if ((r = d(e, m))) return i(r, e, C, t);
                if (h && n) return v(c(C), e, t);
            }
            for (a = c(C), p = c(e), !(S = o(t)) && (t = c(t)), A = b(1, (y = p.length)), R = T(a, p, 0); -1 !== R; ) (N = S ? c(t(p, R, a)) : _(p, a, R, [], void 0, t)), (D += I(a, O, R) + N), (O = R + y), (R = T(a, p, R + A));
            return O < a.length && (D += I(a, O)), D;
        }
    }
);
