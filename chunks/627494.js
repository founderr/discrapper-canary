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
    h = n(641236),
    p = n(992051),
    m = h('replace'),
    g = TypeError,
    E = a(''.indexOf),
    v = a(''.replace),
    I = a(''.slice),
    S = Math.max,
    b = function (e, t, n) {
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
                h,
                T,
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
                if (p && n) return v(c(C), e, t);
            }
            for (a = c(C), h = c(e), !(T = o(t)) && (t = c(t)), A = S(1, (y = h.length)), R = b(a, h, 0); -1 !== R; ) (N = T ? c(t(h, R, a)) : _(h, a, R, [], void 0, t)), (D += I(a, O, R) + N), (O = R + y), (R = b(a, h, R + A));
            return O < a.length && (D += I(a, O)), D;
        }
    }
);
