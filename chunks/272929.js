n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(752877),
    r = n(481060),
    a = n(871499),
    s = n(388032),
    o = n(983351);
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
function d(e) {
    let { totalCooldownSeconds: t, remainingCooldownSeconds: n, onClick: d, onKeyDown: u, onMouseEnter: h, onMouseLeave: p, isActive: m = !1, isCenterButton: f = !1, ...g } = e,
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
        v = C ? s.intl.formatToPlainString(s.t.D8Drx8, { seconds: n }) : void 0,
        _ = f ? a.d : a.Z;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            C ? (0, i.jsx)(c, { percentComplete: x.percentComplete }) : null,
            (0, i.jsx)(_, {
                ...g,
                disabled: C,
                label: v,
                iconComponent: r.ReactionIcon,
                onClick: d,
                onKeyDown: u,
                onMouseEnter: h,
                onMouseLeave: p,
                isActive: m,
                grow: !1
            })
        ]
    });
}
