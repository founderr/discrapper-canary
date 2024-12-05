n.d(t, {
    M: function () {
        return E;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(442837),
    s = n(481060),
    o = n(87051),
    c = n(797614),
    d = n(681678),
    u = n(378298),
    h = n(359119),
    p = n(473092),
    m = n(177342),
    f = n(9156),
    g = n(621600),
    C = n(870991),
    x = n(981631),
    v = n(388032),
    _ = n(162787);
function I(e) {
    let { senderId: t, channelId: n, warningId: l } = e,
        r = (0, a.e7)([f.ZP], () => f.ZP.isChannelMuted(null, n));
    return (0, i.jsxs)('div', {
        className: _.safetyAction,
        children: [
            (0, i.jsxs)('div', {
                className: _.safetyActionText,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: v.intl.string(v.t['UVp+4+'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: v.intl.string(v.t.VS47BA)
                    })
                ]
            }),
            (0, i.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                color: s.Button.Colors.PRIMARY,
                'aria-label': r ? v.intl.string(v.t['6QK4Hx']) : v.intl.string(v.t['UVp+4+']),
                onClick: r
                    ? () => {
                          o.Z.updateChannelOverrideSettings(null, n, { muted: !1 }, g.ZB.Unmuted),
                              d.Z.showUnmuteSuccessToast(t, n),
                              (0, p.qc)({
                                  channelId: n,
                                  warningId: l,
                                  senderId: t,
                                  warningType: h.pj.STRANGER_DANGER,
                                  cta: p.NM.USER_MODAL_UNMUTE
                              });
                      }
                    : () => {
                          o.Z.updateChannelOverrideSettings(null, n, { muted: !0 }, g.ZB.Muted),
                              d.Z.showMuteSuccessToast(t, n),
                              (0, p.qc)({
                                  channelId: n,
                                  warningId: l,
                                  senderId: t,
                                  warningType: h.pj.STRANGER_DANGER,
                                  cta: p.NM.USER_MODAL_MUTE
                              });
                      },
                children: r ? v.intl.string(v.t['6QK4Hx']) : v.intl.string(v.t['UVp+4+'])
            })
        ]
    });
}
function E(e) {
    let { channelId: t, warningId: a, senderId: o } = e,
        d = (0, C.E4)(),
        f = l.useCallback(() => {
            (0, u.T)(t, [a]);
        }, [t, a]),
        g = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: a,
                        senderId: o,
                        description: v.intl.string(v.t['/uid3t']),
                        safetyTips: d.map((e, t) =>
                            (0, i.jsxs)(
                                'div',
                                {
                                    className: _.tipContent,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/medium',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(
                                            s.Text,
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
                        actions: (0, i.jsx)(I, {
                            senderId: o,
                            channelId: t,
                            warningId: a
                        }),
                        learnMore: v.intl.format(v.t.UkH129, { learnMoreLink: C.D8 })
                    });
                };
            });
        };
    return (
        l.useEffect(() => {
            (0, p.MC)(x.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: a,
                senderId: o,
                warningType: h.pj.LIKELY_ATO
            }),
                c.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
        }, [t, a, o]),
        (0, i.jsx)(m.Q, {
            channelId: t,
            warningId: a,
            senderId: o,
            warningType: h.pj.LIKELY_ATO,
            header: v.intl.string(v.t.R8UsiI),
            description: v.intl.string(v.t.lI8nQk),
            onDismiss: f,
            buttons: [
                {
                    text: v.intl.string(v.t.tC1pvL),
                    color: s.Button.Colors.BRAND,
                    onclick: () => {
                        g(),
                            (0, p.qc)({
                                channelId: t,
                                warningId: a,
                                senderId: o,
                                warningType: h.pj.LIKELY_ATO,
                                cta: p.NM.OPEN_MORE_TIPS
                            });
                    }
                }
            ]
        })
    );
}
