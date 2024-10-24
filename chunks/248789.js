n.d(t, {
    Y: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(286379),
    l = n(442837),
    r = n(481060),
    o = n(797614),
    c = n(699516),
    u = n(378298),
    d = n(359119),
    h = n(473092),
    p = n(177342),
    m = n(134612),
    _ = n(689938);
function f(e) {
    let { channelId: t, warningId: f, senderId: E } = e,
        g = s.useCallback(() => {
            (0, u.T)(t, [f]);
        }, [t, f]),
        C = (0, l.e7)([c.Z], () => c.Z.isBlocked(E)),
        I = s.useMemo(
            () => ({
                channelId: t,
                warningId: f,
                senderId: E,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }),
            [t, f, E]
        );
    s.useEffect(() => {
        (0, h.KQ)({
            ...I,
            viewName: h.pb.SAFETY_WARNING_BANNER
        }),
            o.Z.increment({ name: a.V.SAFETY_WARNING_VIEW });
    }, [I]);
    let T = s.useCallback(
            (e) => {
                (0, h.qc)({
                    ...I,
                    cta: e
                });
            },
            [I]
        ),
        x = s.useCallback(() => {
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('37229'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { transitionState: s, onClose: a } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: E,
                            channelId: t,
                            warningId: f,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: s,
                            onClose: a
                        });
                    };
                },
                { modalKey: m.X_ }
            ),
                T(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, E, f, T]),
        S = s.useCallback(() => {
            g(), T(h.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [g, T]),
        v = s.useCallback(() => {
            g(), T(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [g, T]),
        N = s.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e('19538').then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: s, onClose: a } = n;
                    return (0, i.jsx)(e, {
                        transitionState: s,
                        onBlock: S,
                        onBlockAndReport: v,
                        onCancel: () => {
                            null == a || a(), T(h.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: a,
                        userId: E,
                        channelId: t
                    });
                };
            });
        }, [S, v, E, t, T]);
    return (0, i.jsx)(p.Q, {
        channelId: t,
        warningId: f,
        senderId: E,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
        description: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
        onDismiss: g,
        buttons: [
            {
                text: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
                color: r.Button.Colors.BRAND,
                onclick: x
            },
            ...(C
                ? []
                : [
                      {
                          text: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
                          color: r.Button.Colors.PRIMARY,
                          onclick: N
                      }
                  ])
        ]
    });
}
