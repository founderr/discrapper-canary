var r = n(147018),
    i = n(926515),
    a = n(581031),
    s = n(676125),
    o = n(354848),
    l = n(35179),
    u = n(155763),
    c = n(714050),
    d = n(995739),
    _ = n(87046),
    E = n(115726),
    f = n(641236),
    h = n(992051),
    p = f('replace'),
    I = TypeError,
    m = a(''.indexOf),
    T = a(''.replace),
    S = a(''.slice),
    g = Math.max,
    A = function (e, t, n) {
        return n > e.length ? -1 : '' === t ? n : m(e, t, n);
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
                f,
                N,
                O,
                R,
                v,
                C = s(this),
                L = 0,
                D = 0,
                y = '';
            if (!l(e)) {
                if ((n = u(e)) && !~m(c(s(_(e))), 'g')) throw I('`.replaceAll` does not allow non-global regexes');
                if ((r = d(e, p))) return i(r, e, C, t);
                if (h && n) return T(c(C), e, t);
            }
            for (a = c(C), f = c(e), !(N = o(t)) && (t = c(t)), R = g(1, (O = f.length)), L = A(a, f, 0); -1 !== L; ) (v = N ? c(t(f, L, a)) : E(f, a, L, [], void 0, t)), (y += S(a, D, L) + v), (D = L + O), (L = A(a, f, L + R));
            return D < a.length && (y += S(a, D)), y;
        }
    }
);
