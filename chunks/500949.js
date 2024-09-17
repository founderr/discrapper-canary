n.d(t, {
    $R: function () {
        return v;
    },
    A0: function () {
        return y;
    },
    BZ: function () {
        return F;
    },
    GU: function () {
        return j;
    },
    H8: function () {
        return a;
    },
    HI: function () {
        return C;
    },
    Ib: function () {
        return M;
    },
    KB: function () {
        return H;
    },
    M3: function () {
        return I;
    },
    S2: function () {
        return g;
    },
    VS: function () {
        return P;
    },
    XM: function () {
        return Z;
    },
    YE: function () {
        return B;
    },
    h9: function () {
        return L;
    },
    iw: function () {
        return l;
    },
    jC: function () {
        return p;
    },
    lT: function () {
        return _;
    },
    rd: function () {
        return U;
    },
    t4: function () {
        return D;
    },
    uF: function () {
        return G;
    },
    uH: function () {
        return r;
    },
    zn: function () {
        return T;
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
    d = n(570540),
    u = n(433517),
    h = n(190558),
    m = n(203165),
    x = n(231338);
let { SemanticColors: f } = h.V,
    p = f,
    g = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function b(e, t) {
    let [n, r] = c.useState(() => {
        let n = u.K.get(e);
        return null != n ? n : t;
    });
    return (
        c.useEffect(() => {
            u.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function v(e) {
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
function _(e, t, n, r, a) {
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
function C(e, t) {
    let n = e.toString();
    return t && !CSS.supports('color', n) && (n = e.to('p3').toString()), !CSS.supports('color', n) && (n = e.to('srgb').toString()), n;
}
function T() {
    return (function (e, t) {
        let [n, r] = b(''.concat(e, '-states'), [t]),
            [a, l] = b(''.concat(e, '-index'), 0),
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
            d = c.useCallback(() => {
                l(Math.max(0, a - 1));
            }, [a, l]),
            u = a < n.length - 1;
        return [i, o, s, d, u, a > 0];
    })('color-override-9-10-2024', {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: 'Tokens',
        scales: []
    });
}
((i = r || (r = {})).JzAzBz = 'jzazbz'), (i.ICtCp = 'ictcp'), (i.OKLch = 'oklch'), (i.HSLuv = 'hsluv'), ((o = a || (a = {})).TOKENS = 'Tokens'), (o.PALETTES = 'Palettes');
let S = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
    N = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function y(e) {
    return 'plum' === e ? N : S;
}
let I = [
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
function w(e, t) {
    var n;
    let r = null === (n = I.find((e) => e.space === t)) || void 0 === n ? void 0 : n.key;
    return e.to(t)[t][r];
}
let k = (e) => e,
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return Math.pow(e, t);
    },
    R = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return 1 - Math.pow(1 - e, t);
    },
    O = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return e < 0.5 ? Math.pow(2, t - 1) * Math.pow(e, t) : 1 - Math.pow(-2 * e + 2, t) / 2;
    };
((s = l || (l = {})).LINEAR = 'Linear'), (s.EASE_IN = 'Ease In'), (s.EASE_OUT = 'Ease Out'), (s.EASE_IN_OUT = 'Ease In Out');
function Z(e) {
    let { name: t, base: n, colorSpace: r, useEquidistantLuminance: a, darkness: l, lightness: i, easing: o = 'Linear', easingStrength: s = 1 } = e,
        c = new d.Z('hsl(0, 0%, '.concat(l, '%)')),
        u = new d.Z('hsl(0, 0%, '.concat(i, '%)')),
        h = y(t),
        x = w(c, r),
        f = w(u, r),
        p = (f - x) / h.length,
        g = h.map((e) => w(new d.Z(m.b[''.concat(t, '.').concat(e)].hex).to(r), r));
    return Object.fromEntries(
        h.map((e, l) => {
            var i, c, u;
            let m = new d.Z(n).to(r);
            return (
                !(function (e, t, n) {
                    var r;
                    let a = null === (r = I.find((e) => e.space === t)) || void 0 === r ? void 0 : r.key;
                    e[t][a] = n;
                })(
                    m,
                    r,
                    a
                        ? ((i = l),
                          (c = h.length),
                          (u = p),
                          f -
                              (function (e, t, n) {
                                  switch (e) {
                                      case 'Linear':
                                          return k(t);
                                      case 'Ease In':
                                          return E(t, n);
                                      case 'Ease Out':
                                          return R(t, n);
                                      case 'Ease In Out':
                                          return O(t, n);
                                  }
                              })(o, i / c, s) *
                                  c *
                                  u)
                        : g[l]
                ),
                [''.concat(t, '.').concat(e), m]
            );
        })
    );
}
function A(e, t, n) {
    n((n) =>
        null == n.scales.find((t) => t.name === e)
            ? n
            : {
                  ...n,
                  scales: n.scales.map((n) => (n.name === e ? t(n) : n))
              }
    );
}
function B(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            darkness: t
        }),
        n
    );
}
function L(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            lightness: t
        }),
        n
    );
}
function P(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            useEquidistantLuminance: t
        }),
        n
    );
}
function M(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            base: t
        }),
        n
    );
}
function D(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            colorSpace: t
        }),
        n
    );
}
function F(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            easing: t
        }),
        n
    );
}
function U(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            easingStrength: t
        }),
        n
    );
}
function H(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            showColumnarPalettePreview: t
        }),
        n
    );
}
function G(e, t, n) {
    A(
        e,
        (e) => ({
            ...e,
            useP3ColorSpace: t
        }),
        n
    );
}
