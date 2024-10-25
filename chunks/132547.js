n(47120);
var s = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    _ = n(906732),
    d = n(433811),
    E = n(214852),
    u = n(626135),
    T = n(314684),
    I = n(794484),
    R = n(536844),
    g = n(342414),
    N = n(938736),
    m = n(391110),
    C = n(71363),
    A = n(781800),
    p = n(981631),
    f = n(689938),
    M = n(170367),
    S = n(865215);
let h = 'SubscriberNitroHome';
t.Z = () => {
    (0, E.z)(d.X);
    let e = a.useRef(null),
        [t, n] = a.useState(!1),
        { analyticsLocations: r } = (0, _.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, b] = a.useState(!1);
    (0, T.FM)();
    let O = (0, N.bD)(h),
        P = (0, N.TW)(h);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.AdvancedScrollerAuto, {
                className: M.mainPageScroller,
                ref: e,
                children: (0, s.jsx)('div', {
                    className: M.container,
                    children: (0, s.jsxs)(_.Gt, {
                        value: r,
                        children: [
                            (0, s.jsx)(g.Z, {
                                className: M.heroHeading,
                                location: m.MQ.HOME
                            }),
                            (0, s.jsx)(I.Z, {
                                variant: m.R0.WHATS_NEW,
                                className: i()(M.whatsNew, { [M.whatsNewWithOriginalHeroHeading]: !(O || P) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, s.jsx)(I.Z, {
                                className: M.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, s.jsx)(A.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: m.MQ.HOME
                                })
                            }),
                            (0, s.jsx)(R.Z, {
                                className: M.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: p.ZY5.NITRO_HOME,
                                    section: p.jXE.GIFT_BANNER
                                }
                            }),
                            (0, s.jsx)('div', { className: M.footerSpacing }),
                            (0, s.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !x && (u.default.track(p.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), b(!0));
                                },
                                children: (0, s.jsx)('div', { className: M.bottomOfPageVisibilitySensor })
                            }),
                            (0, s.jsx)('img', {
                                src: S,
                                className: M.bottomIllustration,
                                width: 112,
                                height: 85,
                                alt: f.Z.Messages.IMAGE
                            })
                        ]
                    })
                })
            }),
            (0, s.jsx)(C.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: m.MQ.HOME
            })
        ]
    });
};
