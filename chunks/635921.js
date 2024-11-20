var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(535322),
    u = n(357355),
    g = n(140465),
    m = n(775412),
    f = n(650032),
    p = n(105759),
    _ = n(346497),
    h = n(422034),
    E = n(206127),
    b = n(710220),
    x = n(318747),
    C = n(409100),
    v = n(474936),
    T = n(388032),
    N = n(679757);
let I = (e) => {
        let { inOfferExperience: t, inTrial: n, subscriptionTier: r, buttonClassName: s } = e,
            l = null;
        !t &&
            (l = (0, i.jsxs)('div', {
                className: N.buttonContainer,
                children: [
                    (0, i.jsx)(C.Z, {
                        forceInverted: !0,
                        className: a()(N.button, s),
                        subscriptionTier: r
                    }),
                    (0, i.jsx)(x.Z, {
                        className: a()(N.button, s),
                        forceWhite: !0
                    })
                ]
            }));
        let o = null;
        return (
            n &&
                (o = (0, i.jsx)('div', {
                    className: N.buttonContainer,
                    children: (0, i.jsx)(x.Z, {
                        className: a()(N.button, s),
                        forceWhite: !0
                    })
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [l, ' ', o]
            })
        );
    },
    S = (e) => {
        let { isFullscreen: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.A, { className: t ? N.fullscreenSparkleStar1 : N.settingsSparkleStar1 }), (0, i.jsx)(d.A, { className: t ? N.fullscreenSparkleStar2 : N.settingsSparkleStar2 }), (0, i.jsx)(d.A, { className: t ? N.fullscreenSparkleStar3 : N.settingsSparkleStar3 }), (0, i.jsx)(d.A, { className: t ? N.fullscreenSparkleStar4 : N.settingsSparkleStar4 })]
        });
    };
function R(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0 } = e,
        r = (0, E.$)();
    return (0, i.jsx)(l.Text, {
        variant: t,
        color: 'always-white',
        className: a()(N.description, { [N.descriptionBottomMargin]: n }),
        children: T.intl.format(T.t.kt9wxs, { cheapestMonthlyPrice: r })
    });
}
t.Z = (e) => {
    let { isFullscreen: t, className: n, buttonClassName: r, subscriptionTier: d, hideSparkles: E, hideSubscribeAndGiftButton: C, entrypoint: A } = e,
        { analyticsLocations: j } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        P = (0, m._O)(),
        Z = (0, g.Nx)(),
        O = (0, _.Vi)(),
        M = (0, s.e7)([u.Z], () => u.Z.affinities),
        B = (0, p.Z)(),
        { enabled: w } = f._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        y = A === v.EZ.ApplicationStoreHome && null != B && w,
        k = M.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: j,
        children: (0, i.jsxs)('div', {
            className: a()(N.container, n, {
                [N.settingsContainer]: !t,
                [N.affinityHeight]: !t && k
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: t ? N.fullscreenTextContainer : N.settingsTextContainer,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: t ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: T.intl.string(T.t.YCZldH)
                        }),
                        y
                            ? (0, i.jsx)(b.Z, { referrer: B })
                            : k
                              ? (0, i.jsx)('div', {
                                    className: a()(N.affinityDescription),
                                    children: (0, i.jsx)(h.Z, {
                                        textColor: 'always-white',
                                        smallerText: !t
                                    })
                                })
                              : (0, i.jsx)(R, {}),
                        O
                            ? (0, i.jsx)('div', {
                                  className: N.buttonContainer,
                                  children: (0, i.jsx)(x.Z, {
                                      className: a()(N.button, r),
                                      forceWhite: !0
                                  })
                              })
                            : C
                              ? null
                              : (0, i.jsx)(I, {
                                    subscriptionTier: d,
                                    inOfferExperience: Z,
                                    inTrial: P,
                                    buttonClassName: r
                                }),
                        k &&
                            !y &&
                            (0, i.jsx)(R, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !(Z || E) && (0, i.jsx)(S, { isFullscreen: t })
            ]
        })
    });
};
