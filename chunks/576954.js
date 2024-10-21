n.d(t, {
    M: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(286379),
    l = n(481060),
    r = n(194359),
    o = n(797614),
    c = n(378298),
    u = n(359119),
    d = n(473092),
    h = n(177342),
    p = n(134612),
    m = n(981631),
    _ = n(689938);
function f(e) {
    let { channelId: t, warningId: f, senderId: E } = e,
        g = s.useCallback(() => {
            (0, c.T)(t, [f]);
        }, [t, f]),
        C = s.useCallback(
            (e) => () => {
                r.Z.addRelationship({
                    userId: E,
                    context: { location: p.zr },
                    type: m.OGo.BLOCKED
                }),
                    g(),
                    (0, l.showToast)((0, l.createToast)(_.Z.Messages.STRANGER_DANGER_BLOCK_CONFIRM, l.ToastType.SUCCESS)),
                    (0, d.qc)({
                        channelId: t,
                        warningId: f,
                        senderId: E,
                        warningType: u.pj.STRANGER_DANGER,
                        cta: e
                    });
            },
            [g, t, f, E]
        );
    s.useEffect(() => {
        (0, d.MC)(m.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: f,
            senderId: E,
            warningType: u.pj.STRANGER_DANGER
        }),
            o.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, [t, f, E]);
    let I = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e('95226').then(n.bind(n, 816960));
                return (n) => {
                    let { transitionState: s, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: s,
                        onClose: a,
                        channelId: t,
                        warningId: f,
                        senderId: E,
                        handleBlock: () => {
                            T(d.NM.USER_MODAL_BLOCK_CONFIRM, d.NM.USER_MODAL_BLOCK_CANCEL, I);
                        }
                    });
                };
            });
        },
        T = (e, s, a) => {
            (0, l.openModalLazy)(async () => {
                let { default: l } = await n.e('68747').then(n.bind(n, 744373));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        userId: E,
                        confirmBlock: C(e),
                        onCancel: () => {
                            null == a || a(),
                                (0, d.qc)({
                                    channelId: t,
                                    warningId: f,
                                    senderId: E,
                                    warningType: u.pj.STRANGER_DANGER,
                                    cta: s
                                });
                        }
                    });
            });
        };
    return (0, i.jsx)(h.Q, {
        channelId: t,
        warningId: f,
        senderId: E,
        warningType: u.pj.STRANGER_DANGER,
        header: _.Z.Messages.STRANGER_DANGER_BANNER_HEADER,
        description: _.Z.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
        onDismiss: g,
        buttons: [
            {
                text: _.Z.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
                color: l.Button.Colors.BRAND,
                onclick: () => {
                    I(),
                        (0, d.qc)({
                            channelId: t,
                            warningId: f,
                            senderId: E,
                            warningType: u.pj.STRANGER_DANGER,
                            cta: d.NM.OPEN_MORE_TIPS
                        });
                }
            },
            {
                text: _.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
                color: l.Button.Colors.RED,
                onclick: () => T(d.NM.USER_BANNER_BLOCK_CONFIRM, d.NM.USER_BANNER_BLOCK_CANCEL)
            }
        ]
    });
}
