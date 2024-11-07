n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(622535),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(433811),
    g = n(214852),
    m = n(626135),
    f = n(314684),
    p = n(794484),
    _ = n(536844),
    h = n(342414),
    x = n(938736),
    E = n(391110),
    b = n(71363),
    C = n(781800),
    v = n(981631),
    T = n(388032),
    N = n(255591),
    I = n(865215);
let S = 'SubscriberNitroHome';
t.Z = () => {
    (0, g.z)(u.X);
    let e = r.useRef(null),
        [t, n] = r.useState(!1),
        { analyticsLocations: a } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [R, A] = r.useState(!1);
    (0, f.FM)();
    let j = (0, x.bD)(S),
        P = (0, x.TW)(S);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.AdvancedScrollerAuto, {
                className: N.mainPageScroller,
                ref: e,
                children: (0, i.jsx)('div', {
                    className: N.container,
                    children: (0, i.jsxs)(d.Gt, {
                        value: a,
                        children: [
                            (0, i.jsx)(h.Z, {
                                className: N.heroHeading,
                                location: E.MQ.HOME
                            }),
                            (0, i.jsx)(p.Z, {
                                variant: E.R0.WHATS_NEW,
                                className: s()(N.whatsNew, { [N.whatsNewWithOriginalHeroHeading]: !(j || P) }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, i.jsx)(p.Z, {
                                className: N.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, i.jsx)(C.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: E.MQ.HOME
                                })
                            }),
                            (0, i.jsx)(_.Z, {
                                className: N.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: v.ZY5.NITRO_HOME,
                                    section: v.jXE.GIFT_BANNER
                                }
                            }),
                            (0, i.jsx)('div', { className: N.footerSpacing }),
                            (0, i.jsx)(l.$, {
                                onChange: (e) => {
                                    e && !R && (m.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: a }), A(!0));
                                },
                                children: (0, i.jsx)('div', { className: N.bottomOfPageVisibilitySensor })
                            }),
                            (0, i.jsx)('img', {
                                src: I,
                                className: N.bottomIllustration,
                                width: 112,
                                height: 85,
                                alt: T.intl.string(T.t.X4IxWF)
                            })
                        ]
                    })
                })
            }),
            (0, i.jsx)(b.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: E.MQ.HOME
            })
        ]
    });
};
