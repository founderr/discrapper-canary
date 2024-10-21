n(724458), n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    _ = n(607070),
    d = n(100527),
    E = n(906732),
    u = n(410154),
    T = n(626135),
    I = n(915296),
    R = n(103433),
    g = n(166021),
    N = n(32173),
    m = n(391110),
    C = n(75077),
    A = n(981631),
    f = n(689938),
    p = n(170367),
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
        { analyticsLocations: v } = (0, E.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, Z] = a.useState(!1),
        D = (0, u.ZP)('perks-discoverability'),
        U = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        B = (0, C.mN)();
    return (
        P === I.mJ.DEFAULT ? ((t = f.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (n = f.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD)) : ((t = f.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD), (n = f.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE)),
        (0, s.jsx)(c.AdvancedScrollerAuto, {
            className: i()(p.allPerksScroller, {
                [p.open]: r,
                [p.openCloseReduceMotion]: U
            }),
            ref: b,
            children: (0, s.jsx)('div', {
                className: p.container,
                children: (0, s.jsxs)(E.Gt, {
                    value: v,
                    children: [
                        (0, s.jsx)(R.Z, {
                            className: p.heroHeading,
                            onBackClick: () => {
                                S(!1),
                                    T.default.track(A.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: m.MQ.SEE_ALL,
                                        next_component: h,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: p.column,
                            children: [
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: p.heading,
                                    children: t
                                }),
                                (0, s.jsx)(g.Z, {
                                    className: p.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: m.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: P,
                                        isPremiumSubscriber: B,
                                        isFullScreen: x
                                    }),
                                    cardType: m.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: p.heading,
                                    children: n
                                }),
                                (0, s.jsx)(g.Z, {
                                    className: p.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: m.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: P,
                                        isPremiumSubscriber: B,
                                        isFullScreen: x
                                    }),
                                    cardType: m.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: p.heading,
                                    children: f.Z.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
                                }),
                                (0, s.jsx)(g.Z, {
                                    className: p.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: m.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: P,
                                        isPremiumSubscriber: B,
                                        isFullScreen: x
                                    }),
                                    cardType: m.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, s.jsx)('div', { className: p.footerSpacing }),
                        (0, s.jsx)(o.$, {
                            onChange: (e) => {
                                e && !L && (T.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: v }), Z(!0));
                            },
                            children: (0, s.jsx)('div', { className: p.bottomOfPageVisibilitySensor })
                        }),
                        (0, s.jsx)('img', {
                            src: M,
                            className: p.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: f.Z.Messages.IMAGE
                        })
                    ]
                })
            })
        })
    );
};
