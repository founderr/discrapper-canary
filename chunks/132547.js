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
    R = n(536844),
    g = n(342414),
    N = n(938736),
    C = n(391110),
    m = n(71363),
    p = n(781800),
    A = n(981631),
    f = n(689938),
    h = n(170367),
    M = n(865215);
let S = 'SubscriberNitroHome';
t.Z = () => {
    (0, u.z)(_.X);
    let e = a.useRef(null),
        [t, n] = a.useState(!1),
        { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, b] = a.useState(!1);
    (0, T.FM)();
    let O = (0, N.bD)(S),
        P = (0, N.TW)(S);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.AdvancedScrollerAuto, {
                className: h.mainPageScroller,
                ref: e,
                children: (0, s.jsx)('div', {
                    className: h.container,
                    children: (0, s.jsxs)(d.Gt, {
                        value: r,
                        children: [
                            (0, s.jsx)(g.Z, {
                                className: h.heroHeading,
                                location: C.MQ.HOME
                            }),
                            (0, s.jsx)(I.Z, {
                                variant: C.R0.WHATS_NEW,
                                className: i()(h.whatsNew, { [h.whatsNewWithOriginalHeroHeading]: !(O || P) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, s.jsx)(I.Z, {
                                className: h.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, s.jsx)(p.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: C.MQ.HOME
                                })
                            }),
                            (0, s.jsx)(R.Z, {
                                className: h.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: A.ZY5.NITRO_HOME,
                                    section: A.jXE.GIFT_BANNER
                                }
                            }),
                            (0, s.jsx)('div', { className: h.footerSpacing }),
                            (0, s.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !x && (E.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), b(!0));
                                },
                                children: (0, s.jsx)('div', { className: h.bottomOfPageVisibilitySensor })
                            }),
                            (0, s.jsx)('img', {
                                src: M,
                                className: h.bottomIllustration,
                                width: 112,
                                height: 85,
                                alt: f.Z.Messages.IMAGE
                            })
                        ]
                    })
                })
            }),
            (0, s.jsx)(m.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: C.MQ.HOME
            })
        ]
    });
};
