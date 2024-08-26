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
    u = n(214852),
    E = n(626135),
    T = n(314684),
    I = n(794484),
    R = n(347475),
    C = n(342414),
    g = n(938736),
    N = n(391110),
    p = n(71363),
    A = n(781800),
    m = n(981631),
    f = n(396001),
    S = n(865215);
t.Z = () => {
    (0, u.z)(_.X);
    let e = a.useRef(null),
        [t, n] = a.useState(!1),
        { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [h, M] = a.useState(!1);
    (0, T.FM)();
    let x = (0, g.bD)('SubscriberNitroHome');
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.AdvancedScrollerAuto, {
                className: f.mainPageScroller,
                ref: e,
                children: (0, s.jsx)('div', {
                    className: f.container,
                    children: (0, s.jsxs)(d.Gt, {
                        value: r,
                        children: [
                            (0, s.jsx)(C.Z, {
                                className: f.heroHeading,
                                location: N.MQ.HOME
                            }),
                            (0, s.jsx)(I.Z, {
                                variant: N.R0.WHATS_NEW,
                                className: i()(f.whatsNew, { [f.whatsNewWithOriginalHeroHeading]: !x }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, s.jsx)(I.Z, {
                                className: f.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, s.jsx)(A.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: N.MQ.HOME
                                })
                            }),
                            (0, s.jsx)(R.Z, {
                                className: f.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: m.ZY5.NITRO_HOME,
                                    section: m.jXE.GIFT_BANNER
                                }
                            }),
                            (0, s.jsx)('div', { className: f.footerSpacing }),
                            (0, s.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !h && (E.default.track(m.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), M(!0));
                                },
                                children: (0, s.jsx)('div', { className: f.bottomOfPageVisibilitySensor })
                            }),
                            (0, s.jsx)(o.Image, {
                                src: S,
                                className: f.bottomIllustration,
                                width: 112,
                                height: 85,
                                zoomable: !1
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
