var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(78839),
    _ = n(775412),
    E = n(520540),
    u = n(197115),
    T = n(823188),
    I = n(184176),
    R = n(938736),
    g = n(386733),
    N = n(689938),
    C = n(993270),
    m = n(872905),
    f = n(578478);
let A = (e) => {
        let { className: t, inTrial: n } = e;
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)('div', {
                className: r()(C.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, s.jsx)('img', {
                        src: m,
                        alt: '',
                        className: C.headerArt
                    }),
                    (0, s.jsxs)('div', {
                        className: C.content,
                        children: [
                            (0, s.jsx)(T.Cy, {
                                text: N.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                                className: r()(C.trialPill, { [C.hidden]: !n }),
                                colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
                            }),
                            (0, s.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: N.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
                            }),
                            (0, s.jsx)('div', {
                                className: C.buttonContainer,
                                children: (0, s.jsx)(u.Z, {
                                    color: l.ButtonColors.BRAND,
                                    buttonText: N.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
                                    className: C.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    p = (e) => {
        let { inTrial: t, location: n } = e,
            { subscriberHomeVariant: a } = E.g.useExperiment({ location: n }, { autoTrackExposure: !1 }),
            i = a === E.p.VARIANT_2;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('img', {
                    src: f,
                    alt: '',
                    className: C.headerArtV2
                }),
                (0, s.jsx)('div', {
                    className: C.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, s.jsxs)('div', {
                        className: C.contentV2,
                        children: [
                            (0, s.jsx)(T.Cy, {
                                text: N.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
                                className: r()(C.trialPill, { [C.hidden]: !t }),
                                colorOptions: T.VE.PREMIUM_TIER_2_WHITE_FILL
                            }),
                            (0, s.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: N.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
                            }),
                            i &&
                                (0, s.jsx)('div', {
                                    className: C.buttonContainer,
                                    children: (0, s.jsx)(u.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: N.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
                                        className: C.button,
                                        isGift: !0
                                    })
                                }),
                            (0, s.jsx)(g.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    M = () =>
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('img', {
                    src: f,
                    alt: '',
                    className: C.headerArtV2
                }),
                (0, s.jsx)('div', {
                    className: C.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, s.jsxs)('div', {
                        className: C.contentV2,
                        children: [
                            (0, s.jsx)('div', {
                                className: C.reverseTrialHomeHeader,
                                children: (0, s.jsx)(l.Heading, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: N.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
                                })
                            }),
                            (0, s.jsx)(I.Z, {})
                        ]
                    })
                })
            ]
        });
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: a } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        r = (0, i.e7)([d.ZP], () => d.ZP.inReverseTrial()),
        l = (0, _._O)(),
        E = (0, R.bD)(n),
        u = (0, R.pn)(n),
        T = (0, s.jsx)(A, {
            className: t,
            inTrial: l
        });
    return (
        r && (T = (0, s.jsx)(M, {})),
        (E || u) &&
            (T = (0, s.jsx)(p, {
                inTrial: l,
                location: n
            })),
        (0, s.jsx)(c.Gt, {
            value: a,
            children: T
        })
    );
};
