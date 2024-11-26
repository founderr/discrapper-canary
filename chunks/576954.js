n.d(t, {
    M: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(442837),
    s = n(481060),
    o = n(87051),
    c = n(194359),
    d = n(797614),
    u = n(922611),
    h = n(681678),
    p = n(699516),
    m = n(9156),
    f = n(621600),
    g = n(378298),
    C = n(359119),
    x = n(473092),
    _ = n(177342),
    v = n(134612),
    I = n(981631),
    E = n(388032);
function b(e) {
    let { channelId: t, warningId: b, senderId: N } = e,
        { isIgnored: Z, isBlocked: S } = (0, a.cj)(
            [p.Z],
            () => ({
                isIgnored: p.Z.isIgnored(N),
                isBlocked: p.Z.isBlocked(N)
            }),
            [N]
        ),
        T = l.useCallback(() => {
            (0, g.T)(t, [b]);
        }, [t, b]),
        j = (0, a.e7)([m.ZP], () => m.ZP.isChannelMuted(null, t)),
        A = (0, u.Do)({ location: 'web_stranger_danger_more' }),
        y = (0, v.C2)(),
        P = () => {
            o.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, f.ZB.Muted),
                h.Z.showMuteSuccessToast(N, t),
                (0, x.qc)({
                    channelId: t,
                    warningId: b,
                    senderId: N,
                    warningType: C.pj.STRANGER_DANGER,
                    cta: x.NM.USER_MODAL_MUTE
                });
        },
        M = () => {
            o.Z.updateChannelOverrideSettings(null, t, { muted: !1 }, f.ZB.Unmuted),
                h.Z.showUnmuteSuccessToast(N, t),
                (0, x.qc)({
                    channelId: t,
                    warningId: b,
                    senderId: N,
                    warningType: C.pj.STRANGER_DANGER,
                    cta: x.NM.USER_MODAL_UNMUTE
                });
        },
        R = l.useCallback(() => {
            (0, x.qc)({
                channelId: t,
                warningId: b,
                senderId: N,
                warningType: C.pj.STRANGER_DANGER,
                cta: x.NM.USER_MODAL_IGNORE
            }),
                c.Z.ignoreUser(N, 'web_stranger_danger_more', t);
        }, [t, b, N]),
        L = l.useCallback(() => {
            (0, x.qc)({
                channelId: t,
                warningId: b,
                senderId: N,
                warningType: C.pj.STRANGER_DANGER,
                cta: x.NM.USER_MODAL_UNIGNORE
            }),
                c.Z.unignoreUser(N, 'web_stranger_danger_more', t);
        }, [t, b, N]),
        k = l.useCallback(
            (e) => () => {
                c.Z.addRelationship({
                    userId: N,
                    context: { location: v.zr },
                    type: I.OGo.BLOCKED
                }),
                    T(),
                    (0, x.qc)({
                        channelId: t,
                        warningId: b,
                        senderId: N,
                        warningType: C.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [T, t, b, N]
        );
    l.useEffect(() => {
        (0, x.MC)(I.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: b,
            senderId: N,
            warningType: C.pj.STRANGER_DANGER
        }),
            d.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, [t, b, N]);
    let O = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('59385').then(n.bind(n, 480884));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: b,
                        senderId: N,
                        description: E.intl.string(E.t.DJMZX1),
                        safetyTips: y,
                        actions: [
                            A
                                ? {
                                      title: E.intl.string(E.t.avyV7O),
                                      description: E.intl.string(E.t.naWE6e),
                                      button: {
                                          title: Z ? E.intl.string(E.t['3SrzRU']) : E.intl.string(E.t.avyV7O),
                                          onClick: Z ? L : R
                                      }
                                  }
                                : {
                                      title: E.intl.string(E.t['UVp+4+']),
                                      description: E.intl.string(E.t.VS47BA),
                                      button: {
                                          title: j ? E.intl.string(E.t['6QK4Hx']) : E.intl.string(E.t['UVp+4+']),
                                          onClick: j ? M : P
                                      }
                                  },
                            {
                                title: E.intl.string(E.t['5QYPOz']),
                                description: E.intl.string(E.t.G08MKi),
                                button: {
                                    title: E.intl.string(E.t.ie0QdH),
                                    color: s.Button.Colors.RED,
                                    onClick: () => {
                                        r(), D(x.NM.USER_MODAL_BLOCK_CONFIRM, x.NM.USER_MODAL_BLOCK_CANCEL, O);
                                    }
                                }
                            }
                        ]
                    });
                };
            });
        },
        D = (e, l, r) => {
            (0, s.openModalLazy)(async () => {
                let { default: a } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(a, {
                        ...n,
                        userId: N,
                        confirmBlock: k(e),
                        onCancel: () => {
                            null == r || r(),
                                (0, x.qc)({
                                    channelId: t,
                                    warningId: b,
                                    senderId: N,
                                    warningType: C.pj.STRANGER_DANGER,
                                    cta: l
                                });
                        }
                    });
            });
        };
    return (0, i.jsx)(_.Q, {
        channelId: t,
        warningId: b,
        senderId: N,
        warningType: C.pj.STRANGER_DANGER,
        header: E.intl.string(E.t.iOkDpK),
        description: E.intl.string(E.t.ISUbcH),
        onDismiss: T,
        buttons: [
            {
                text: E.intl.string(E.t['Qk/c4+']),
                color: s.Button.Colors.BRAND,
                onclick: () => {
                    O(),
                        (0, x.qc)({
                            channelId: t,
                            warningId: b,
                            senderId: N,
                            warningType: C.pj.STRANGER_DANGER,
                            cta: x.NM.OPEN_MORE_TIPS
                        });
                }
            },
            ...(S
                ? []
                : [
                      {
                          text: E.intl.string(E.t.ie0QdH),
                          color: s.Button.Colors.RED,
                          onclick: () => D(x.NM.USER_BANNER_BLOCK_CONFIRM, x.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
