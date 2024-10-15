var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(535322),
    _ = n(357355),
    E = n(140465),
    u = n(775412),
    T = n(650032),
    I = n(105759),
    R = n(248042),
    g = n(422034),
    N = n(206127),
    m = n(710220),
    C = n(318747),
    f = n(409100),
    p = n(474936),
    A = n(689938),
    M = n(679757);
let S = (e) => {
        let { inOfferExperience: t, inTrial: n, subscriptionTier: a, buttonClassName: i } = e,
            l = null;
        !t &&
            (l = (0, s.jsxs)('div', {
                className: M.buttonContainer,
                children: [
                    (0, s.jsx)(f.Z, {
                        forceInverted: !0,
                        className: r()(M.button, i),
                        subscriptionTier: a
                    }),
                    (0, s.jsx)(C.Z, {
                        className: r()(M.button, i),
                        forceWhite: !0
                    })
                ]
            }));
        let o = null;
        return (
            n &&
                (o = (0, s.jsx)('div', {
                    className: M.buttonContainer,
                    children: (0, s.jsx)(C.Z, {
                        className: r()(M.button, i),
                        forceWhite: !0
                    })
                })),
            (0, s.jsxs)(s.Fragment, {
                children: [l, ' ', o]
            })
        );
    },
    h = (e) => {
        let { isFullscreen: t } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(d.A, { className: t ? M.fullscreenSparkleStar1 : M.settingsSparkleStar1 }), (0, s.jsx)(d.A, { className: t ? M.fullscreenSparkleStar2 : M.settingsSparkleStar2 }), (0, s.jsx)(d.A, { className: t ? M.fullscreenSparkleStar3 : M.settingsSparkleStar3 }), (0, s.jsx)(d.A, { className: t ? M.fullscreenSparkleStar4 : M.settingsSparkleStar4 })]
        });
    };
function b(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0 } = e,
        a = (0, N.$)();
    return (0, s.jsx)(l.Text, {
        variant: t,
        color: 'always-white',
        className: r()(M.description, { [M.descriptionBottomMargin]: n }),
        children: A.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({ cheapestMonthlyPrice: a })
    });
}
t.Z = (e) => {
    let { isFullscreen: t, className: n, buttonClassName: a, subscriptionTier: d, hideSparkles: N, hideSubscribeAndGiftButton: f, entrypoint: x } = e,
        { analyticsLocations: O } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        P = (0, u._O)(),
        v = (0, E.Nx)(),
        L = (0, R.Vi)(),
        Z = (0, i.e7)([_.Z], () => _.Z.affinities),
        D = (0, I.Z)(),
        { enabled: B } = T._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        U = x === p.EZ.ApplicationStoreHome && null != D && B,
        j = Z.length > 0;
    return (0, s.jsx)(c.Gt, {
        value: O,
        children: (0, s.jsxs)('div', {
            className: r()(M.container, n, {
                [M.settingsContainer]: !t,
                [M.affinityHeight]: !t && j
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, s.jsxs)('div', {
                    className: t ? M.fullscreenTextContainer : M.settingsTextContainer,
                    children: [
                        (0, s.jsx)(l.Heading, {
                            variant: t ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: A.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V3
                        }),
                        U
                            ? (0, s.jsx)(m.Z, { referrer: D })
                            : j
                              ? (0, s.jsx)('div', {
                                    className: r()(M.affinityDescription),
                                    children: (0, s.jsx)(g.Z, {
                                        textColor: 'always-white',
                                        smallerText: !t
                                    })
                                })
                              : (0, s.jsx)(b, {}),
                        L
                            ? (0, s.jsx)('div', {
                                  className: M.buttonContainer,
                                  children: (0, s.jsx)(C.Z, {
                                      className: r()(M.button, a),
                                      forceWhite: !0
                                  })
                              })
                            : f
                              ? null
                              : (0, s.jsx)(S, {
                                    subscriptionTier: d,
                                    inOfferExperience: v,
                                    inTrial: P,
                                    buttonClassName: a
                                }),
                        j &&
                            !U &&
                            (0, s.jsx)(b, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !(v || N) && (0, s.jsx)(h, { isFullscreen: t })
            ]
        })
    });
};
