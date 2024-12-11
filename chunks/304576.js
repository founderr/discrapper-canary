var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(357355),
    u = n(140465),
    m = n(775412),
    g = n(650032),
    f = n(104494),
    p = n(639119),
    _ = n(105759),
    h = n(346497),
    E = n(422034),
    b = n(710220),
    x = n(318747),
    C = n(635921),
    T = n(474936),
    v = n(388032),
    N = n(337307);
let I = (e) => {
    let t,
        { trialOffer: n, discountOffer: r } = e;
    if ((null != n ? (t = v.intl.string(v.t.IBYG5e)) : null != r && (t = v.intl.formatToPlainString(v.t.iiLbvr, { percent: r.discount.amount })), null != t))
        return (0, i.jsx)('div', {
            className: N.premiumOfferPill,
            children: (0, i.jsx)(l.Text, {
                variant: 'redesign/heading-18/bold',
                color: 'always-white',
                children: t
            })
        });
};
t.Z = (e) => {
    var t, n;
    let { isFullscreen: r, className: S, buttonClassName: R, subscriptionTier: A, entrypoint: j, isDarkMode: P } = e,
        { analyticsLocations: Z } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        M = (0, m._O)(),
        B = (0, f.Ng)(),
        O = (0, f.Wp)(B, T.Si.TIER_2) ? T.Si.TIER_2 : void 0,
        w = (0, p.N)(),
        k = (0, u.Nx)(),
        y = (0, h.Vi)(),
        L = (0, s.e7)([d.Z], () => d.Z.affinities),
        U = (0, _.Z)(),
        { enabled: D } = g._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        H = j === T.EZ.ApplicationStoreHome && null != U && D,
        G = L.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: Z,
        children: (0, i.jsx)('div', {
            className: a()(N.container, N.marketingPageV2Container, S),
            'data-testid': 'v2-marketing-page-hero-header',
            children: (0, i.jsxs)('div', {
                className: N.marketingPageV2TextContainer,
                children: [
                    k &&
                        (0, i.jsx)(I, {
                            trialOffer: w,
                            discountOffer: B
                        }),
                    (0, i.jsx)(l.Heading, {
                        className: N.marketingPageV2Heading,
                        variant: 'display-sm',
                        color: 'header-primary',
                        children: v.intl.string(v.t.YCZldH)
                    }),
                    H
                        ? (0, i.jsx)(b.Z, {
                              referrer: U,
                              isMarketingPageV2Enabled: !0
                          })
                        : G &&
                          (0, i.jsx)('div', {
                              className: a()(N.affinityDescriptionV2),
                              children: (0, i.jsx)(E.Z, {
                                  textColor: 'text-normal',
                                  smallerText: !r,
                                  isMarketingPageV2Enabled: !0
                              })
                          }),
                    y || M
                        ? (0, i.jsx)('div', {
                              className: a()(N.buttonContainer, N.marketingPageV2CTAContainer, { [N.marketingPageV2CTAMargin]: !(G || H) }),
                              children: (0, i.jsx)(x.Z, {
                                  className: a()(N.button, R),
                                  forceWhite: !0
                              })
                          })
                        : (0, i.jsx)(C.PK, {
                              subscriptionTier: null !== (n = null != A ? A : null == w ? void 0 : null === (t = w.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : O,
                              inOfferExperience: k,
                              containerClassName: a()(N.marketingPageV2CTAContainer, { [N.marketingPageV2CTAMargin]: !(G || H) }),
                              buttonClassName: R,
                              isMarketingPageV2Enabled: !0,
                              isDarkMode: P
                          }),
                    (0, i.jsx)(C._O, {
                        variant: 'text-md/normal',
                        withBottomMargin: !1,
                        isMarketingPageV2Enabled: !0
                    })
                ]
            })
        })
    });
};
