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
    o = t(409814);
let l = ['#cc99ff', '#ffffff'],
    c = ['#2d3dee', '#ffffff'],
    d = [0.3, 1],
    u = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        }
    ],
    m = [0.3, 1],
    f = [
        {
            base: 2,
            tint: 1
        },
        {
            base: 5,
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
                    (0, r.jsxs)('defs', {
                        children: [
                            (0, r.jsxs)('radialGradient', {
                                id: 'fog-gradient-primary',
                                cx: '.5',
                                cy: '.5',
                                r: '.6',
                                fx: '.76',
                                fy: '.33',
                                spreadMethod: 'pad',
                                children: [
                                    (0, r.jsx)('stop', {
                                        stopColor: g[1],
                                        offset: '0%'
                                    }),
                                    (0, r.jsx)('stop', {
                                        stopColor: g[0],
                                        offset: '70%'
                                    })
                                ]
                            }),
                            (0, r.jsxs)('radialGradient', {
                                id: 'fog-gradient-secondary',
                                cx: '.5',
                                cy: '.5',
                                r: '.6',
                                fx: '.76',
                                fy: '.33',
                                spreadMethod: 'pad',
                                children: [
                                    (0, r.jsx)('stop', {
                                        stopColor: C[1],
                                        offset: '0%'
                                    }),
                                    (0, r.jsx)('stop', {
                                        stopColor: C[0],
                                        offset: '70%'
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('style', { children: b })
                ]
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#wrapper-layer'),
                id: v
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#clan-banner-warp-tunnel-secondary'),
                style: { fill: 'url(#fog-gradient-secondary)' }
            }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#clan-banner-warp-tunnel-primary'),
                style: { fill: 'url(#fog-gradient-primary)' }
            })
        ]
    });
}
