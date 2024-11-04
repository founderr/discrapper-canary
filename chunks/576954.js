n.d(t, {
    M: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(286379),
    s = n(481060),
    a = n(194359),
    o = n(797614),
    c = n(378298),
    u = n(359119),
    d = n(473092),
    h = n(177342),
    m = n(134612),
    p = n(981631),
    f = n(388032);
function g(e) {
    let { channelId: t, warningId: g, senderId: C } = e,
        x = l.useCallback(() => {
            (0, c.T)(t, [g]);
        }, [t, g]),
        v = l.useCallback(
            (e) => () => {
                a.Z.addRelationship({
                    userId: C,
                    context: { location: m.zr },
                    type: p.OGo.BLOCKED
                }),
                    x(),
                    (0, s.showToast)((0, s.createToast)(f.intl.string(f.t.YVFRoK), s.ToastType.SUCCESS)),
                    (0, d.qc)({
                        channelId: t,
                        warningId: g,
                        senderId: C,
                        warningType: u.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [x, t, g, C]
        );
    l.useEffect(() => {
        (0, d.MC)(p.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: g,
            senderId: C,
            warningType: u.pj.STRANGER_DANGER
        }),
            o.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, [t, g, C]);
    let _ = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('95226').then(n.bind(n, 816960));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: r,
                        channelId: t,
                        warningId: g,
                        senderId: C,
                        handleBlock: () => {
                            I(d.NM.USER_MODAL_BLOCK_CONFIRM, d.NM.USER_MODAL_BLOCK_CANCEL, _);
                        }
                    });
                };
            });
        },
        I = (e, l, r) => {
            (0, s.openModalLazy)(async () => {
                let { default: s } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(s, {
                        ...n,
                        userId: C,
                        confirmBlock: v(e),
                        onCancel: () => {
                            null == r || r(),
                                (0, d.qc)({
                                    channelId: t,
                                    warningId: g,
                                    senderId: C,
                                    warningType: u.pj.STRANGER_DANGER,
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
        warningType: u.pj.STRANGER_DANGER,
        header: f.intl.string(f.t.iOkDpK),
        description: f.intl.string(f.t.ISUbcH),
        onDismiss: x,
        buttons: [
            {
                text: f.intl.string(f.t['Qk/c4+']),
                color: s.Button.Colors.BRAND,
                onclick: () => {
                    _(),
                        (0, d.qc)({
                            channelId: t,
                            warningId: g,
                            senderId: C,
                            warningType: u.pj.STRANGER_DANGER,
                            cta: d.NM.OPEN_MORE_TIPS
                        });
                }
            },
            {
                text: f.intl.string(f.t.ie0QdH),
                color: s.Button.Colors.RED,
                onclick: () => I(d.NM.USER_BANNER_BLOCK_CONFIRM, d.NM.USER_BANNER_BLOCK_CANCEL)
            }
        ]
    });
}
