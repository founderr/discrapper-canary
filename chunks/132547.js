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
    m = n(342414),
    N = n(938736),
    g = n(391110),
    C = n(71363),
    p = n(781800),
    f = n(981631),
    A = n(689938),
    h = n(170367),
    S = n(865215);
let M = 'SubscriberNitroHome';
t.Z = () => {
    (0, u.z)(_.X);
    let e = a.useRef(null),
        [t, n] = a.useState(!1),
        { analyticsLocations: r } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, b] = a.useState(!1);
    (0, T.FM)();
    let O = (0, N.bD)(M),
        v = (0, N.TW)(M);
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
                            (0, s.jsx)(m.Z, {
                                className: h.heroHeading,
                                location: g.MQ.HOME
                            }),
                            (0, s.jsx)(I.Z, {
                                variant: g.R0.WHATS_NEW,
                                className: i()(h.whatsNew, { [h.whatsNewWithOriginalHeroHeading]: !(O || v) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, s.jsx)(I.Z, {
                                className: h.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, s.jsx)(p.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: g.MQ.HOME
                                })
                            }),
                            (0, s.jsx)(R.Z, {
                                className: h.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: f.ZY5.NITRO_HOME,
                                    section: f.jXE.GIFT_BANNER
                                }
                            }),
                            (0, s.jsx)('div', { className: h.footerSpacing }),
                            (0, s.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !x && (E.default.track(f.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), b(!0));
                                },
                                children: (0, s.jsx)('div', { className: h.bottomOfPageVisibilitySensor })
                            }),
                            (0, s.jsx)('img', {
                                src: S,
                                className: h.bottomIllustration,
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
                previousComponent: g.MQ.HOME
            })
        ]
    });
};
