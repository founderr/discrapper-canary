var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(706454),
    c = n(78839),
    d = n(985754),
    u = n(222727),
    g = n(318747),
    m = n(409100),
    f = n(474936),
    _ = n(981631),
    p = n(273553);
t.Z = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        r = t.countryCode,
        h = (0, s.e7)([o.default], () => o.default.locale);
    (0, u.U)(_.jXE.SETTINGS_PREMIUM_BANNER, r);
    let E = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: b, localizedPricingBannerBody: x } = (0, d.vB)({
            localizedPricingPromo: t,
            subscription: E,
            userLocale: h
        }),
        C = r.toLowerCase() + 'Banner';
    return (0, i.jsxs)('div', {
        className: a()(p.bannerContainer, {
            [p.smallGap]: n,
            [p.bigGap]: !n
        }),
        children: [
            (0, i.jsx)('div', { className: a()(p[C], p.bannerImageContainer) }),
            (0, i.jsx)(l.Heading, {
                className: p.bannerHeading,
                variant: 'heading-xl/semibold',
                children: b
            }),
            (0, i.jsx)('div', {
                className: p.textContainer,
                children: (0, i.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: p.bannerBody,
                    children: x
                })
            }),
            (0, i.jsxs)('div', {
                className: p.ctaButtonContainer,
                children: [
                    (0, i.jsx)(m.Z, {
                        forceInverted: !0,
                        className: p.ctaButton,
                        subscriptionTier: f.Si.TIER_2
                    }),
                    (0, i.jsx)(g.Z, {
                        forceWhite: !0,
                        subscriptionTier: f.Si.TIER_2,
                        className: p.ctaButton
                    })
                ]
            })
        ]
    });
};
