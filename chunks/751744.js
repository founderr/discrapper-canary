e.r(n);
var i = e(200651),
    o = e(192379),
    r = e(442837),
    s = e(481060),
    l = e(955522),
    c = e(138201),
    a = e(103879),
    d = e(236289),
    h = e(853178),
    u = e(800530),
    p = e(388032),
    g = e(177872);
let x = [
    {
        title: p.intl.string(p.t['1+E7LC']),
        description: p.intl.string(p.t.BXiat7),
        icon: s.CircleCheckIcon
    },
    {
        title: p.intl.string(p.t.iMQXtL),
        description: p.intl.string(p.t.oQ0vws),
        icon: s.CircleCheckIcon
    },
    {
        title: p.intl.string(p.t['oY/z1d']),
        description: p.intl.string(p.t.wtj02d),
        icon: s.CircleInformationIcon
    }
];
n.default = function (t) {
    let { onClose: n, transitionState: e } = t,
        b = (0, r.e7)([d.Z], () => d.Z.getAgeVerificationWebviewUrl()),
        C = (0, r.e7)([d.Z], () => d.Z.getIsLoadingAgeVerification()),
        f = o.useCallback(() => {
            n(), h.Z.close();
        }, [n]),
        j = o.useCallback(() => {
            f();
        }, [f]);
    return (
        o.useEffect(() => {
            '' !== b &&
                (0, l.F)({
                    webviewUrl: b,
                    onComplete: j
                });
        }, [b, j]),
        (0, i.jsxs)(s.ModalRoot, {
            transitionState: e,
            className: g.root,
            children: [
                (0, i.jsxs)(s.ModalContent, {
                    className: g.content,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.header,
                            children: [
                                (0, i.jsx)(s.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: p.intl.string(p.t['9SDLnp'])
                                }),
                                (0, i.jsx)(s.Heading, {
                                    variant: 'heading-md/normal',
                                    children: p.intl.string(p.t['yvx///'])
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: g.table,
                            children: x.map((t, n) => {
                                let { title: e, icon: o, description: r } = t;
                                return (0, i.jsx)(
                                    c.Z,
                                    {
                                        title: e,
                                        description: r,
                                        icon: o
                                    },
                                    n
                                );
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: g.anotherOption,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    className: g.optionEyebrow,
                                    children: p.intl.string(p.t.WPwp1d)
                                }),
                                (0, i.jsx)(c.Z, {
                                    title: p.intl.string(p.t.N9WJMD),
                                    description: p.intl.string(p.t['NHq38/']),
                                    buttonText: p.intl.string(p.t['9iy4lJ']),
                                    buttonColor: s.Button.Colors.PRIMARY,
                                    onButtonPress: () => window.open(u.sQ.AGE_VERIFICATION_LINK, '_blank')
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(s.ModalFooter, {
                    className: g.footer,
                    children: [
                        (0, i.jsx)(s.Button, {
                            onClick: a.FN,
                            submitting: C,
                            children: p.intl.string(p.t['54b8V1'])
                        }),
                        (0, i.jsx)(s.Button, {
                            color: s.Button.Colors.TRANSPARENT,
                            look: s.Button.Looks.BLANK,
                            onClick: f,
                            children: p.intl.string(p.t.dKacJy)
                        })
                    ]
                })
            ]
        })
    );
};
