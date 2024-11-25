n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(927359),
    u = n(975298),
    g = n(78839),
    m = n(975104),
    f = n(775412),
    p = n(520540),
    _ = n(501862),
    h = n(944345),
    E = n(197115),
    b = n(823188),
    x = n(184176),
    C = n(938736),
    v = n(386733),
    T = n(474936),
    N = n(388032),
    I = n(993270),
    S = n(872905),
    R = n(578478);
let A = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: s } = O();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a()(I.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: S,
                        alt: '',
                        className: I.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: I.content,
                        children: [
                            r,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            s,
                            (0, i.jsx)('div', {
                                className: I.buttonContainer,
                                children: (0, i.jsx)(E.Z, {
                                    color: l.ButtonColors.BRAND,
                                    buttonText: N.intl.string(N.t['3KomGR']),
                                    className: I.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    j = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = p.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === p.p.VARIANT_2,
            { headingText: a, headingTop: s, headingBottom: o } = O();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: R,
                    alt: '',
                    className: I.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: I.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: I.contentV2,
                        children: [
                            s,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: a
                            }),
                            o,
                            r &&
                                (0, i.jsx)('div', {
                                    className: I.buttonContainer,
                                    children: (0, i.jsx)(E.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: N.intl.string(N.t['3KomGR']),
                                        className: I.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(v.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    P = () => {
        let { headingText: e } = O();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: R,
                    alt: '',
                    className: I.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: I.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: I.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: I.reverseTrialHomeHeader,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(x.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [Z, O] = (0, m.Z)();
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        l = (0, s.e7)([g.ZP], () => g.ZP.inReverseTrial()),
        m = (0, f._O)(),
        p = N.intl.string(N.t.qYKftb),
        E = (0, h.b)(n),
        x = (0, C.pn)(n),
        v = (0, i.jsx)(A, { className: t }),
        S = N.intl.string(N.t.ifwQZW),
        R = !1,
        { fractionalState: O, endsAt: B } = (0, u.Z)(),
        M = (0, d.Z)(B, d.a.ENDS_IN);
    l ? ((S = N.intl.string(N.t.ifwQZW)), (v = (0, i.jsx)(P, {}))) : (E || x) && ((p = N.intl.string(N.t.qYKftb)), (S = N.intl.string(N.t.ifwQZW)), (v = (0, i.jsx)(j, { location: n })));
    let w = null;
    O !== T.a$.NONE &&
        ((m = !0),
        (p = N.intl.string(N.t.vaqFvb)),
        (R = !0),
        (w = (0, i.jsx)(_.Z, {
            className: I.fpCountdownPill,
            countdownText: M
        })));
    let y = {
            className: a()(I.trialPill, { [I.hidden]: !m }),
            text: p,
            colorOptions: b.VE.PREMIUM_TIER_2_WHITE_FILL
        },
        k = R
            ? (0, i.jsx)('div', {
                  className: I.flexCentered,
                  children: (0, i.jsx)(b.mn, { ...y })
              })
            : (0, i.jsx)(b.Cy, { ...y });
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsx)(Z.Provider, {
            value: {
                headingText: S,
                headingTop: k,
                headingBottom: w
            },
            children: v
        })
    });
};
