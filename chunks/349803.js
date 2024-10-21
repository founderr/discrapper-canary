var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(100621),
    l = n(481060),
    o = n(104494),
    c = n(639119),
    _ = n(318747),
    d = n(409100),
    E = n(474936),
    u = n(981631),
    T = n(774946);
t.Z = function (e) {
    var t, n;
    let { isVisible: a, isFullscreen: I, subscriptionTier: R } = e,
        g = null === (t = (0, c.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        N = (0, o.Ng)(),
        m = (0, o.Wp)(N, E.Si.TIER_2) ? E.Si.TIER_2 : void 0,
        C = (0, l.useSpring)({
            transform: a ? 'translateY(-100%)' : 'translateY(0%)',
            opacity: a ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        }),
        A = { section: u.jXE.MARKETING_FLOATING_CTA };
    return (0, s.jsx)(i.animated.div, {
        className: r()(T.wrapper, {
            [T.fullscreenWrapper]: I,
            [T.invisible]: !a
        }),
        style: C,
        children: (0, s.jsxs)('div', {
            className: T.innerWrapper,
            children: [
                (0, s.jsx)(d.Z, {
                    className: T.button,
                    subscriptionTier: null !== (n = null != R ? R : null == g ? void 0 : g.sku_id) && void 0 !== n ? n : m,
                    premiumModalAnalyticsLocation: A,
                    isPersistentCTA: !0
                }),
                (0, s.jsx)(_.Z, {
                    className: T.button,
                    premiumModalAnalyticsLocation: A
                })
            ]
        })
    });
};
