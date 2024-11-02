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
    o = t(444816);
let l = ['#2d456e', '#395788', '#486ead', '#4f7ac2', '#5989d9', '#729bdd', '#96b3e3', '#b5c9e9', '#e0e0e2'],
    c = ['#f7931e'],
    d = [0.05, 0.09, 0.15, 0.2, 0.25, 0.33, 0.44, 0.57, 0.95],
    u = [
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 4,
            tint: 1
        },
        {
            base: 7,
            tint: 1
        }
    ],
    m = [0.4],
    f = [
        {
            base: 1,
            tint: 5
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
            (0, r.jsx)('defs', { children: (0, r.jsx)('style', { children: b }) }),
            (0, r.jsx)('use', {
                href: ''.concat(o, '#wrapper-layer'),
                id: v
            })
        ]
    });
}
