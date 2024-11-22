n.d(t, {
    M: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    c = n(797614),
    d = n(699516),
    u = n(378298),
    h = n(359119),
    p = n(473092),
    m = n(177342),
    f = n(134612),
    g = n(981631),
    C = n(388032);
function x(e) {
    let { channelId: t, warningId: x, senderId: _ } = e,
        v = (0, a.e7)([d.Z], () => d.Z.isBlocked(_), [_]),
        I = l.useCallback(() => {
            (0, u.T)(t, [x]);
        }, [t, x]),
        E = l.useCallback(
            (e) => () => {
                o.Z.addRelationship({
                    userId: _,
                    context: { location: f.zr },
                    type: g.OGo.BLOCKED
                }),
                    I(),
                    (0, p.qc)({
                        channelId: t,
                        warningId: x,
                        senderId: _,
                        warningType: h.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [I, t, x, _]
        );
    l.useEffect(() => {
        (0, p.MC)(g.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: x,
            senderId: _,
            warningType: h.pj.STRANGER_DANGER
        }),
            c.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, [t, x, _]);
    let b = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('95226').then(n.bind(n, 816960));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: x,
                        senderId: _,
                        handleBlock: () => {
                            Z(p.NM.USER_MODAL_BLOCK_CONFIRM, p.NM.USER_MODAL_BLOCK_CANCEL, b);
                        }
                    });
                };
            });
        },
        Z = (e, l, r) => {
            (0, s.openModalLazy)(async () => {
                let { default: a } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(a, {
                        ...n,
                        userId: _,
                        confirmBlock: E(e),
                        onCancel: () => {
                            null == r || r(),
                                (0, p.qc)({
                                    channelId: t,
                                    warningId: x,
                                    senderId: _,
                                    warningType: h.pj.STRANGER_DANGER,
                                    cta: l
                                });
                        }
                    });
            });
        };
    return (0, i.jsx)(m.Q, {
        channelId: t,
        warningId: x,
        senderId: _,
        warningType: h.pj.STRANGER_DANGER,
        header: C.intl.string(C.t.iOkDpK),
        description: C.intl.string(C.t.ISUbcH),
        onDismiss: I,
        buttons: [
            {
                text: C.intl.string(C.t['Qk/c4+']),
                color: s.Button.Colors.BRAND,
                onclick: () => {
                    b(),
                        (0, p.qc)({
                            channelId: t,
                            warningId: x,
                            senderId: _,
                            warningType: h.pj.STRANGER_DANGER,
                            cta: p.NM.OPEN_MORE_TIPS
                        });
                }
            },
            ...(v
                ? []
                : [
                      {
                          text: C.intl.string(C.t.ie0QdH),
                          color: s.Button.Colors.RED,
                          onclick: () => Z(p.NM.USER_BANNER_BLOCK_CONFIRM, p.NM.USER_BANNER_BLOCK_CANCEL)
                      }
                  ])
        ]
    });
}
