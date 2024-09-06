n.d(t, {
    Z: function () {
        return N;
    },
    p: function () {
        return i;
    }
});
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(442837),
    c = n(481060),
    d = n(355467),
    _ = n(37234),
    E = n(174609),
    f = n(703656),
    h = n(626135),
    p = n(357355),
    I = n(197115),
    m = n(302945),
    T = n(474936),
    S = n(981631),
    g = n(689938),
    A = n(502374);
function N(e) {
    let { containerContext: t, image: n, title: r, description: i, enableSocialProof: o, analyticsLocationSection: N, upsellViewedTrackingData: O, onClose: R, onDisplay: v, onLearnMore: C } = e,
        y = (0, u.e7)([p.Z], () => p.Z.affinities),
        D = (0, u.e7)([p.Z], () => p.Z.hasFetched);
    s.useEffect(() => {
        !D && o && d.MH();
    }, [D, o]),
        s.useEffect(() => {
            h.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, O), null == v || v();
        }, [v, O]);
    let L = y.length > 1 && o;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Backdrop, {
                backdropStyle: c.BackdropStyles.DARK,
                onClose: R,
                'aria-label': g.Z.Messages.CLOSE,
                isVisible: !0
            }),
            (0, a.jsxs)('div', {
                className: l()(A.container, 2 === t ? A.hasTabParentContainer : 1 === t ? A.hasParentContainer : A.noParentContainer),
                children: [
                    (0, a.jsx)(c.ModalCloseButton, {
                        onClick: R,
                        className: A.closeButton
                    }),
                    (0, a.jsxs)('div', {
                        className: A.contentContainer,
                        children: [
                            (0, a.jsx)('img', {
                                className: A.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, a.jsx)(c.Heading, {
                                className: l()(A.title, { [A.titleNoSocialProof]: !L }),
                                variant: 'heading-xl/bold',
                                children: r
                            }),
                            L && (0, a.jsx)(m.Z, { affinities: y }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                className: A.body,
                                children: i
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: A.ctaContainer,
                        children: [
                            (0, a.jsx)(c.Button, {
                                className: A.secondaryCTA,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                look: c.Button.Looks.LINK,
                                onClick: () => {
                                    h.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: N,
                                        location_object: S.qAy.NAVIGATION_LINK
                                    }),
                                        null == C || C(),
                                        (0, E.Z)(),
                                        R(),
                                        (0, _.xf)(),
                                        (0, f.uL)(S.Z5c.APPLICATION_STORE);
                                },
                                children: g.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA
                            }),
                            (0, a.jsx)(I.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: N,
                                    object: S.qAy.BUTTON_CTA
                                },
                                subscriptionTier: T.Si.TIER_2,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                onClick: () => {
                                    R();
                                },
                                buttonText: g.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (r[(r.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER');
