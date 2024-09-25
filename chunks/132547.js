n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(622535),
    l = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(433811),
    u = n(214852),
    E = n(626135),
    T = n(314684),
    I = n(794484),
    R = n(536844),
    m = n(342414),
    g = n(938736),
    N = n(391110),
    C = n(71363),
    p = n(781800),
    f = n(981631),
    A = n(689938),
    S = n(170367),
    M = n(865215);
let h = 'SubscriberNitroHome';
t.Z = () => {
    (0, u.z)(_.X);
    let e = a.useRef(null),
        [t, n] = a.useState(!1),
        { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, b] = a.useState(!1);
    (0, T.FM)();
    let O = (0, g.bD)(h),
        P = (0, g.TW)(h);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.AdvancedScrollerAuto, {
                className: S.mainPageScroller,
                ref: e,
                children: (0, s.jsx)('div', {
                    className: S.container,
                    children: (0, s.jsxs)(d.Gt, {
                        value: r,
                        children: [
                            (0, s.jsx)(m.Z, {
                                className: S.heroHeading,
                                location: N.MQ.HOME
                            }),
                            (0, s.jsx)(I.Z, {
                                variant: N.R0.WHATS_NEW,
                                className: i()(S.whatsNew, { [S.whatsNewWithOriginalHeroHeading]: !(O || P) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, s.jsx)(I.Z, {
                                className: S.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, s.jsx)(p.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: N.MQ.HOME
                                })
                            }),
                            (0, s.jsx)(R.Z, {
                                className: S.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: f.ZY5.NITRO_HOME,
                                    section: f.jXE.GIFT_BANNER
                                }
                            }),
                            (0, s.jsx)('div', { className: S.footerSpacing }),
                            (0, s.jsx)(o.$, {
                                onChange: (e) => {
                                    e && !x && (E.default.track(f.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), b(!0));
                                },
                                children: (0, s.jsx)('div', { className: S.bottomOfPageVisibilitySensor })
                            }),
                            (0, s.jsx)('img', {
                                src: M,
                                className: S.bottomIllustration,
                                width: 112,
                                height: 85,
                                alt: A.Z.Messages.IMAGE
                            })
                        ]
                    })
                })
            }),
            (0, s.jsx)(C.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: N.MQ.HOME
            })
        ]
    });
};
