t.d(n, {
    Z: function () {
        return h;
    }
});
var r = t(200651);
t(192379);
var a = t(249849),
    i = t(907561),
    o = t(388032),
    s = t(114266);
let l = ['#0089d9'],
    c = ['#ff9e32', '#b4eefc', '#ffffff', '#804f19'],
    d = [0.2],
    u = [
        {
            base: 8,
            tint: 1
        }
    ],
    m = [0.45, 0.7, 1, 0.3],
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
            base: 10,
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
        'aria-label': o.intl.string(o.t.nH6S2d),
        width: n,
        height: t,
        viewBox: '0 0 '.concat(i.Km, ' ').concat(i.md),
        children: [
            (0, r.jsx)('defs', { children: (0, r.jsx)('style', { children: b }) }),
            (0, r.jsx)('use', {
                href: ''.concat(s, '#wrapper-layer'),
                id: v
            })
        ]
    });
}
