n(724458), n(47120);
var s = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    _ = n(607070),
    d = n(100527),
    E = n(906732),
    u = n(975298),
    T = n(410154),
    I = n(626135),
    R = n(915296),
    g = n(103433),
    N = n(166021),
    m = n(32173),
    C = n(391110),
    A = n(75077),
    f = n(981631),
    p = n(689938),
    M = n(170367),
    S = n(865215);
t.Z = (e) => {
    let t,
        n,
        { isAllPerksVisible: r, setIsAllPerksVisible: h, previousComponent: x, isFullScreen: b } = e,
        O = a.useRef(null),
        P = Object.entries((0, m.Z)()).reduce((e, t) => {
            let [n, s] = t;
            return !1 !== s.canReveal && 'upcomingDropUntimed' !== s.name && (e[n] = s), e;
        }, {}),
        v = (0, R.HI)({ location: C.MQ.SEE_ALL }),
        { analyticsLocations: L } = (0, E.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [Z, D] = a.useState(!1),
        U = (0, T.ZP)('perks-discoverability'),
        B = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        j = (0, A.mN)(),
        { fractionalState: G } = (0, u.Z)({ forceFetch: !0 });
    return (
        v === R.mJ.DEFAULT ? ((t = p.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (n = p.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD)) : ((t = p.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD), (n = p.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE)),
        (0, s.jsx)(c.AdvancedScrollerAuto, {
            className: i()(M.allPerksScroller, {
                [M.open]: r,
                [M.openCloseReduceMotion]: B
            }),
            ref: O,
            children: (0, s.jsx)('div', {
                className: M.container,
                children: (0, s.jsxs)(E.Gt, {
                    value: L,
                    children: [
                        (0, s.jsx)(g.Z, {
                            className: M.heroHeading,
                            onBackClick: () => {
                                h(!1),
                                    I.default.track(f.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: C.MQ.SEE_ALL,
                                        next_component: x,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: M.column,
                            children: [
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: M.heading,
                                    children: t
                                }),
                                (0, s.jsx)(N.Z, {
                                    className: M.cardCarousel,
                                    cards: (0, A.sP)({
                                        perksCards: P,
                                        variant: C.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: U,
                                        tileOrderVariant: v,
                                        isPremiumSubscriber: j,
                                        isFullScreen: b,
                                        fractionalState: G
                                    }),
                                    cardType: C.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: M.heading,
                                    children: n
                                }),
                                (0, s.jsx)(N.Z, {
                                    className: M.cardCarousel,
                                    cards: (0, A.sP)({
                                        perksCards: P,
                                        variant: C.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: U,
                                        tileOrderVariant: v,
                                        isPremiumSubscriber: j,
                                        isFullScreen: b,
                                        fractionalState: G
                                    }),
                                    cardType: C.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: M.heading,
                                    children: p.Z.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
                                }),
                                (0, s.jsx)(N.Z, {
                                    className: M.cardCarousel,
                                    cards: (0, A.sP)({
                                        perksCards: P,
                                        variant: C.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: U,
                                        tileOrderVariant: v,
                                        isPremiumSubscriber: j,
                                        isFullScreen: b,
                                        fractionalState: G
                                    }),
                                    cardType: C.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, s.jsx)('div', { className: M.footerSpacing }),
                        (0, s.jsx)(o.$, {
                            onChange: (e) => {
                                e && !Z && (I.default.track(f.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: L }), D(!0));
                            },
                            children: (0, s.jsx)('div', { className: M.bottomOfPageVisibilitySensor })
                        }),
                        (0, s.jsx)('img', {
                            src: S,
                            className: M.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: p.Z.Messages.IMAGE
                        })
                    ]
                })
            })
        })
    );
};
