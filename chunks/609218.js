n.d(t, {
    Z: function () {
        return A;
    },
    p: function () {
        return r;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(355467),
    d = n(37234),
    _ = n(174609),
    E = n(703656),
    f = n(626135),
    h = n(357355),
    p = n(197115),
    m = n(302945),
    I = n(474936),
    T = n(981631),
    g = n(689938),
    S = n(739626);
function A(e) {
    let { containerContext: t, image: n, title: r, description: o, enableSocialProof: A, analyticsLocationSection: v, upsellViewedTrackingData: N, onClose: O, onDisplay: R, onLearnMore: C } = e,
        y = (0, l.e7)([h.Z], () => h.Z.affinities),
        L = (0, l.e7)([h.Z], () => h.Z.hasFetched);
    a.useEffect(() => {
        !L && A && c.MH();
    }, [L, A]),
        a.useEffect(() => {
            f.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, N), null == R || R();
        }, [R, N]);
    let b = y.length > 1 && A,
        D = () => (2 === t ? S.hasTabParentContainer : 1 === t ? S.hasParentContainer : S.noParentContainer),
        M = () => {
            f.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: v,
                location_object: T.qAy.NAVIGATION_LINK
            }),
                null == C || C(),
                (0, _.Z)(),
                O(),
                (0, d.xf)(),
                (0, E.uL)(T.Z5c.APPLICATION_STORE);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Backdrop, {
                backdropStyle: u.BackdropStyles.DARK,
                onClose: O,
                'aria-label': g.Z.Messages.CLOSE,
                isVisible: !0
            }),
            (0, i.jsxs)('div', {
                className: s()(S.container, D()),
                children: [
                    (0, i.jsx)(u.ModalCloseButton, {
                        onClick: O,
                        className: S.closeButton
                    }),
                    (0, i.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                className: S.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, i.jsx)(u.Heading, {
                                className: s()(S.title, { [S.titleNoSocialProof]: !b }),
                                variant: 'heading-xl/bold',
                                children: r
                            }),
                            b && (0, i.jsx)(m.Z, { affinities: y }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                className: S.body,
                                children: o
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.ctaContainer,
                        children: [
                            (0, i.jsx)(u.Button, {
                                className: S.secondaryCTA,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.CUSTOM,
                                look: u.Button.Looks.LINK,
                                onClick: M,
                                children: g.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA
                            }),
                            (0, i.jsx)(p.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: v,
                                    object: T.qAy.BUTTON_CTA
                                },
                                subscriptionTier: I.Si.TIER_2,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.CUSTOM,
                                onClick: () => {
                                    O();
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
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.PARENT_CONTAINER = 1)] = 'PARENT_CONTAINER'), (e[(e.TAB_PARENT_CONTAINER = 2)] = 'TAB_PARENT_CONTAINER');
})(r || (r = {}));
