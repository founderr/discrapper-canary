n(724458), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    f = n(410154),
    p = n(626135),
    _ = n(103433),
    h = n(166021),
    E = n(32173),
    b = n(391110),
    x = n(75077),
    C = n(981631),
    T = n(388032),
    v = n(368549),
    N = n(865215);
t.Z = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: I, previousComponent: S, isFullScreen: R } = e,
        j = r.useRef(null),
        A = Object.entries((0, E.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: P } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [Z, M] = r.useState(!1),
        B = (0, f.ZP)('perks-discoverability'),
        O = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, x.mN)(),
        { fractionalState: y } = (0, g.Z)();
    return (
        w ? ((t = T.intl.string(T.t['+vt7w8'])), (n = T.intl.string(T.t.LgHbnJ))) : ((t = T.intl.string(T.t.LgHbnJ)), (n = T.intl.string(T.t['+vt7w8']))),
        (0, i.jsx)(c.AdvancedScrollerAuto, {
            className: s()(v.allPerksScroller, {
                [v.open]: a,
                [v.openCloseReduceMotion]: O
            }),
            ref: j,
            children: (0, i.jsx)('div', {
                className: v.container,
                children: (0, i.jsxs)(m.Gt, {
                    value: P,
                    children: [
                        (0, i.jsx)(_.Z, {
                            className: v.heroHeading,
                            onBackClick: () => {
                                I(!1),
                                    p.default.track(C.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: b.MQ.SEE_ALL,
                                        next_component: S,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: v.column,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: v.heading,
                                    children: t
                                }),
                                (0, i.jsx)(h.Z, {
                                    className: v.cardCarousel,
                                    cards: (0, x.sP)({
                                        perksCards: A,
                                        variant: b.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: B,
                                        isPremiumSubscriber: w,
                                        isFullScreen: R,
                                        fractionalState: y
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: v.heading,
                                    children: n
                                }),
                                (0, i.jsx)(h.Z, {
                                    className: v.cardCarousel,
                                    cards: (0, x.sP)({
                                        perksCards: A,
                                        variant: b.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: B,
                                        isPremiumSubscriber: w,
                                        isFullScreen: R,
                                        fractionalState: y
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: v.heading,
                                    children: T.intl.string(T.t.LTaxu7)
                                }),
                                (0, i.jsx)(h.Z, {
                                    className: v.cardCarousel,
                                    cards: (0, x.sP)({
                                        perksCards: A,
                                        variant: b.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: B,
                                        isPremiumSubscriber: w,
                                        isFullScreen: R,
                                        fractionalState: y
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: v.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                e && !Z && (p.default.track(C.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }), M(!0));
                            },
                            children: (0, i.jsx)('div', { className: v.bottomOfPageVisibilitySensor })
                        }),
                        (0, i.jsx)('img', {
                            src: N,
                            className: v.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: T.intl.string(T.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
