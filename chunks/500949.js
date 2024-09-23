n.d(t, {
    $R: function () {
        return b;
    },
    A0: function () {
        return N;
    },
    BZ: function () {
        return U;
    },
    GU: function () {
        return _;
    },
    H8: function () {
        return a;
    },
    HI: function () {
        return j;
    },
    Ib: function () {
        return D;
    },
    KB: function () {
        return H;
    },
    M3: function () {
        return y;
    },
    S2: function () {
        return p;
    },
    W6: function () {
        return A;
    },
    XM: function () {
        return B;
    },
    YC: function () {
        return V;
    },
    YE: function () {
        return P;
    },
    h9: function () {
        return M;
    },
    iw: function () {
        return l;
    },
    jC: function () {
        return x;
    },
    lT: function () {
        return v;
    },
    rd: function () {
        return G;
    },
    t4: function () {
        return F;
    },
    uF: function () {
        return z;
    },
    uH: function () {
        return r;
    },
    zn: function () {
        return C;
    }
}),
    n(47120),
    n(724458);
var r,
    a,
    l,
    i,
    o,
    c,
    s = n(470079),
    d = n(570540),
    u = n(433517),
    h = n(190558),
    m = n(231338);
let { SemanticColors: f } = h.V,
    x = f,
    p = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function g(e, t) {
    let [n, r] = s.useState(() => {
        let n = u.K.get(e);
        return null != n ? n : t;
    });
    return (
        s.useEffect(() => {
            u.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function b(e) {
    let t = x[e];
    return {
        name: e,
        colors: Object.fromEntries(
            Object.values(m.BR).map((e) => [
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
function _(e) {
    return {
        ...e,
        highlight: !e.highlight
    };
}
function j(e, t) {
    let n = e.toString();
    return t && !CSS.supports('color', n) && (n = e.to('p3').toString()), !CSS.supports('color', n) && (n = e.to('srgb').toString()), n;
}
function C() {
    return (function (e, t) {
        let [n, r] = g(''.concat(e, '-states'), [t]),
            [a, l] = g(''.concat(e, '-index'), 0),
            i = n[a],
            o = s.useCallback(
                (e) => {
                    r(['function' == typeof e ? e(i) : e, ...n].slice(0, 20)), l(0);
                },
                [l, r, n, i]
            ),
            c = s.useCallback(() => {
                l(Math.min(n.length - 1, a + 1));
            }, [a, l, n.length]),
            d = s.useCallback(() => {
                l(Math.max(0, a - 1));
            }, [a, l]),
            u = a < n.length - 1;
        return [i, o, c, d, u, a > 0];
    })('color-override-9-18-2024', {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: 'Tokens',
        scales: []
    });
}
((i = r || (r = {})).JzAzBz = 'jzazbz'), (i.ICtCp = 'ictcp'), (i.OKLch = 'oklch'), (i.HSLuv = 'hsluv'), (i.HPLuv = 'hpluv'), (i.Cam16 = 'cam16-jmh'), ((o = a || (a = {})).TOKENS = 'Tokens'), (o.PALETTES = 'Palettes');
let T = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
    S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function N(e) {
    return 'plum' === e ? S : T;
}
let y = [
        {
            name: 'JzAzBz',
            space: 'jzazbz'
        },
        {
            name: 'Cam16_jmh',
            space: 'cam16-jmh'
        },
        {
            name: 'HPLuv',
            space: 'hpluv'
        },
        {
            name: 'ICtCp',
            space: 'ictcp'
        },
        {
            name: 'OKLch',
            space: 'oklch'
        },
        {
            name: 'HSLuv',
            space: 'hsluv'
        }
    ],
    I = [
        {
            space: 'jzazbz',
            property: 'jzazbz',
            key: 'jz'
        },
        {
            space: 'ictcp',
            property: 'ictcp',
            key: 'i'
        },
        {
            space: 'oklch',
            property: 'oklch',
            key: 'l'
        },
        {
            space: 'hsluv',
            property: 'hsluv',
            key: 'l'
        },
        {
            space: 'hpluv',
            property: 'hpluv',
            key: 'l'
        },
        {
            space: 'cam16-jmh',
            property: 'cam16_jmh',
            key: 'j'
        }
    ];
function w(e, t) {
    let { property: n, key: r } = I.find((e) => e.space === t);
    return e.to(t)[n][r];
}
function E(e, t, n) {
    let { property: r, key: a } = I.find((e) => e.space === t);
    e[r][a] = n;
}
let k = (e) => e,
    R = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return Math.pow(e, t);
    },
    Z = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return 1 - Math.pow(1 - e, t);
    },
    O = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return e < 0.5 ? Math.pow(2, t - 1) * Math.pow(e, t) : 1 - Math.pow(-2 * e + 2, t) / 2;
    };
((c = l || (l = {})).LINEAR = 'Linear'), (c.EASE_IN = 'Ease In'), (c.EASE_OUT = 'Ease Out'), (c.EASE_IN_OUT = 'Ease In Out');
function A(e, t) {
    let n = N(t),
        r = Object.keys(e).map((e) => parseInt(e.split('-')[1])),
        a = Math.max(...r) / (n.length - 1),
        l = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * a),
                o = r.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            l[''.concat(t, '-').concat(o)] = ''.concat(t, '-').concat(e);
        }),
        l
    );
}
function B(e) {
    let { name: t, base: n, steps: r = 26, colorSpace: a, useP3ColorSpace: l, darkness: i, lightness: o, easing: c = 'Linear', easingStrength: s = 1 } = e,
        u = new d.Z('hsl(0, 0%, '.concat(i, '%)')),
        h = new d.Z('hsl(0, 0%, '.concat(o, '%)')),
        m = w(u, a),
        f = w(h, a),
        x = new d.Z(n).to(a),
        p = new d.Z(n).to(a);
    E(x, a, f), E(p, a, m);
    let g = x.range(p, {
        space: a,
        outputSpace: l ? 'P3' : 'sRGB'
    });
    return Object.fromEntries(
        Array.from({ length: r }, (e, n) => {
            let a = (function (e, t, n) {
                switch (e) {
                    case 'Linear':
                        return k(t);
                    case 'Ease In':
                        return R(t, n);
                    case 'Ease Out':
                        return Z(t, n);
                    case 'Ease In Out':
                        return O(t, n);
                }
            })(c, n / r, s);
            return [''.concat(t, '-').concat(n), g(a)];
        })
    );
}
function L(e, t, n) {
    n((n) =>
        null == n.scales.find((t) => t.name === e)
            ? n
            : {
                  ...n,
                  scales: n.scales.map((n) => (n.name === e ? t(n) : n))
              }
    );
}
function P(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            darkness: t
        }),
        n
    );
}
function M(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            lightness: t
        }),
        n
    );
}
function D(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            base: t
        }),
        n
    );
}
function F(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            colorSpace: t
        }),
        n
    );
}
function U(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            easing: t
        }),
        n
    );
}
function G(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            easingStrength: t
        }),
        n
    );
}
function H(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            showColumnarPalettePreview: t
        }),
        n
    );
}
function z(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            useP3ColorSpace: t
        }),
        n
    );
}
function V(e, t, n) {
    L(
        e,
        (e) => ({
            ...e,
            steps: t
        }),
        n
    );
}
