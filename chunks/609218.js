n.d(t, {
    Z: function () {
        return N;
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
    h = n(74538),
    p = n(357355),
    m = n(639119),
    I = n(197115),
    T = n(302945),
    g = n(474936),
    S = n(981631),
    A = n(689938),
    v = n(739626);
function N(e) {
    let { containerContext: t, image: n, title: r, description: o, enableSocialProof: N, analyticsLocationSection: O, upsellViewedTrackingData: R, onClose: C, onDisplay: y, onLearnMore: L } = e,
        b = (0, l.e7)([p.Z], () => p.Z.affinities),
        D = (0, l.e7)([p.Z], () => p.Z.hasFetched);
    a.useEffect(() => {
        !D && N && c.MH();
    }, [D, N]),
        a.useEffect(() => {
            f.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, R), null == y || y();
        }, [y, R]);
    let M = b.length > 1 && N,
        P = () => (2 === t ? v.hasTabParentContainer : 1 === t ? v.hasParentContainer : v.noParentContainer),
        U = () => {
            f.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: O,
                location_object: S.qAy.NAVIGATION_LINK
            }),
                null == L || L(),
                (0, _.Z)(),
                C(),
                (0, d.xf)(),
                (0, E.uL)(S.Z5c.APPLICATION_STORE);
        },
        w = (0, m.N)(),
        x = a.useCallback(() => {
            var e;
            return null !== (e = (0, h.fr)(w)) && void 0 !== e ? e : A.Z.Messages.PREMIUM_UPSELL_GET_NITRO;
        }, [w]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Backdrop, {
                backdropStyle: u.BackdropStyles.DARK,
                onClose: C,
                'aria-label': A.Z.Messages.CLOSE,
                isVisible: !0
            }),
            (0, i.jsxs)('div', {
                className: s()(v.container, P()),
                children: [
                    (0, i.jsx)(u.ModalCloseButton, {
                        onClick: C,
                        className: v.closeButton
                    }),
                    (0, i.jsxs)('div', {
                        className: v.contentContainer,
                        children: [
                            (0, i.jsx)('img', {
                                className: v.image,
                                width: n.width,
                                height: n.height,
                                src: n.url,
                                alt: 'Nitro Perk'
                            }),
                            (0, i.jsx)(u.Heading, {
                                className: s()(v.title, { [v.titleNoSocialProof]: !M }),
                                variant: 'heading-xl/bold',
                                children: r
                            }),
                            M && (0, i.jsx)(T.Z, { affinities: b }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                className: v.body,
                                children: o
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: v.ctaContainer,
                        children: [
                            (0, i.jsx)(u.Button, {
                                className: v.secondaryCTA,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.CUSTOM,
                                look: u.Button.Looks.LINK,
                                onClick: U,
                                children: A.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA
                            }),
                            (0, i.jsx)(I.Z, {
                                showGradient: !0,
                                premiumModalAnalyticsLocation: {
                                    section: O,
                                    object: S.qAy.BUTTON_CTA
                                },
                                subscriptionTier: g.Si.TIER_2,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.CUSTOM,
                                onClick: () => {
                                    C();
                                },
                                buttonText: x()
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
