n.r(e),
    n.d(e, {
        default: function () {
            return v;
        }
    });
var a = n(200651),
    o = n(192379),
    s = n(286379),
    i = n(399606),
    c = n(481060),
    l = n(661824),
    r = n(797614),
    d = n(359119),
    u = n(473092),
    m = n(636749),
    x = n(981631),
    b = n(388032),
    h = n(636370);
function v(t) {
    let { transitionState: e, onClose: n, channelId: v, warningId: _, senderId: g, description: p, safetyTips: N, actions: j } = t,
        k = (0, i.e7)([d.ZP], () => d.ZP.getChannelSafetyWarning(v, _));
    return (
        o.useEffect(() => {
            (0, u.MC)(x.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: v,
                warningId: _,
                senderId: g,
                warningType: null == k ? void 0 : k.type
            }),
                r.Z.increment({ name: s.V.SAFETY_WARNING_MODAL_VIEW });
        }, [v, _, g, k]),
        (0, a.jsx)(c.ModalRoot, {
            transitionState: e,
            children: (0, a.jsxs)(c.Scroller, {
                style: { overflow: 'hidden auto' },
                children: [
                    (0, a.jsxs)(c.ModalHeader, {
                        className: h.modalHeader,
                        children: [
                            (0, a.jsxs)('div', {
                                className: h.modalHeaderText,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        variant: 'eyebrow',
                                        color: 'status-positive-text',
                                        children: b.intl.string(b.t.lyt43N)
                                    }),
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-xl/bold',
                                        color: 'status-positive-text',
                                        children: p
                                    })
                                ]
                            }),
                            (0, a.jsx)(c.Button, {
                                'aria-label': b.intl.string(b.t.cpT0Cg),
                                look: c.Button.Looks.BLANK,
                                size: c.Button.Sizes.NONE,
                                onClick: n,
                                innerClassName: h.closeButtonInner,
                                className: h.closeButton,
                                children: (0, a.jsx)(c.XSmallIcon, {
                                    size: 'sm',
                                    color: 'currentColor',
                                    className: h.closeIcon
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(c.ModalContent, {
                        className: h.modalContent,
                        children: [
                            (0, a.jsx)('div', {
                                className: h.tipsSection,
                                children: N.map((t, e) =>
                                    (0, a.jsxs)(
                                        'div',
                                        {
                                            className: h.tipRow,
                                            children: [
                                                (0, a.jsx)(c.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    color: 'text-brand',
                                                    className: h.tipNumber,
                                                    children: e + 1
                                                }),
                                                (0, a.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-secondary',
                                                    children: t
                                                })
                                            ]
                                        },
                                        e
                                    )
                                )
                            }),
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        className: h.moreHeading,
                                        variant: 'eyebrow',
                                        color: 'header-secondary',
                                        children: b.intl.string(b.t.K5FKtb)
                                    }),
                                    (0, a.jsx)('div', {
                                        className: h.tipsSection,
                                        children: j.map((t, e) => {
                                            var n;
                                            return (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsxs)('div', {
                                                        className: h.safetyAction,
                                                        children: [
                                                            (0, a.jsxs)('div', {
                                                                className: h.safetyActionText,
                                                                children: [
                                                                    (0, a.jsx)(c.Text, {
                                                                        variant: 'text-md/semibold',
                                                                        color: 'header-primary',
                                                                        children: t.title
                                                                    }),
                                                                    (0, a.jsx)(c.Text, {
                                                                        variant: 'text-xs/medium',
                                                                        color: 'header-secondary',
                                                                        children: t.description
                                                                    })
                                                                ]
                                                            }),
                                                            (0, a.jsx)(c.Button, {
                                                                size: c.Button.Sizes.SMALL,
                                                                color: null !== (n = t.button.color) && void 0 !== n ? n : c.Button.Colors.PRIMARY,
                                                                'aria-label': t.button.title,
                                                                onClick: t.button.onClick,
                                                                children: t.button.title
                                                            })
                                                        ]
                                                    }),
                                                    e < j.length - 1 ? (0, a.jsx)(l.Z, {}) : null
                                                ]
                                            });
                                        })
                                    })
                                ]
                            }),
                            (0, a.jsx)(m.Z, {
                                channelId: v,
                                warningId: _,
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
