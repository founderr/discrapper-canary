n.d(t, {
    p: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(180081),
    o = n(481060),
    l = n(436774),
    u = n(197115),
    c = n(474936),
    d = n(32986);
function _(e) {
    let { showUpsell: t, upsellText: n, ctaText: i, ctaAnalyticsObject: _, className: E, showShadow: f = !0, position: h = 'floating' } = e,
        p = (0, o.useSpring)({
            transform: t ? 'translateY(0%)' : 'translateY(120%)',
            opacity: t ? 1 : 0,
            config: {
                tension: 120,
                friction: 14
            }
        });
    return (0, r.jsxs)(s.animated.div, {
        style: { ...p },
        className: a()(
            d.upsellContainer,
            {
                [d.upsellContainerShadow]: f,
                [d.upsellContainerFloating]: 'floating' === h,
                [d.upsellContainerInline]: 'inline' === h
            },
            E
        ),
        children: [
            (0, r.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: l.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                className: d.upsellText,
                children: n
            }),
            (0, r.jsx)(u.Z, {
                className: d.upsellButton,
                size: o.ButtonSizes.TINY,
                shinyButtonClassName: d.upsellButton,
                subscriptionTier: c.Si.TIER_2,
                buttonText: i,
                premiumModalAnalyticsLocation: _,
                tabIndex: t ? 0 : -1
            })
        ]
    });
}
