var r = n(67867),
    i = n(96403),
    a = n(548828),
    o = n(611345),
    s = n(474883),
    l = n(474505),
    u = n(342545),
    c = n(821819),
    d = n(409851),
    _ = n(54659),
    E = n(949999),
    f = n(301338),
    h = n(882708),
    p = n(407747),
    m = [],
    I = i(m.sort),
    T = i(m.push),
    g = c(function () {
        m.sort(void 0);
    }),
    S = c(function () {
        m.sort(null);
    }),
    A = _('sort'),
    v = !c(function () {
        if (h) return h < 70;
        if (!E || !(E > 3)) {
            if (f) return !0;
            if (p) return p < 603;
            var e,
                t,
                n,
                r,
                i = '';
            for (e = 65; e < 76; e++) {
                switch (((t = String.fromCharCode(e)), e)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        n = 3;
                        break;
                    case 68:
                    case 71:
                        n = 4;
                        break;
                    default:
                        n = 2;
                }
                for (r = 0; r < 47; r++)
                    m.push({
                        k: t + r,
                        v: n
                    });
            }
            for (
                m.sort(function (e, t) {
                    return t.v - e.v;
                }),
                    r = 0;
                r < m.length;
                r++
            )
                (t = m[r].k.charAt(0)), i.charAt(i.length - 1) !== t && (i += t);
            return 'DGBEFHACIJK' !== i;
        }
    }),
    N = function (e) {
        return function (t, n) {
            return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : u(t) > u(n) ? 1 : -1;
        };
    };
r(
    {
        target: 'Array',
        proto: !0,
        forced: g || !S || !A || !v
    },
    {
        sort: function (e) {
            void 0 !== e && a(e);
            var t,
                n,
                r = o(this);
            if (v) return void 0 === e ? I(r) : I(r, e);
            var i = [],
                u = s(r);
            for (n = 0; n < u; n++) n in r && T(i, r[n]);
            for (d(i, N(e)), t = s(i), n = 0; n < t; ) r[n] = i[n++];
            for (; n < u; ) l(r, n++);
            return r;
        }
    }
);
