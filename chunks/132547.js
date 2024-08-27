n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(433811),
    E = n(214852),
    u = n(626135),
    T = n(314684),
    I = n(794484),
    R = n(347475),
    C = n(342414),
    g = n(938736),
    N = n(391110),
    p = n(71363),
    A = n(781800),
    m = n(981631),
    f = n(689938),
    S = n(396001),
    h = n(865215);
t.Z = () => {
    (0, E.z)(_.X);
    let e = a.useRef(null),
        [t, n] = a.useState(!1),
        { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [M, x] = a.useState(!1);
    (0, T.FM)();
    let O = (0, g.bD)('SubscriberNitroHome');
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.AdvancedScrollerAuto, {
                className: S.mainPageScroller,
                ref: e,
                children: (0, s.jsx)('div', {
                    className: S.container,
                    children: (0, s.jsxs)(d.Gt, {
                        value: r,
                        children: [
                            (0, s.jsx)(C.Z, {
                                className: S.heroHeading,
                                location: N.MQ.HOME
                            }),
                            (0, s.jsx)(I.Z, {
                                variant: N.R0.WHATS_NEW,
                                className: i()(S.whatsNew, { [S.whatsNewWithOriginalHeroHeading]: !O }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, s.jsx)(I.Z, {
                                className: S.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, s.jsx)(A.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: N.MQ.HOME
                                })
                            }),
                            (0, s.jsx)(R.Z, {
                                className: S.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: m.ZY5.NITRO_HOME,
                                    section: m.jXE.GIFT_BANNER
                                }
                            }),
                            (0, s.jsx)('div', { className: S.footerSpacing }),
                            (0, s.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !M && (u.default.track(m.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), x(!0));
                                },
                                children: (0, s.jsx)('div', { className: S.bottomOfPageVisibilitySensor })
                            }),
                            (0, s.jsx)('img', {
                                src: h,
                                className: S.bottomIllustration,
                                width: 112,
                                height: 85,
                                alt: f.Z.Messages.IMAGE
                            })
                        ]
                    })
                })
            }),
            (0, s.jsx)(p.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: N.MQ.HOME
            })
        ]
    });
};
