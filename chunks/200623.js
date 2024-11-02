r.r(t),
    r.d(t, {
        default: function () {
            return N;
        }
    });
var n = r(200651),
    a = r(192379),
    s = r(442837),
    c = r(481060),
    d = r(198993),
    o = r(639351),
    i = r(63063),
    l = r(258609),
    f = r(259408),
    u = r(893387),
    m = r(927923),
    x = r(981631),
    h = r(388032),
    p = r(47772);
function C(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)('div', {
        className: p.cardRow,
        children: [
            (0, n.jsx)('div', {
                className: p.stepNumberContainer,
                children: (0, n.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    className: p.stepNumber,
                    children: t
                })
            }),
            (0, n.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                className: p.instructions,
                children: r
            })
        ]
    });
}
function N(e) {
    let { channel: t, transitionState: r, onClose: N } = e,
        b = (0, s.e7)([l.Z], () => null != l.Z.getRemoteSessionId()),
        g = (0, f.Z)(t, { forQRCode: !0 });
    return (
        a.useEffect(() => {
            b && N();
        }, [b, N]),
        a.useEffect(() => {
            (0, u.Z)(t.id, m.YE.XBOX);
        }, [t.id]),
        (0, n.jsxs)(c.ModalRoot, {
            size: c.ModalSize.DYNAMIC,
            className: p.modalRoot,
            transitionState: r,
            children: [
                (0, n.jsxs)(c.ModalHeader, {
                    separator: !1,
                    className: p.modalHeaderContainer,
                    children: [
                        (0, n.jsx)(c.Heading, {
                            className: p.modalHeader,
                            variant: 'heading-xl/extrabold',
                            children: h.intl.string(h.t['f+Aijo'])
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: h.intl.string(h.t.mYFmDQ)
                        })
                    ]
                }),
                (0, n.jsx)(c.ModalContent, {
                    className: p.content,
                    children: (0, n.jsxs)('div', {
                        className: p.card,
                        children: [
                            (0, n.jsxs)('div', {
                                className: p.cardText,
                                children: [
                                    (0, n.jsxs)(c.Text, {
                                        variant: 'text-lg/semibold',
                                        color: 'header-primary',
                                        className: p.cardRow,
                                        children: [(0, n.jsx)(o.Z, { className: p.cardHeaderIcon }), h.intl.string(h.t.ZNlYbG)]
                                    }),
                                    (0, n.jsx)(C, {
                                        step: 1,
                                        instructions: h.intl.string(h.t.dDtkl5)
                                    }),
                                    (0, n.jsx)(C, {
                                        step: 2,
                                        instructions: h.intl.string(h.t.IWuXjI)
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: (0, n.jsx)(c.Anchor, {
                                            className: p.learnMore,
                                            href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                            children: h.intl.string(h.t.hvVgAQ)
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(d.ZP, {
                                className: p.qrCode,
                                size: 120,
                                text: g
                            })
                        ]
                    })
                }),
                (0, n.jsx)(c.ModalCloseButton, {
                    className: p.closeButton,
                    onClick: N
                })
            ]
        })
    );
}
