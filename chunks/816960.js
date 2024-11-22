n.r(t),
    n.d(t, {
        default: function () {
            return y;
        }
    });
var s = n(200651),
    i = n(192379),
    a = n(286379),
    o = n(399606),
    r = n(481060),
    l = n(87051),
    d = n(194359),
    c = n(661824),
    u = n(797614),
    x = n(922611),
    m = n(681678),
    g = n(699516),
    _ = n(9156),
    h = n(621600),
    N = n(359119),
    b = n(473092),
    v = n(222914),
    j = n(134612),
    p = n(981631),
    T = n(388032),
    A = n(899014);
function y(e) {
    let { transitionState: t, onClose: n, handleBlock: y, channelId: B, warningId: E, senderId: k } = e,
        R = (0, x.Do)({ location: 'web_stranger_danger_more' }),
        { isIgnored: C, isBlocked: S } = (0, o.cj)(
            [g.Z],
            () => ({
                isIgnored: g.Z.isIgnored(k),
                isBlocked: g.Z.isBlocked(k)
            }),
            [k]
        ),
        f = () => {
            n();
        },
        M = i.useCallback(() => {
            (0, b.qc)({
                channelId: B,
                warningId: E,
                senderId: k,
                warningType: N.pj.STRANGER_DANGER,
                cta: b.NM.USER_MODAL_IGNORE
            }),
                d.Z.ignoreUser(k, 'web_stranger_danger_more', B);
        }, [B, E, k]),
        I = i.useCallback(() => {
            (0, b.qc)({
                channelId: B,
                warningId: E,
                senderId: k,
                warningType: N.pj.STRANGER_DANGER,
                cta: b.NM.USER_MODAL_UNIGNORE
            }),
                d.Z.unignoreUser(k, 'web_stranger_danger_more', B);
        }, [B, E, k]),
        O = (0, j.C2)();
    i.useEffect(() => {
        (0, b.MC)(p.rMx.SAFETY_WARNING_MODAL_VIEWED, {
            channelId: B,
            warningId: E,
            senderId: k,
            warningType: N.pj.STRANGER_DANGER
        }),
            u.Z.increment({ name: a.V.SAFETY_WARNING_MODAL_VIEW });
    }, [B, E, k]);
    let D = (0, o.e7)([_.ZP], () => _.ZP.isChannelMuted(null, B));
    return (0, s.jsx)(r.ModalRoot, {
        transitionState: t,
        children: (0, s.jsxs)(r.Scroller, {
            style: { overflow: 'hidden auto' },
            children: [
                (0, s.jsxs)(r.ModalHeader, {
                    className: A.modalHeader,
                    children: [
                        (0, s.jsxs)('div', {
                            className: A.modalHeaderText,
                            children: [
                                (0, s.jsx)(r.Text, {
                                    variant: 'eyebrow',
                                    color: 'status-positive-text',
                                    children: T.intl.string(T.t.lyt43N)
                                }),
                                (0, s.jsx)(r.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'status-positive-text',
                                    children: T.intl.string(T.t.DJMZX1)
                                })
                            ]
                        }),
                        (0, s.jsx)(r.Button, {
                            'aria-label': T.intl.string(T.t.cpT0Cg),
                            look: r.Button.Looks.BLANK,
                            size: r.Button.Sizes.NONE,
                            onClick: n,
                            innerClassName: A.closeButtonInner,
                            className: A.closeButton,
                            children: (0, s.jsx)(r.XSmallIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: A.closeIcon
                            })
                        })
                    ]
                }),
                (0, s.jsxs)(r.ModalContent, {
                    className: A.modalContent,
                    children: [
                        (0, s.jsx)('div', {
                            className: A.tipsSection,
                            children: O.map((e, t) =>
                                (0, s.jsxs)(
                                    'div',
                                    {
                                        className: A.tipRow,
                                        children: [
                                            (0, s.jsx)(r.Heading, {
                                                variant: 'heading-md/semibold',
                                                color: 'text-brand',
                                                className: A.tipNumber,
                                                children: t + 1
                                            }),
                                            (0, s.jsx)(r.Text, {
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
                        (0, s.jsxs)('div', {
                            children: [
                                (0, s.jsx)(r.Text, {
                                    className: A.moreHeading,
                                    variant: 'eyebrow',
                                    color: 'header-secondary',
                                    children: T.intl.string(T.t.K5FKtb)
                                }),
                                (0, s.jsxs)('div', {
                                    className: A.tipsSection,
                                    children: [
                                        R &&
                                            (0, s.jsxs)('div', {
                                                className: A.safetyAction,
                                                children: [
                                                    (0, s.jsxs)('div', {
                                                        className: A.safetyActionText,
                                                        children: [
                                                            (0, s.jsx)(r.Text, {
                                                                variant: 'text-md/semibold',
                                                                color: 'header-primary',
                                                                children: T.intl.string(T.t.avyV7O)
                                                            }),
                                                            (0, s.jsx)(r.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'header-secondary',
                                                                children: T.intl.string(T.t.naWE6e)
                                                            })
                                                        ]
                                                    }),
                                                    (0, s.jsx)(r.Button, {
                                                        size: r.Button.Sizes.SMALL,
                                                        color: r.Button.Colors.PRIMARY,
                                                        'aria-label': C ? T.intl.string(T.t['3SrzRU']) : T.intl.string(T.t.avyV7O),
                                                        onClick: C ? I : M,
                                                        disabled: S,
                                                        children: C ? T.intl.string(T.t['3SrzRU']) : T.intl.string(T.t.avyV7O)
                                                    })
                                                ]
                                            }),
                                        !R &&
                                            (0, s.jsxs)('div', {
                                                className: A.safetyAction,
                                                children: [
                                                    (0, s.jsxs)('div', {
                                                        className: A.safetyActionText,
                                                        children: [
                                                            (0, s.jsx)(r.Text, {
                                                                variant: 'text-md/semibold',
                                                                color: 'header-primary',
                                                                children: T.intl.string(T.t['UVp+4+'])
                                                            }),
                                                            (0, s.jsx)(r.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'header-secondary',
                                                                children: T.intl.string(T.t.VS47BA)
                                                            })
                                                        ]
                                                    }),
                                                    (0, s.jsx)(r.Button, {
                                                        size: r.Button.Sizes.SMALL,
                                                        color: r.Button.Colors.PRIMARY,
                                                        'aria-label': D ? T.intl.string(T.t['6QK4Hx']) : T.intl.string(T.t['UVp+4+']),
                                                        onClick: D
                                                            ? () => {
                                                                  l.Z.updateChannelOverrideSettings(null, B, { muted: !1 }, h.ZB.Unmuted),
                                                                      m.Z.showUnmuteSuccessToast(k, B),
                                                                      (0, b.qc)({
                                                                          channelId: B,
                                                                          warningId: E,
                                                                          senderId: k,
                                                                          warningType: N.pj.STRANGER_DANGER,
                                                                          cta: b.NM.USER_MODAL_UNMUTE
                                                                      });
                                                              }
                                                            : () => {
                                                                  l.Z.updateChannelOverrideSettings(null, B, { muted: !0 }, h.ZB.Muted),
                                                                      m.Z.showMuteSuccessToast(k, B),
                                                                      (0, b.qc)({
                                                                          channelId: B,
                                                                          warningId: E,
                                                                          senderId: k,
                                                                          warningType: N.pj.STRANGER_DANGER,
                                                                          cta: b.NM.USER_MODAL_MUTE
                                                                      });
                                                              },
                                                        children: D ? T.intl.string(T.t['6QK4Hx']) : T.intl.string(T.t['UVp+4+'])
                                                    })
                                                ]
                                            }),
                                        (0, s.jsx)(c.Z, {}),
                                        (0, s.jsxs)('div', {
                                            className: A.safetyAction,
                                            children: [
                                                (0, s.jsxs)('div', {
                                                    className: A.safetyActionText,
                                                    children: [
                                                        (0, s.jsx)(r.Text, {
                                                            variant: 'text-md/semibold',
                                                            color: 'header-primary',
                                                            children: T.intl.string(T.t['5QYPOz'])
                                                        }),
                                                        (0, s.jsx)(r.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'header-secondary',
                                                            children: T.intl.string(T.t.G08MKi)
                                                        })
                                                    ]
                                                }),
                                                (0, s.jsx)(r.Button, {
                                                    size: r.Button.Sizes.SMALL,
                                                    color: r.Button.Colors.RED,
                                                    'aria-label': T.intl.string(T.t.ie0QdH),
                                                    onClick: () => {
                                                        f(), y();
                                                    },
                                                    disabled: S,
                                                    children: S ? T.intl.string(T.t.ot2tSk) : T.intl.string(T.t.ie0QdH)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(v.Z, {
                            channelId: B,
                            warningId: E,
                            senderId: k
                        })
                    ]
                })
            ]
        })
    });
}
