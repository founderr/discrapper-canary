n.d(t, {
    M: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(286379),
    r = n(481060),
    s = n(194359),
    o = n(797614),
    c = n(378298),
    d = n(359119),
    u = n(473092),
    h = n(177342),
    p = n(134612),
    m = n(981631),
    f = n(388032);
function g(e) {
    let { channelId: t, warningId: g, senderId: C } = e,
        x = l.useCallback(() => {
            (0, c.T)(t, [g]);
        }, [t, g]),
        v = l.useCallback(
            (e) => () => {
                s.Z.addRelationship({
                    userId: C,
                    context: { location: p.zr },
                    type: m.OGo.BLOCKED
                }),
                    x(),
                    (0, r.showToast)((0, r.createToast)(f.intl.string(f.t.YVFRoK), r.ToastType.SUCCESS)),
                    (0, u.qc)({
                        channelId: t,
                        warningId: g,
                        senderId: C,
                        warningType: d.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [x, t, g, C]
        );
    l.useEffect(() => {
        (0, u.MC)(m.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: g,
            senderId: C,
            warningType: d.pj.STRANGER_DANGER
        }),
            o.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, [t, g, C]);
    let _ = () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e('95226').then(n.bind(n, 816960));
                return (n) => {
                    let { transitionState: l, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: a,
                        channelId: t,
                        warningId: g,
                        senderId: C,
                        handleBlock: () => {
                            I(u.NM.USER_MODAL_BLOCK_CONFIRM, u.NM.USER_MODAL_BLOCK_CANCEL, _);
                        }
                    });
                };
            });
        },
        I = (e, l, a) => {
            (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(r, {
                        ...n,
                        userId: C,
                        confirmBlock: v(e),
                        onCancel: () => {
                            null == a || a(),
                                (0, u.qc)({
                                    channelId: t,
                                    warningId: g,
                                    senderId: C,
                                    warningType: d.pj.STRANGER_DANGER,
                                    cta: l
                                });
                        }
                    });
            });
        };
    return (0, i.jsx)(h.Q, {
        channelId: t,
        warningId: g,
        senderId: C,
        warningType: d.pj.STRANGER_DANGER,
        header: f.intl.string(f.t.iOkDpK),
        description: f.intl.string(f.t.ISUbcH),
        onDismiss: x,
        buttons: [
            {
                text: f.intl.string(f.t['Qk/c4+']),
                color: r.Button.Colors.BRAND,
                onclick: () => {
                    _(),
                        (0, u.qc)({
                            channelId: t,
                            warningId: g,
                            senderId: C,
                            warningType: d.pj.STRANGER_DANGER,
                            cta: u.NM.OPEN_MORE_TIPS
                        });
                }
            },
            {
                text: f.intl.string(f.t.ie0QdH),
                color: r.Button.Colors.RED,
                onclick: () => I(u.NM.USER_BANNER_BLOCK_CONFIRM, u.NM.USER_BANNER_BLOCK_CANCEL)
            }
        ]
    });
}
