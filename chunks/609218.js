n.d(t, {
    Z: function () {
        return A;
    },
    p: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(355467),
    f = n(37234),
    _ = n(174609),
    p = n(703656),
    h = n(626135),
    m = n(74538),
    g = n(357355),
    E = n(639119),
    v = n(197115),
    I = n(302945),
    b = n(474936),
    S = n(981631),
    T = n(388032),
    y = n(739626);
function A(e) {
    let { containerContext: t, image: n, title: r, description: i, enableSocialProof: o, analyticsLocationSection: A, upsellViewedTrackingData: N, onClose: C, onDisplay: R, onLearnMore: O } = e,
        D = (0, u.e7)([g.Z], () => g.Z.affinities),
        L = (0, u.e7)([g.Z], () => g.Z.hasFetched);
    s.useEffect(() => {
        !L && o && d.MH();
    }, [L, o]),
        s.useEffect(() => {
            h.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, N), null == R || R();
        }, [R, N]);
    let x = D.length > 1 && o,
        w = (0, E.N)(),
        M = s.useCallback(() => {
            var e;
            return null !== (e = (0, m.fr)(w)) && void 0 !== e ? e : T.intl.string(T.t.pj0XBA);
        }, [w]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Backdrop, {
                backdropStyle: c.BackdropStyles.DARK,
                onClose: C,
                'aria-label': T.intl.string(T.t.cpT0Cg),
                isVisible: !0
            }),
            (0, a.jsxs)('div', {
                className: l()(y.container, 2 === t ? y.hasTabParentContainer : 1 === t ? y.hasParentContainer : y.noParentContainer),
                children: [
                    (0, a.jsx)(c.ModalCloseButton, {
                        onClick: C,
                        className: y.closeButton
                    }),
                    (0, a.jsxs)('div', {
                        className: y.contentContainer,
                        children: [
                            (0, a.jsx)('img', {
                                className: y.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, a.jsx)(c.Heading, {
                                className: l()(y.title, { [y.titleNoSocialProof]: !x }),
                                variant: 'heading-xl/bold',
                                children: r
                            }),
                            x && (0, a.jsx)(I.Z, { affinities: D }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                className: y.body,
                                children: i
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: y.ctaContainer,
                        children: [
                            (0, a.jsx)(c.Button, {
                                className: y.secondaryCTA,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                look: c.Button.Looks.LINK,
                                onClick: () => {
                                    h.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: A,
                                        location_object: S.qAy.NAVIGATION_LINK
                                    }),
                                        null == O || O(),
                                        (0, _.Z)(),
                                        C(),
                                        (0, f.xf)(),
                                        (0, p.uL)(S.Z5c.APPLICATION_STORE);
                                },
                                children: T.intl.string(T.t.ZnqyZ2)
                            }),
                            (0, a.jsx)(v.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: A,
                                    object: S.qAy.BUTTON_CTA
                                },
                                subscriptionTier: b.Si.TIER_2,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                onClick: () => {
                                    C();
                                },
                                buttonText: M()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (r[(r.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER');
