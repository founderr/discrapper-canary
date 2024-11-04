n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(100621),
    r = n(481060),
    s = n(871499),
    a = n(388032),
    o = n(305705);
let c = (0, l.animated)((e) => {
    let { percentComplete: t } = e,
        n = 20;
    return (0, i.jsx)('svg', {
        className: o.countdown,
        width: 40,
        height: 40,
        viewBox: '0 0 '.concat(40, ' ').concat(40),
        children: (0, i.jsx)('circle', {
            style: { strokeDashoffset: Math.round(100 * t) },
            className: o.progress,
            cx: n,
            cy: n,
            r: n - 6,
            fill: 'none',
            stroke: '#4F545C',
            pathLength: '100'
        })
    });
});
function u(e) {
    let { totalCooldownSeconds: t, remainingCooldownSeconds: n, onClick: u, onKeyDown: d, onMouseEnter: h, onMouseLeave: m, isActive: p = !1, isCenterButton: f = !1, ...g } = e,
        C = n > 0,
        x = (0, r.useSpring)(
            {
                percentComplete: 0 !== n ? (t - n) / t : 0,
                config: {
                    ...l.config.molasses,
                    duration: 1000
                }
            },
            'animate-always'
        ),
        v = C ? a.intl.formatToPlainString(a.t.D8Drx8, { seconds: n }) : void 0,
        _ = f ? s.d : s.Z;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            C ? (0, i.jsx)(c, { percentComplete: x.percentComplete }) : null,
            (0, i.jsx)(_, {
                ...g,
                disabled: C,
                label: v,
                iconComponent: r.ReactionIcon,
                onClick: u,
                onKeyDown: d,
                onMouseEnter: h,
                onMouseLeave: m,
                isActive: p,
                grow: !1
            })
        ]
    });
}
