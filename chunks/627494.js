var i = r(147018),
    a = r(926515),
    s = r(581031),
    o = r(676125),
    l = r(354848),
    u = r(35179),
    c = r(155763),
    d = r(714050),
    f = r(995739),
    _ = r(87046),
    h = r(115726),
    p = r(641236),
    m = r(992051),
    g = p('replace'),
    E = TypeError,
    v = s(''.indexOf),
    I = s(''.replace),
    T = s(''.slice),
    b = Math.max,
    y = function (e, n, r) {
        return r > e.length ? -1 : '' === n ? r : v(e, n, r);
    };
i(
    {
        target: 'String',
        proto: !0
    },
    {
        replaceAll: function (e, n) {
            var r,
                i,
                s,
                p,
                S,
                A,
                N,
                C,
                R = o(this),
                O = 0,
                D = 0,
                L = '';
            if (!u(e)) {
                if ((r = c(e)) && !~v(d(o(_(e))), 'g')) throw E('`.replaceAll` does not allow non-global regexes');
                if ((i = f(e, g))) return a(i, e, R, n);
                if (m && r) return I(d(R), e, n);
            }
            for (s = d(R), p = d(e), !(S = l(n)) && (n = d(n)), N = b(1, (A = p.length)), O = y(s, p, 0); -1 !== O; ) (C = S ? d(n(p, O, s)) : h(p, s, O, [], void 0, n)), (L += T(s, D, O) + C), (D = O + A), (O = y(s, p, O + N));
            return D < s.length && (L += T(s, D)), L;
        }
    }
);
