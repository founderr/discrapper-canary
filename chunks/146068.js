t.d(n, {
    Z: function () {
        return h;
    }
});
var r = t(200651);
t(192379);
var a = t(249849),
    i = t(907561),
    s = t(388032),
    o = t(585025);
let l = ['#0fa3dd', '#a7e4e4', '#a2ccdd'],
    c = ['#0b3215', '#a6b51a', '#35748a', '#65a88f', '#621c12', '#f96748', '#ffbbbb'],
    d = [0.25, 0.9, 0.9],
    u = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 14,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        }
    ],
    m = [0.05, 0.4, 0.15, 0.33, 0.1, 0.3, 0.6],
    f = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ];
function h(e) {
    let { width: n, height: t, primaryTintColor: h, secondaryTintColor: x, ...p } = e,
        { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0, a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f
        }),
        { styleContent: b, containerId: v } = (0, i.bC)(g, C);
    return (0, r.jsxs)('svg', {
        ...p,
        'aria-label': s.intl.string(s.t.nH6S2d),
        width: n,
        height: t,
        viewBox: '0 0 '.concat(i.Km, ' ').concat(i.md),
        children: [
            (0, r.jsxs)('defs', {
                children: [
                    (0, r.jsx)('defs', {
                        children: (0, r.jsxs)('linearGradient', {
                            id: 'sky-gradient',
                            x1: '0',
                            x2: '1',
                            y1: '0',
                            y2: '1',
                            children: [
                                (0, r.jsx)('stop', {
                                    stopColor: g[2],
                                    offset: '0%'
                                }),
                                (0, r.jsx)('stop', {
                                    stopColor: g[0],
                                    offset: '100%'
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)('style', { children: b })
                ]
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#sky'),
                style: { fill: 'url(#sky-gradient)' }
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#wrapper-layer'),
                id: v
            })
        ]
    });
}
