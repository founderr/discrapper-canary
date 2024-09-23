var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(442837),
    o = n(481060),
    l = n(100527),
    c = n(906732),
    d = n(535322),
    _ = n(357355),
    u = n(140465),
    E = n(775412),
    T = n(650032),
    I = n(105759),
    R = n(248042),
    m = n(422034),
    g = n(206127),
    N = n(710220),
    C = n(318747),
    p = n(409100),
    f = n(474936),
    A = n(689938),
    S = n(679757);
let h = (e) => {
        let { inOfferExperience: t, inTrial: n, subscriptionTier: a, buttonClassName: i } = e,
            o = null;
        !t &&
            (o = (0, s.jsxs)('div', {
                className: S.buttonContainer,
                children: [
                    (0, s.jsx)(p.Z, {
                        forceInverted: !0,
                        className: r()(S.button, i),
                        subscriptionTier: a
                    }),
                    (0, s.jsx)(C.Z, {
                        className: r()(S.button, i),
                        forceWhite: !0
                    })
                ]
            }));
        let l = null;
        return (
            n &&
                (l = (0, s.jsx)('div', {
                    className: S.buttonContainer,
                    children: (0, s.jsx)(C.Z, {
                        className: r()(S.button, i),
                        forceWhite: !0
                    })
                })),
            (0, s.jsxs)(s.Fragment, {
                children: [o, ' ', l]
            })
        );
    },
    M = (e) => {
        let { isFullscreen: t } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar1 : S.settingsSparkleStar1 }), (0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar2 : S.settingsSparkleStar2 }), (0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar3 : S.settingsSparkleStar3 }), (0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar4 : S.settingsSparkleStar4 })]
        });
    };
function x(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0 } = e,
        a = (0, g.$)();
    return (0, s.jsx)(o.Text, {
        variant: t,
        color: 'always-white',
        className: r()(S.description, { [S.descriptionBottomMargin]: n }),
        children: A.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({ cheapestMonthlyPrice: a })
    });
}
t.Z = (e) => {
    let { isFullscreen: t, className: n, buttonClassName: a, subscriptionTier: d, hideSparkles: g, hideSubscribeAndGiftButton: p, entrypoint: b } = e,
        { analyticsLocations: O } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_HERO_CTA),
        v = (0, E._O)(),
        P = (0, u.Nx)(),
        L = (0, R.Vi)(),
        Z = (0, i.e7)([_.Z], () => _.Z.affinities),
        D = (0, I.Z)(),
        { enabled: B } = T._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        U = b === f.EZ.ApplicationStoreHome && null != D && B,
        j = Z.length > 0;
    return (0, s.jsx)(c.Gt, {
        value: O,
        children: (0, s.jsxs)('div', {
            className: r()(S.container, n, {
                [S.settingsContainer]: !t,
                [S.affinityHeight]: !t && j
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, s.jsxs)('div', {
                    className: t ? S.fullscreenTextContainer : S.settingsTextContainer,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            variant: t ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: A.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V3
                        }),
                        U
                            ? (0, s.jsx)(N.Z, { referrer: D })
                            : j
                              ? (0, s.jsx)('div', {
                                    className: r()(S.affinityDescription),
                                    children: (0, s.jsx)(m.Z, {
                                        textColor: 'always-white',
                                        smallerText: !t
                                    })
                                })
                              : (0, s.jsx)(x, {}),
                        L
                            ? (0, s.jsx)('div', {
                                  className: S.buttonContainer,
                                  children: (0, s.jsx)(C.Z, {
                                      className: r()(S.button, a),
                                      forceWhite: !0
                                  })
                              })
                            : p
                              ? null
                              : (0, s.jsx)(h, {
                                    subscriptionTier: d,
                                    inOfferExperience: P,
                                    inTrial: v,
                                    buttonClassName: a
                                }),
                        j &&
                            !U &&
                            (0, s.jsx)(x, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !(P || g) && (0, s.jsx)(M, { isFullscreen: t })
            ]
        })
    });
};
