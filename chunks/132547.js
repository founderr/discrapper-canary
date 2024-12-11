n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(464824),
    m = n(214852),
    g = n(626135),
    f = n(533525),
    p = n(314684),
    _ = n(794484),
    h = n(536844),
    E = n(342414),
    b = n(938736),
    x = n(391110),
    C = n(71363),
    T = n(781800),
    v = n(981631),
    N = n(388032),
    I = n(368549),
    S = n(865215);
let R = 'SubscriberNitroHome';
t.Z = () => {
    (0, m.z)(u.X);
    let e = r.useRef(null),
        [t, n] = r.useState(!1),
        { analyticsLocations: a } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [A, j] = r.useState(!1);
    (0, p.FM)();
    let P = (0, f.b)(R),
        Z = (0, b.TW)(R);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.AdvancedScrollerAuto, {
                className: I.mainPageScroller,
                ref: e,
                children: (0, i.jsx)('div', {
                    className: I.container,
                    children: (0, i.jsxs)(d.Gt, {
                        value: a,
                        children: [
                            (0, i.jsx)(E.Z, {
                                className: I.heroHeading,
                                location: x.MQ.HOME
                            }),
                            (0, i.jsx)(_.Z, {
                                variant: x.R0.WHATS_NEW,
                                className: s()(I.whatsNew, { [I.whatsNewWithOriginalHeroHeading]: !(P || Z) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, i.jsx)(_.Z, {
                                className: I.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, i.jsx)(T.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: x.MQ.HOME
                                })
                            }),
                            (0, i.jsx)(h.Z, {
                                className: I.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: v.ZY5.NITRO_HOME,
                                    section: v.jXE.GIFT_BANNER
                                }
                            }),
                            (0, i.jsx)('div', { className: I.footerSpacing }),
                            (0, i.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !A && (g.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: a }), j(!0));
                                },
                                children: (0, i.jsx)('div', { className: I.bottomOfPageVisibilitySensor })
                            }),
                            (0, i.jsx)('img', {
                                src: S,
                                className: I.bottomIllustration,
                                width: 112,
                                height: 85,
                                alt: N.intl.string(N.t.X4IxWF)
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)(C.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: x.MQ.HOME
            })
        ]
    });
};
