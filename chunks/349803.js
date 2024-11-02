var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(100621),
    l = n(481060),
    o = n(104494),
    c = n(639119),
    d = n(318747),
    u = n(409100),
    g = n(474936),
    m = n(981631),
    f = n(774946);
t.Z = function (e) {
    var t, n;
    let { isVisible: r, isFullscreen: p, subscriptionTier: _ } = e,
        h = null === (t = (0, c.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        x = (0, o.Ng)(),
        E = (0, o.Wp)(x, g.Si.TIER_2) ? g.Si.TIER_2 : void 0,
        b = (0, l.useSpring)({
            transform: r ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: r ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        C = { section: m.jXE.MARKETING_FLOATING_CTA };
    return (0, i.jsx)(s.animated.div, {
        className: a()(f.wrapper, {
            [f.fullscreenWrapper]: p,
            [f.invisible]: !r
        }),
        style: b,
        children: (0, i.jsxs)('div', {
            className: f.innerWrapper,
            children: [
                (0, i.jsx)(u.Z, {
                    className: f.button,
                    subscriptionTier: null !== (n = null != _ ? _ : null == h ? void 0 : h.sku_id) && void 0 !== n ? n : E,
                    premiumModalAnalyticsLocation: C,
                    isPersistentCTA: !0
                }),
                (0, i.jsx)(d.Z, {
                    className: f.button,
                    premiumModalAnalyticsLocation: C
                })
            ]
        })
    });
};
