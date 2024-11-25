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
    g = n(125529),
    m = n(78839),
    f = n(975104),
    p = n(63063),
    _ = n(775412),
    h = n(520540),
    E = n(501862),
    b = n(944345),
    x = n(197115),
    C = n(823188),
    v = n(184176),
    T = n(938736),
    N = n(386733),
    I = n(474936),
    S = n(981631),
    R = n(388032),
    A = n(993270),
    j = n(872905),
    P = n(578478);
let Z = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: s } = w();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a()(A.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: j,
                        alt: '',
                        className: A.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: A.content,
                        children: [
                            r,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            s,
                            (0, i.jsx)('div', {
                                className: A.buttonContainer,
                                children: (0, i.jsx)(x.Z, {
                                    color: l.ButtonColors.BRAND,
                                    buttonText: R.intl.string(R.t['3KomGR']),
                                    className: A.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    O = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = h.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === h.p.VARIANT_2,
            { headingText: a, headingTop: s, headingBottom: o } = w();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: P,
                    alt: '',
                    className: A.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: A.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: A.contentV2,
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
                                    className: A.buttonContainer,
                                    children: (0, i.jsx)(x.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: R.intl.string(R.t['3KomGR']),
                                        className: A.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(N.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    B = () => {
        let { headingText: e } = w();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: P,
                    alt: '',
                    className: A.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: A.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: A.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: A.reverseTrialHomeHeader,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(v.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [M, w] = (0, f.Z)();
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        l = (0, s.e7)([m.ZP], () => m.ZP.inReverseTrial()),
        f = (0, _._O)(),
        h = R.intl.string(R.t.qYKftb),
        x = (0, b.b)(n),
        v = (0, T.pn)(n),
        N = (0, i.jsx)(Z, { className: t }),
        j = R.intl.string(R.t.ifwQZW),
        P = !1,
        { fractionalState: w, endsAt: y } = (0, u.Z)(),
        k = (0, d.Z)(y, d.a.ENDS_IN);
    l ? ((j = R.intl.string(R.t.ifwQZW)), (N = (0, i.jsx)(B, {}))) : (x || v) && ((h = R.intl.string(R.t.qYKftb)), (j = R.intl.string(R.t.ifwQZW)), (N = (0, i.jsx)(O, { location: n })));
    let L = null;
    if (w !== I.a$.NONE) {
        (f = !0), (h = R.intl.string(R.t.vaqFvb)), (P = !0);
        let e = R.intl.format(R.t['yR+oDA'], { helpCenterLink: p.Z.getArticleURL(S.BhN.FRACTIONAL_PREMIUM_ABOUT) });
        L = (0, i.jsx)(g.Z, {
            text: e,
            'aria-label': e.toString(),
            tooltipClassName: A.tooltip,
            position: 'right',
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    className: A.pillContainer,
                    children: (0, i.jsx)(E.Z, {
                        countdownText: k,
                        showInfoIcon: !0
                    })
                })
        });
    }
    let U = {
            className: a()(A.trialPill, { [A.hidden]: !f }),
            text: h,
            colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL
        },
        D = P
            ? (0, i.jsx)('div', {
                  className: A.flexCentered,
                  children: (0, i.jsx)(C.mn, { ...U })
              })
            : (0, i.jsx)(C.Cy, { ...U });
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsx)(M.Provider, {
            value: {
                headingText: j,
                headingTop: D,
                headingBottom: L
            },
            children: N
        })
    });
};
