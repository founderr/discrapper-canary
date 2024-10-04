n(724458), n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    _ = n(100527),
    E = n(906732),
    u = n(410154),
    T = n(626135),
    I = n(915296),
    R = n(103433),
    g = n(166021),
    N = n(32173),
    m = n(391110),
    C = n(75077),
    f = n(981631),
    p = n(689938),
    A = n(170367),
    M = n(865215);
t.Z = (e) => {
    let t,
        n,
        { isAllPerksVisible: r, setIsAllPerksVisible: S, previousComponent: h, isFullScreen: x } = e,
        b = a.useRef(null),
        O = Object.entries((0, N.Z)()).reduce((e, t) => {
            let [n, s] = t;
            return !1 !== s.canReveal && 'upcomingDropUntimed' !== s.name && (e[n] = s), e;
        }, {}),
        P = (0, I.HI)({ location: m.MQ.SEE_ALL }),
        { analyticsLocations: v } = (0, E.ZP)(_.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, Z] = a.useState(!1),
        D = (0, u.ZP)('perks-discoverability'),
        B = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        U = (0, C.mN)();
    return (
        P === I.mJ.DEFAULT ? ((t = p.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (n = p.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD)) : ((t = p.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD), (n = p.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE)),
        (0, s.jsx)(c.AdvancedScrollerAuto, {
            className: i()(A.allPerksScroller, {
                [A.open]: r,
                [A.openCloseReduceMotion]: B
            }),
            ref: b,
            children: (0, s.jsx)('div', {
                className: A.container,
                children: (0, s.jsxs)(E.Gt, {
                    value: v,
                    children: [
                        (0, s.jsx)(R.Z, {
                            className: A.heroHeading,
                            onBackClick: () => {
                                S(!1),
                                    T.default.track(f.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: m.MQ.SEE_ALL,
                                        next_component: h,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: A.column,
                            children: [
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: A.heading,
                                    children: t
                                }),
                                (0, s.jsx)(g.Z, {
                                    className: A.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: m.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: P,
                                        isPremiumSubscriber: U,
                                        isFullScreen: x
                                    }),
                                    cardType: m.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: A.heading,
                                    children: n
                                }),
                                (0, s.jsx)(g.Z, {
                                    className: A.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: m.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: P,
                                        isPremiumSubscriber: U,
                                        isFullScreen: x
                                    }),
                                    cardType: m.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: A.heading,
                                    children: p.Z.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
                                }),
                                (0, s.jsx)(g.Z, {
                                    className: A.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: m.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: P,
                                        isPremiumSubscriber: U,
                                        isFullScreen: x
                                    }),
                                    cardType: m.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, s.jsx)('div', { className: A.footerSpacing }),
                        (0, s.jsx)(o.$, {
                            onChange: (e) => {
                                e && !L && (T.default.track(f.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: v }), Z(!0));
                            },
                            children: (0, s.jsx)('div', { className: A.bottomOfPageVisibilitySensor })
                        }),
                        (0, s.jsx)('img', {
                            src: M,
                            className: A.bottomIllustration,
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
