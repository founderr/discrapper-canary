n.d(t, {
    M: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(481060),
    s = n(87051),
    o = n(797614),
    c = n(681678),
    d = n(378298),
    u = n(359119),
    h = n(473092),
    p = n(177342),
    m = n(621600),
    f = n(870991),
    g = n(981631),
    C = n(388032),
    x = n(162787);
function v(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)('div', {
        className: x.safetyAction,
        children: [
            (0, i.jsxs)('div', {
                className: x.safetyActionText,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: C.intl.string(C.t.ftIK2N)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: C.intl.string(C.t.w2ve0t)
                    })
                ]
            }),
            (0, i.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                color: a.Button.Colors.PRIMARY,
                'aria-label': C.intl.string(C.t.ftIK2N),
                onClick: t,
                children: C.intl.string(C.t.ftIK2N)
            })
        ]
    });
}
function _(e) {
    let { channelId: t, warningId: _, senderId: I } = e,
        E = (0, f.E4)(),
        b = l.useCallback(() => {
            (0, d.T)(t, [_]);
        }, [t, _]),
        Z = () => {
            s.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, m.ZB.Muted),
                c.Z.showMuteSuccessToast(I, t),
                (0, h.qc)({
                    channelId: t,
                    warningId: _,
                    senderId: I,
                    warningType: u.pj.LIKELY_ATO,
                    cta: h.NM.USER_MODAL_MUTE
                }),
                b();
        },
        N = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: _,
                        senderId: I,
                        description: C.intl.string(C.t['/uid3t']),
                        safetyTips: E.map((e, t) =>
                            (0, i.jsxs)(
                                'div',
                                {
                                    className: x.tipContent,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-md/medium',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(
                                            a.Text,
                                            {
                                                variant: 'text-sm/medium',
                                                color: 'header-secondary',
                                                children: e.description
                                            },
                                            t
                                        )
                                    ]
                                },
                                t
                            )
                        ),
                        actions: (0, i.jsx)(v, {
                            senderId: I,
                            channelId: t,
                            warningId: _,
                            onClick: () => {
                                Z(), r();
                            }
                        }),
                        learnMore: (0, i.jsx)(a.Clickable, {
                            onClick: () =>
                                (0, h.qc)({
                                    channelId: t,
                                    warningId: _,
                                    senderId: I,
                                    warningType: u.pj.LIKELY_ATO,
                                    cta: h.NM.USER_MODAL_LEARN_MORE
                                }),
                            children: (0, i.jsx)(a.Heading, {
                                variant: 'heading-sm/medium',
                                color: 'text-link',
                                children: C.intl.format(C.t.UkH129, { learnMoreLink: f.D8 })
                            })
                        })
                    });
                };
            });
        };
    return (
        l.useEffect(() => {
            (0, h.MC)(g.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: _,
                senderId: I,
                warningType: u.pj.LIKELY_ATO
            }),
                o.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
        }, [t, _, I]),
        (0, i.jsx)(p.Q, {
            channelId: t,
            warningId: _,
            senderId: I,
            warningType: u.pj.LIKELY_ATO,
            header: C.intl.string(C.t.R8UsiI),
            description: C.intl.string(C.t.lI8nQk),
            onDismiss: b,
            buttons: [
                {
                    text: C.intl.string(C.t.tC1pvL),
                    color: a.Button.Colors.BRAND,
                    onclick: () => {
                        N(),
                            (0, h.qc)({
                                channelId: t,
                                warningId: _,
                                senderId: I,
                                warningType: u.pj.LIKELY_ATO,
                                cta: h.NM.OPEN_MORE_TIPS
                            });
                    }
                },
                {
                    text: C.intl.string(C.t.ftIK2N),
                    color: a.Button.Colors.PRIMARY,
                    onclick: Z
                }
            ]
        })
    );
}
