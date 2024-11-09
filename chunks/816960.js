n.r(e),
    n.d(e, {
        default: function () {
            return p;
        }
    });
var s = n(200651),
    a = n(192379),
    i = n(286379),
    o = n(399606),
    r = n(481060),
    l = n(87051),
    d = n(661824),
    c = n(797614),
    u = n(9156),
    x = n(621600),
    m = n(359119),
    h = n(473092),
    g = n(222914),
    N = n(134612),
    T = n(981631),
    _ = n(388032),
    b = n(899014);
function p(t) {
    let { transitionState: e, onClose: n, handleBlock: p, channelId: v, warningId: j, senderId: A } = t,
        C = () => {
            n();
        },
        B = (0, N.C2)();
    a.useEffect(() => {
        (0, h.MC)(T.rMx.SAFETY_WARNING_MODAL_VIEWED, {
            channelId: v,
            warningId: j,
            senderId: A,
            warningType: m.pj.STRANGER_DANGER
        }),
            c.Z.increment({ name: i.V.SAFETY_WARNING_MODAL_VIEW });
    }, [v, j, A]);
    let y = (0, o.e7)([u.ZP], () => u.ZP.isChannelMuted(null, v));
    return (0, s.jsx)(r.ModalRoot, {
        transitionState: e,
        children: (0, s.jsxs)(r.Scroller, {
            style: { overflow: 'hidden auto' },
            children: [
                (0, s.jsxs)(r.ModalHeader, {
                    className: b.modalHeader,
                    children: [
                        (0, s.jsxs)('div', {
                            className: b.modalHeaderText,
                            children: [
                                (0, s.jsx)(r.Text, {
                                    variant: 'eyebrow',
                                    color: 'status-positive-text',
                                    children: _.intl.string(_.t.lyt43N)
                                }),
                                (0, s.jsx)(r.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'status-positive-text',
                                    children: _.intl.string(_.t.DJMZX1)
                                })
                            ]
                        }),
                        (0, s.jsx)(r.Button, {
                            'aria-label': _.intl.string(_.t.cpT0Cg),
                            look: r.Button.Looks.BLANK,
                            size: r.Button.Sizes.NONE,
                            onClick: n,
                            innerClassName: b.closeButtonInner,
                            className: b.closeButton,
                            children: (0, s.jsx)(r.XSmallIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: b.closeIcon
                            })
                        })
                    ]
                }),
                (0, s.jsxs)(r.ModalContent, {
                    className: b.modalContent,
                    children: [
                        (0, s.jsx)('div', {
                            className: b.tipsSection,
                            children: B.map((t, e) =>
                                (0, s.jsxs)(
                                    'div',
                                    {
                                        className: b.tipRow,
                                        children: [
                                            (0, s.jsx)(r.Heading, {
                                                variant: 'heading-md/semibold',
                                                color: 'text-brand',
                                                className: b.tipNumber,
                                                children: e + 1
                                            }),
                                            (0, s.jsx)(r.Text, {
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
                        (0, s.jsxs)('div', {
                            children: [
                                (0, s.jsx)(r.Text, {
                                    className: b.moreHeading,
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: _.intl.string(_.t.K5FKtb)
                                }),
                                (0, s.jsxs)('div', {
                                    className: b.tipsSection,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: b.safetyAction,
                                            children: [
                                                (0, s.jsxs)('div', {
                                                    className: b.safetyActionText,
                                                    children: [
                                                        (0, s.jsx)(r.Text, {
                                                            variant: 'text-md/semibold',
                                                            color: 'header-primary',
                                                            children: _.intl.string(_.t['UVp+4+'])
                                                        }),
                                                        (0, s.jsx)(r.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'header-secondary',
                                                            children: _.intl.string(_.t.VS47BA)
                                                        })
                                                    ]
                                                }),
                                                (0, s.jsx)(r.Button, {
                                                    size: r.Button.Sizes.SMALL,
                                                    color: r.Button.Colors.PRIMARY,
                                                    'aria-label': _.intl.string(_.t['UVp+4+']),
                                                    onClick: y
                                                        ? () => {
                                                              l.Z.updateChannelOverrideSettings(null, v, { muted: !1 }, x.ZB.Unmuted),
                                                                  (0, r.showToast)((0, r.createToast)(_.intl.string(_.t['A+N6lJ']), r.ToastType.SUCCESS)),
                                                                  (0, h.qc)({
                                                                      channelId: v,
                                                                      warningId: j,
                                                                      senderId: A,
                                                                      warningType: m.pj.STRANGER_DANGER,
                                                                      cta: h.NM.USER_MODAL_UNMUTE
                                                                  });
                                                          }
                                                        : () => {
                                                              l.Z.updateChannelOverrideSettings(null, v, { muted: !0 }, x.ZB.Muted),
                                                                  (0, r.showToast)((0, r.createToast)(_.intl.string(_.t.u3XBOD), r.ToastType.SUCCESS)),
                                                                  (0, h.qc)({
                                                                      channelId: v,
                                                                      warningId: j,
                                                                      senderId: A,
                                                                      warningType: m.pj.STRANGER_DANGER,
                                                                      cta: h.NM.USER_MODAL_MUTE
                                                                  });
                                                          },
                                                    children: y ? _.intl.string(_.t['6QK4Hx']) : _.intl.string(_.t['UVp+4+'])
                                                })
                                            ]
                                        }),
                                        (0, s.jsx)(d.Z, {}),
                                        (0, s.jsxs)('div', {
                                            className: b.safetyAction,
                                            children: [
                                                (0, s.jsxs)('div', {
                                                    className: b.safetyActionText,
                                                    children: [
                                                        (0, s.jsx)(r.Text, {
                                                            variant: 'text-md/semibold',
                                                            color: 'header-primary',
                                                            children: _.intl.string(_.t['5QYPOz'])
                                                        }),
                                                        (0, s.jsx)(r.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'header-secondary',
                                                            children: _.intl.string(_.t.OWoSUV)
                                                        })
                                                    ]
                                                }),
                                                (0, s.jsx)(r.Button, {
                                                    size: r.Button.Sizes.SMALL,
                                                    color: r.Button.Colors.RED,
                                                    'aria-label': _.intl.string(_.t.ie0QdH),
                                                    onClick: () => {
                                                        C(), p();
                                                    },
                                                    children: _.intl.string(_.t.ie0QdH)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(g.Z, {
                            channelId: v,
                            warningId: j,
                            senderId: A
                        })
                    ]
                })
            ]
        })
    });
}
