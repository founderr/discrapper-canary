n(47120);
var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    _ = n(927359),
    d = n(975298),
    E = n(78839),
    u = n(975104),
    T = n(775412),
    I = n(520540),
    R = n(197115),
    g = n(823188),
    N = n(184176),
    m = n(938736),
    C = n(386733),
    A = n(474936),
    p = n(689938),
    f = n(993270),
    M = n(872905),
    S = n(578478);
let h = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: a, headingBottom: i } = P();
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)('div', {
                className: r()(f.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, s.jsx)('img', {
                        src: M,
                        alt: '',
                        className: f.headerArt
                    }),
                    (0, s.jsxs)('div', {
                        className: f.content,
                        children: [
                            a,
                            (0, s.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            i,
                            (0, s.jsx)('div', {
                                className: f.buttonContainer,
                                children: (0, s.jsx)(R.Z, {
                                    color: l.ButtonColors.BRAND,
                                    buttonText: p.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
                                    className: f.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    x = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = I.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            a = n === I.p.VARIANT_2,
            { headingText: r, headingTop: i, headingBottom: o } = P();
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('img', {
                    src: S,
                    alt: '',
                    className: f.headerArtV2
                }),
                (0, s.jsx)('div', {
                    className: f.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, s.jsxs)('div', {
                        className: f.contentV2,
                        children: [
                            i,
                            (0, s.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: r
                            }),
                            o,
                            a &&
                                (0, s.jsx)('div', {
                                    className: f.buttonContainer,
                                    children: (0, s.jsx)(R.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: p.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
                                        className: f.button,
                                        isGift: !0
                                    })
                                }),
                            (0, s.jsx)(C.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    b = () => {
        let { headingText: e } = P();
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('img', {
                    src: S,
                    alt: '',
                    className: f.headerArtV2
                }),
                (0, s.jsx)('div', {
                    className: f.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, s.jsxs)('div', {
                        className: f.contentV2,
                        children: [
                            (0, s.jsx)('div', {
                                className: f.reverseTrialHomeHeader,
                                children: (0, s.jsx)(l.Heading, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, s.jsx)(N.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [O, P] = (0, u.Z)(),
    v = (e) => {
        let { countdownText: t } = e;
        return (0, s.jsx)('div', {
            className: f.fpCountdownPill,
            children: (0, s.jsx)(l.Text, {
                variant: 'text-xs/bold',
                className: f.fpCountdownPillText,
                children: t.toUpperCase()
            })
        });
    };
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: a } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        l = (0, i.e7)([E.ZP], () => E.ZP.inReverseTrial()),
        u = (0, T._O)(),
        I = p.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
        R = (0, m.bD)(n),
        N = (0, m.pn)(n),
        C = (0, s.jsx)(h, { className: t }),
        M = p.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE,
        S = !1,
        { fractionalState: P, endsAt: L } = (0, d.Z)(),
        Z = (0, _.Z)(L, _.a.ENDS_IN);
    l ? ((M = p.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE), (C = (0, s.jsx)(b, {}))) : (R || N) && ((I = p.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED), (M = p.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE), (C = (0, s.jsx)(x, { location: n })));
    let D = null;
    P !== A.a$.NONE && ((u = !0), (I = p.Z.Messages.FRACTIONAL_CREDITS_ACTIVATED), (S = !0), (D = (0, s.jsx)(v, { countdownText: Z })));
    let U = {
            className: r()(f.trialPill, { [f.hidden]: !u }),
            text: I,
            colorOptions: g.VE.PREMIUM_TIER_2_WHITE_FILL
        },
        B = S
            ? (0, s.jsx)('div', {
                  className: f.flexCentered,
                  children: (0, s.jsx)(g.mn, { ...U })
              })
            : (0, s.jsx)(g.Cy, { ...U });
    return (0, s.jsx)(c.Gt, {
        value: a,
        children: (0, s.jsx)(O.Provider, {
            value: {
                headingText: M,
                headingTop: B,
                headingBottom: D
            },
            children: C
        })
    });
};
