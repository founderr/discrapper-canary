n.d(t, {
    p: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(100621),
    o = n(481060),
    l = n(436774),
    u = n(197115),
    c = n(474936),
    d = n(167805);
function f(e) {
    let { showUpsell: t, text: n, textVariant: i, button: f, buttonAnalyticsObject: _, className: h, onSubscribeModalClose: p, showShadow: m = !0, position: g = 'floating' } = e,
        E = (0, o.useSpring)({
            transform: t ? 'translateY(0%)' : 'translateY(120%)',
            opacity: t ? 1 : 0,
            config: {
                tension: 120,
                friction: 14
            }
        });
    return (0, r.jsxs)(s.animated.div, {
        style: { ...E },
        className: a()(
            d.upsellContainer,
            {
                [d.upsellContainerShadow]: m,
                [d.upsellContainerFloating]: 'floating' === g,
                [d.upsellContainerInline]: 'inline' === g
            },
            h
        ),
        children: [
            (0, r.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: l.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(o.Text, {
                variant: null != i ? i : 'text-sm/medium',
                color: 'header-primary',
                className: d.upsellText,
                children: n
            }),
            'string' == typeof f
                ? (0, r.jsx)(u.Z, {
                      className: d.upsellButton,
                      shinyButtonClassName: d.upsellButton,
                      subscriptionTier: c.Si.TIER_2,
                      buttonText: f,
                      premiumModalAnalyticsLocation: _,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: p
                  })
                : f
        ]
    });
}
