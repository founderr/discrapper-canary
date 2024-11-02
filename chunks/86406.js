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
    o = t(408263);
let l = ['#00ff00'],
    c = ['#000000', '#ed1c24'],
    d = [0.7],
    u = [
        {
            base: 1,
            tint: 2
        }
    ],
    m = [0, 0.2],
    f = [
        {
            base: 1,
            tint: 0
        },
        {
            base: 1,
            tint: 4
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
                            id: 'line-gradient',
                            x1: '0',
                            x2: '1',
                            y1: '0',
                            y2: '1',
                            children: [
                                (0, r.jsx)('stop', {
                                    stopColor: C[1],
                                    offset: '0%'
                                }),
                                (0, r.jsx)('stop', {
                                    stopColor: g[0],
                                    offset: '50%'
                                }),
                                (0, r.jsx)('stop', {
                                    stopColor: g[0],
                                    offset: '80%'
                                }),
                                (0, r.jsx)('stop', {
                                    stopColor: C[1],
                                    offset: '100%'
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)('style', { children: b })
                ]
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#wrapper-layer'),
                id: v
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#heightmap-lines-0'),
                style: { fill: 'url(#line-gradient)' }
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#heightmap-lines-1'),
                style: { fill: 'url(#line-gradient)' }
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#heightmap-lines-2'),
                style: { fill: 'url(#line-gradient)' }
            })
        ]
    });
}
