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
    u = n(906732),
    E = n(410154),
    T = n(626135),
    I = n(915296),
    R = n(103433),
    m = n(166021),
    g = n(32173),
    N = n(391110),
    C = n(75077),
    p = n(981631),
    A = n(689938),
    f = n(170367),
    h = n(865215);
t.Z = (e) => {
    let t,
        n,
        { isAllPerksVisible: r, setIsAllPerksVisible: S, previousComponent: M, isFullScreen: x } = e,
        b = a.useRef(null),
        O = Object.entries((0, g.Z)()).reduce((e, t) => {
            let [n, s] = t;
            return !1 !== s.canReveal && 'upcomingDropUntimed' !== s.name && (e[n] = s), e;
        }, {}),
        v = (0, I.HI)({ location: N.MQ.SEE_ALL }),
        { analyticsLocations: P } = (0, u.ZP)(_.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, Z] = a.useState(!1),
        D = (0, E.ZP)('perks-discoverability'),
        U = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        B = (0, C.mN)();
    return (
        v === I.mJ.DEFAULT ? ((t = A.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (n = A.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD)) : ((t = A.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD), (n = A.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE)),
        (0, s.jsx)(c.AdvancedScrollerAuto, {
            className: i()(f.allPerksScroller, {
                [f.open]: r,
                [f.openCloseReduceMotion]: U
            }),
            ref: b,
            children: (0, s.jsx)('div', {
                className: f.container,
                children: (0, s.jsxs)(u.Gt, {
                    value: P,
                    children: [
                        (0, s.jsx)(R.Z, {
                            className: f.heroHeading,
                            onBackClick: () => {
                                S(!1),
                                    T.default.track(p.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: N.MQ.SEE_ALL,
                                        next_component: M,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, s.jsxs)('div', {
                            className: f.column,
                            children: [
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: f.heading,
                                    children: t
                                }),
                                (0, s.jsx)(m.Z, {
                                    className: f.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: N.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: v,
                                        isPremiumSubscriber: B,
                                        isFullScreen: x
                                    }),
                                    cardType: N.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: f.heading,
                                    children: n
                                }),
                                (0, s.jsx)(m.Z, {
                                    className: f.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: N.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: v,
                                        isPremiumSubscriber: B,
                                        isFullScreen: x
                                    }),
                                    cardType: N.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, s.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: f.heading,
                                    children: A.Z.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
                                }),
                                (0, s.jsx)(m.Z, {
                                    className: f.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: O,
                                        variant: N.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: D,
                                        tileOrderVariant: v,
                                        isPremiumSubscriber: B,
                                        isFullScreen: x
                                    }),
                                    cardType: N.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, s.jsx)('div', { className: f.footerSpacing }),
                        (0, s.jsx)(o.$, {
                            onChange: (e) => {
                                e && !L && (T.default.track(p.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: P }), Z(!0));
                            },
                            children: (0, s.jsx)('div', { className: f.bottomOfPageVisibilitySensor })
                        }),
                        (0, s.jsx)('img', {
                            src: h,
                            className: f.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: A.Z.Messages.IMAGE
                        })
                    ]
                })
            })
        })
    );
};
