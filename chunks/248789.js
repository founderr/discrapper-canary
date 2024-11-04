n.d(t, {
    Y: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(286379),
    s = n(442837),
    a = n(481060),
    o = n(797614),
    c = n(699516),
    u = n(378298),
    d = n(359119),
    h = n(473092),
    m = n(177342),
    p = n(134612),
    f = n(388032);
function g(e) {
    let { channelId: t, warningId: g, senderId: C } = e,
        x = l.useCallback(() => {
            (0, u.T)(t, [g]);
        }, [t, g]),
        v = (0, s.e7)([c.Z], () => c.Z.isBlocked(C)),
        _ = l.useMemo(
            () => ({
                channelId: t,
                warningId: g,
                senderId: C,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }),
            [t, g, C]
        );
    l.useEffect(() => {
        (0, h.KQ)({
            ..._,
            viewName: h.pb.SAFETY_WARNING_BANNER
        }),
            o.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
    }, [_]);
    let I = l.useCallback(
            (e) => {
                (0, h.qc)({
                    ..._,
                    cta: e
                });
            },
            [_]
        ),
        E = l.useCallback(() => {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('37229'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { transitionState: l, onClose: r } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: C,
                            channelId: t,
                            warningId: g,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: l,
                            onClose: r
                        });
                    };
                },
                { modalKey: p.X_ }
            ),
                I(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, C, g, I]),
        b = l.useCallback(() => {
            x(), I(h.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [x, I]),
        S = l.useCallback(() => {
            x(), I(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [x, I]),
        Z = l.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('19538').then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: l, onClose: r } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onBlock: b,
                        onBlockAndReport: S,
                        onCancel: () => {
                            null == r || r(), I(h.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: r,
                        userId: C,
                        channelId: t
                    });
                };
            });
        }, [b, S, C, t, I]);
    return (0, i.jsx)(m.Q, {
        channelId: t,
        warningId: g,
        senderId: C,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: f.intl.string(f.t.ZzlB5u),
        description: f.intl.string(f.t['D1aU+v']),
        onDismiss: x,
        buttons: [
            {
                text: f.intl.string(f.t.Qyu4UF),
                color: a.Button.Colors.BRAND,
                onclick: E
            },
            ...(v
                ? []
                : [
                      {
                          text: f.intl.string(f.t['7q0bNT']),
                          color: a.Button.Colors.PRIMARY,
                          onclick: Z
                      }
                  ])
        ]
    });
}
