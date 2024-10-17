n.d(t, {
    Z: function () {
        return O;
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
    p = n(74538),
    I = n(357355),
    m = n(639119),
    T = n(197115),
    S = n(302945),
    g = n(474936),
    A = n(981631),
    N = n(689938),
    R = n(739626);
function O(e) {
    let { containerContext: t, image: n, title: r, description: i, enableSocialProof: o, analyticsLocationSection: O, upsellViewedTrackingData: v, onClose: C, onDisplay: L, onLearnMore: D } = e,
        y = (0, u.e7)([I.Z], () => I.Z.affinities),
        b = (0, u.e7)([I.Z], () => I.Z.hasFetched);
    s.useEffect(() => {
        !b && o && d.MH();
    }, [b, o]),
        s.useEffect(() => {
            h.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, v), null == L || L();
        }, [L, v]);
    let M = y.length > 1 && o,
        P = (0, m.N)(),
        U = s.useCallback(() => {
            var e;
            return null !== (e = (0, p.fr)(P)) && void 0 !== e ? e : N.Z.Messages.PREMIUM_UPSELL_GET_NITRO;
        }, [P]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Backdrop, {
                backdropStyle: c.BackdropStyles.DARK,
                onClose: C,
                'aria-label': N.Z.Messages.CLOSE,
                isVisible: !0
            }),
            (0, a.jsxs)('div', {
                className: l()(R.container, 2 === t ? R.hasTabParentContainer : 1 === t ? R.hasParentContainer : R.noParentContainer),
                children: [
                    (0, a.jsx)(c.ModalCloseButton, {
                        onClick: C,
                        className: R.closeButton
                    }),
                    (0, a.jsxs)('div', {
                        className: R.contentContainer,
                        children: [
                            (0, a.jsx)('img', {
                                className: R.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, a.jsx)(c.Heading, {
                                className: l()(R.title, { [R.titleNoSocialProof]: !M }),
                                variant: 'heading-xl/bold',
                                children: r
                            }),
                            M && (0, a.jsx)(S.Z, { affinities: y }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                className: R.body,
                                children: i
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: R.ctaContainer,
                        children: [
                            (0, a.jsx)(c.Button, {
                                className: R.secondaryCTA,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                look: c.Button.Looks.LINK,
                                onClick: () => {
                                    h.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
                                        location_section: O,
                                        location_object: A.qAy.NAVIGATION_LINK
                                    }),
                                        null == D || D(),
                                        (0, E.Z)(),
                                        C(),
                                        (0, _.xf)(),
                                        (0, f.uL)(A.Z5c.APPLICATION_STORE);
                                },
                                children: N.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA
                            }),
                            (0, a.jsx)(T.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: O,
                                    object: A.qAy.BUTTON_CTA
                                },
                                subscriptionTier: g.Si.TIER_2,
                                size: c.Button.Sizes.SMALL,
                                color: c.Button.Colors.CUSTOM,
                                onClick: () => {
                                    C();
                                },
                                buttonText: U()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (r[(r.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER');
