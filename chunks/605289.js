var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(442837),
    l = n(481060),
    o = n(706454),
    c = n(78839),
    _ = n(985754),
    d = n(222727),
    E = n(318747),
    u = n(409100),
    T = n(474936),
    I = n(981631),
    R = n(273553);
t.Z = function (e) {
    let { localizedPricingPromo: t, smallGap: n } = e,
        a = t.countryCode,
        g = (0, i.e7)([o.default], () => o.default.locale);
    (0, d.U)(I.jXE.SETTINGS_PREMIUM_BANNER, a);
    let N = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerHeader: m, localizedPricingBannerBody: C } = (0, _.vB)({
            localizedPricingPromo: t,
            subscription: N,
            userLocale: g
        }),
        A = a.toLowerCase() + 'Banner';
    return (0, s.jsxs)('div', {
        className: r()(R.bannerContainer, {
            [R.smallGap]: n,
            [R.bigGap]: !n
        }),
        children: [
            (0, s.jsx)('div', { className: r()(R[A], R.bannerImageContainer) }),
            (0, s.jsx)(l.Heading, {
                className: R.bannerHeading,
                variant: 'heading-xl/semibold',
                children: m
            }),
            (0, s.jsx)('div', {
                className: R.textContainer,
                children: (0, s.jsx)(l.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: R.bannerBody,
                    children: C
                })
            }),
            (0, s.jsxs)('div', {
                className: R.ctaButtonContainer,
                children: [
                    (0, s.jsx)(u.Z, {
                        forceInverted: !0,
                        className: R.ctaButton,
                        subscriptionTier: T.Si.TIER_2
                    }),
                    (0, s.jsx)(E.Z, {
                        forceWhite: !0,
                        subscriptionTier: T.Si.TIER_2,
                        className: R.ctaButton
                    })
                ]
            })
        ]
    });
};
