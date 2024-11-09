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
    g = n(906732),
    m = n(975298),
    f = n(410154),
    _ = n(626135),
    p = n(915296),
    h = n(103433),
    E = n(166021),
    b = n(32173),
    x = n(391110),
    C = n(75077),
    T = n(981631),
    v = n(388032),
    N = n(170367),
    I = n(865215);
t.Z = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: S, previousComponent: R, isFullScreen: A } = e,
        j = r.useRef(null),
        P = Object.entries((0, b.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        Z = (0, p.HI)({ location: x.MQ.SEE_ALL }),
        { analyticsLocations: O } = (0, g.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [M, B] = r.useState(!1),
        w = (0, f.ZP)('perks-discoverability'),
        y = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        k = (0, C.mN)(),
        { fractionalState: L } = (0, m.Z)();
    return (
        Z === p.mJ.DEFAULT ? ((t = v.intl.string(v.t['+vt7w8'])), (n = v.intl.string(v.t.LgHbnJ))) : ((t = v.intl.string(v.t.LgHbnJ)), (n = v.intl.string(v.t['+vt7w8']))),
        (0, i.jsx)(c.AdvancedScrollerAuto, {
            className: s()(N.allPerksScroller, {
                [N.open]: a,
                [N.openCloseReduceMotion]: y
            }),
            ref: j,
            children: (0, i.jsx)('div', {
                className: N.container,
                children: (0, i.jsxs)(g.Gt, {
                    value: O,
                    children: [
                        (0, i.jsx)(h.Z, {
                            className: N.heroHeading,
                            onBackClick: () => {
                                S(!1),
                                    _.default.track(T.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: x.MQ.SEE_ALL,
                                        next_component: R,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: N.column,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: N.heading,
                                    children: t
                                }),
                                (0, i.jsx)(E.Z, {
                                    className: N.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: P,
                                        variant: x.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: w,
                                        tileOrderVariant: Z,
                                        isPremiumSubscriber: k,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: x.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: N.heading,
                                    children: n
                                }),
                                (0, i.jsx)(E.Z, {
                                    className: N.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: P,
                                        variant: x.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: w,
                                        tileOrderVariant: Z,
                                        isPremiumSubscriber: k,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: x.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: N.heading,
                                    children: v.intl.string(v.t.LTaxu7)
                                }),
                                (0, i.jsx)(E.Z, {
                                    className: N.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: P,
                                        variant: x.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: w,
                                        tileOrderVariant: Z,
                                        isPremiumSubscriber: k,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: x.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: N.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                e && !M && (_.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: O }), B(!0));
                            },
                            children: (0, i.jsx)('div', { className: N.bottomOfPageVisibilitySensor })
                        }),
                        (0, i.jsx)('img', {
                            src: I,
                            className: N.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: v.intl.string(v.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
