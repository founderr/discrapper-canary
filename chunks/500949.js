n.d(t, {
    $R: function () {
        return b;
    },
    A0: function () {
        return S;
    },
    BZ: function () {
        return D;
    },
    GU: function () {
        return j;
    },
    H8: function () {
        return a;
    },
    Ib: function () {
        return P;
    },
    M3: function () {
        return N;
    },
    VS: function () {
        return L;
    },
    XM: function () {
        return R;
    },
    YE: function () {
        return Z;
    },
    h9: function () {
        return A;
    },
    iw: function () {
        return l;
    },
    jC: function () {
        return p;
    },
    lT: function () {
        return v;
    },
    rd: function () {
        return M;
    },
    t4: function () {
        return B;
    },
    uH: function () {
        return r;
    },
    zn: function () {
        return _;
    }
}),
    n(47120);
var r,
    a,
    l,
    i,
    o,
    s,
    c = n(470079),
    u = n(570540),
    d = n(433517),
    h = n(190558),
    m = n(203165),
    x = n(231338);
let { SemanticColors: f } = h.V,
    p = f;
function g(e, t) {
    let [n, r] = c.useState(() => {
        let n = d.K.get(e);
        return null != n ? n : t;
    });
    return (
        c.useEffect(() => {
            d.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function b(e) {
    let t = p[e];
    return {
        name: e,
        colors: Object.fromEntries(
            Object.values(x.BR).map((e) => [
                e,
                {
                    color: t[e].raw,
                    opacity: t[e].opacity
                }
            ])
        ),
        highlight: !1
    };
}
function v(e, t, n, r, a) {
    return {
        name: t,
        colors: {
            ...e.colors,
            [a]: {
                color: n,
                opacity: r
            }
        },
        highlight: !1
    };
}
function j(e) {
    return {
        ...e,
        highlight: !e.highlight
    };
}
function _() {
    return (function (e, t) {
        let [n, r] = g(''.concat(e, '-states'), [t]),
            [a, l] = g(''.concat(e, '-index'), 0),
            i = n[a],
            o = c.useCallback(
                (e) => {
                    r(['function' == typeof e ? e(i) : e, ...n].slice(0, 20)), l(0);
                },
                [l, r, n, i]
            ),
            s = c.useCallback(() => {
                l(Math.min(n.length - 1, a + 1));
            }, [a, l, n.length]),
            u = c.useCallback(() => {
                l(Math.max(0, a - 1));
            }, [a, l]),
            d = a < n.length - 1;
        return [i, o, s, u, d, a > 0];
    })('color-override-9-10-2024', {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: 'Tokens',
        scales: []
    });
}
((i = r || (r = {})).JzAzBz = 'jzazbz'), (i.ICtCp = 'ictcp'), (i.OKLch = 'oklch'), (i.HSLuv = 'hsluv'), ((o = a || (a = {})).TOKENS = 'Tokens'), (o.PALETTES = 'Palettes');
let C = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
    T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function S(e) {
    return 'plum' === e ? T : C;
}
let N = [
    {
        name: 'JzAzBz',
        space: 'jzazbz',
        key: 'jz'
    },
    {
        name: 'ICtCp',
        space: 'ictcp',
        key: 'i'
    },
    {
        name: 'OKLch',
        space: 'oklch',
        key: 'l'
    },
    {
        name: 'HSLuv',
        space: 'hsluv',
        key: 'l'
    }
];
function y(e, t) {
    var n;
    let r = null === (n = N.find((e) => e.space === t)) || void 0 === n ? void 0 : n.key;
    return e.to(t)[t][r];
}
let I = (e) => e,
    w = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return Math.pow(e, t);
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return 1 - Math.pow(1 - e, t);
    },
    k = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return e < 0.5 ? Math.pow(2, t - 1) * Math.pow(e, t) : 1 - Math.pow(-2 * e + 2, t) / 2;
    };
((s = l || (l = {})).LINEAR = 'Linear'), (s.EASE_IN = 'Ease In'), (s.EASE_OUT = 'Ease Out'), (s.EASE_IN_OUT = 'Ease In Out');
function R(e) {
    let { name: t, base: n, colorSpace: r, useEquidistantLuminance: a, darkness: l, lightness: i, easing: o = 'Linear', easingStrength: s = 1 } = e,
        c = new u.Z('hsl(0, 0%, '.concat(l, '%)')),
        d = new u.Z('hsl(0, 0%, '.concat(i, '%)')),
        h = S(t),
        x = y(c, r),
        f = y(d, r),
        p = (f - x) / h.length,
        g = h.map((e) => y(new u.Z(m.b[''.concat(t, '.').concat(e)].hex).to(r), r));
    return Object.fromEntries(
        h.map((e, l) => {
            var i, c, d;
            let m = new u.Z(n).to(r);
            return (
                !(function (e, t, n) {
                    var r;
                    let a = null === (r = N.find((e) => e.space === t)) || void 0 === r ? void 0 : r.key;
                    e[t][a] = n;
                })(
                    m,
                    r,
                    a
                        ? ((i = l),
                          (c = h.length),
                          (d = p),
                          f -
                              (function (e, t, n) {
                                  switch (e) {
                                      case 'Linear':
                                          return I(t);
                                      case 'Ease In':
                                          return w(t, n);
                                      case 'Ease Out':
                                          return E(t, n);
                                      case 'Ease In Out':
                                          return k(t, n);
                                  }
                              })(o, i / c, s) *
                                  c *
                                  d)
                        : g[l]
                ),
                [''.concat(t, '.').concat(e), m]
            );
        })
    );
}
function O(e, t, n) {
    n((n) =>
        null == n.scales.find((t) => t.name === e)
            ? n
            : {
                  ...n,
                  scales: n.scales.map((n) => (n.name === e ? t(n) : n))
              }
    );
}
function Z(e, t, n) {
    O(
        e,
        (e) => ({
            ...e,
            darkness: t
        }),
        n
    );
}
function A(e, t, n) {
    O(
        e,
        (e) => ({
            ...e,
            lightness: t
        }),
        n
    );
}
function L(e, t, n) {
    O(
        e,
        (e) => ({
            ...e,
            useEquidistantLuminance: t
        }),
        n
    );
}
function P(e, t, n) {
    O(
        e,
        (e) => ({
            ...e,
            base: t
        }),
        n
    );
}
function B(e, t, n) {
    O(
        e,
        (e) => ({
            ...e,
            colorSpace: t
        }),
        n
    );
}
function D(e, t, n) {
    O(
        e,
        (e) => ({
            ...e,
            easing: t
        }),
        n
    );
}
function M(e, t, n) {
    O(
        e,
        (e) => ({
            ...e,
            easingStrength: t
        }),
        n
    );
}
