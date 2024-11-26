n.r(t),
    n.d(t, {
        default: function () {
            return _;
        }
    });
var a = n(200651),
    o = n(192379),
    s = n(286379),
    i = n(399606),
    c = n(481060),
    l = n(797614),
    r = n(359119),
    d = n(473092),
    u = n(636749),
    m = n(981631),
    x = n(388032),
    b = n(636370);
function _(e) {
    let { transitionState: t, onClose: n, channelId: _, warningId: v, senderId: g, description: h, safetyTips: p, actions: N } = e,
        k = (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarning(_, v));
    return (
        o.useEffect(() => {
            (0, d.MC)(m.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: _,
                warningId: v,
                senderId: g,
                warningType: null == k ? void 0 : k.type
            }),
                l.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
        }, [_, v, g, k]),
        (0, a.jsx)(c.ModalRoot, {
            transitionState: t,
            children: (0, a.jsxs)(c.Scroller, {
                style: { overflow: 'hidden auto' },
                children: [
                    (0, a.jsxs)(c.ModalHeader, {
                        className: b.modalHeader,
                        children: [
                            (0, a.jsxs)('div', {
                                className: b.modalHeaderText,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        variant: 'eyebrow',
                                        color: 'status-positive-text',
                                        children: x.intl.string(x.t.lyt43N)
                                    }),
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'status-positive-text',
                                        children: h
                                    })
                                ]
                            }),
                            (0, a.jsx)(c.Button, {
                                'aria-label': x.intl.string(x.t.cpT0Cg),
                                look: c.Button.Looks.BLANK,
                                size: c.Button.Sizes.NONE,
                                onClick: n,
                                innerClassName: b.closeButtonInner,
                                className: b.closeButton,
                                children: (0, a.jsx)(c.XSmallIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: b.closeIcon
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(c.ModalContent, {
                        className: b.modalContent,
                        children: [
                            (0, a.jsx)('div', {
                                className: b.tipsSection,
                                children: p.map((e, t) =>
                                    (0, a.jsxs)(
                                        'div',
                                        {
                                            className: b.tipRow,
                                            children: [
                                                (0, a.jsx)(c.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'text-brand',
                                                    className: b.tipNumber,
                                                    children: t + 1
                                                }),
                                                (0, a.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: e
                                                })
                                            ]
                                        },
                                        t
                                    )
                                )
                            }),
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        className: b.moreHeading,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: x.intl.string(x.t.K5FKtb)
                                    }),
                                    (0, a.jsx)('div', {
                                        className: b.tipsSection,
                                        children: N
                                    })
                                ]
                            }),
                            (0, a.jsx)(u.Z, {
                                channelId: _,
                                warningId: v,
                                senderId: g,
                                safetyWarning: k
                            })
                        ]
                    })
                ]
            })
        })
    );
}
