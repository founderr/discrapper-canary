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
    h = n(197115),
    E = n(823188),
    b = n(184176),
    x = n(938736),
    C = n(386733),
    v = n(474936),
    T = n(388032),
    N = n(993270),
    I = n(872905),
    S = n(578478);
let R = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: s } = Z();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a()(N.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: I,
                        alt: '',
                        className: N.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: N.content,
                        children: [
                            r,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            s,
                            (0, i.jsx)('div', {
                                className: N.buttonContainer,
                                children: (0, i.jsx)(h.Z, {
                                    color: l.ButtonColors.BRAND,
                                    buttonText: T.intl.string(T.t['3KomGR']),
                                    className: N.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    A = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = p.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === p.p.VARIANT_2,
            { headingText: a, headingTop: s, headingBottom: o } = Z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: S,
                    alt: '',
                    className: N.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: N.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: N.contentV2,
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
                                    className: N.buttonContainer,
                                    children: (0, i.jsx)(h.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: T.intl.string(T.t['3KomGR']),
                                        className: N.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(C.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    j = () => {
        let { headingText: e } = Z();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: S,
                    alt: '',
                    className: N.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: N.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: N.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: N.reverseTrialHomeHeader,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(b.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [P, Z] = (0, m.Z)();
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        l = (0, s.e7)([g.ZP], () => g.ZP.inReverseTrial()),
        m = (0, f._O)(),
        p = T.intl.string(T.t.qYKftb),
        h = (0, x.bD)(n),
        b = (0, x.pn)(n),
        C = (0, i.jsx)(R, { className: t }),
        I = T.intl.string(T.t.ifwQZW),
        S = !1,
        { fractionalState: Z, endsAt: M } = (0, u.Z)(),
        O = (0, d.Z)(M, d.a.ENDS_IN);
    l ? ((I = T.intl.string(T.t.ifwQZW)), (C = (0, i.jsx)(j, {}))) : (h || b) && ((p = T.intl.string(T.t.qYKftb)), (I = T.intl.string(T.t.ifwQZW)), (C = (0, i.jsx)(A, { location: n })));
    let B = null;
    Z !== v.a$.NONE &&
        ((m = !0),
        (p = T.intl.string(T.t.vaqFvb)),
        (S = !0),
        (B = (0, i.jsx)(_.Z, {
            className: N.fpCountdownPill,
            countdownText: O
        })));
    let w = {
            className: a()(N.trialPill, { [N.hidden]: !m }),
            text: p,
            colorOptions: E.VE.PREMIUM_TIER_2_WHITE_FILL
        },
        y = S
            ? (0, i.jsx)('div', {
                  className: N.flexCentered,
                  children: (0, i.jsx)(E.mn, { ...w })
              })
            : (0, i.jsx)(E.Cy, { ...w });
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsx)(P.Provider, {
            value: {
                headingText: I,
                headingTop: y,
                headingBottom: B
            },
            children: C
        })
    });
};
