var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(367907),
    u = n(681678),
    c = n(138201),
    d = n(592125),
    f = n(699516),
    _ = n(5192),
    p = n(981631),
    h = n(388032);
t.Z = (e) => {
    let { user: t, channelId: n, reportId: m } = e,
        g = (0, a.e7)([f.Z], () => f.Z.isBlocked(t.id), [t.id]),
        E = (0, a.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        v = i.useMemo(() => _.ZP.getName(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, t), [E, t]),
        b = i.useCallback(() => {
            l.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: m
            }),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: p.OGo.BLOCKED
                }),
                u.Z.showBlockSuccessToast(t.id, n);
        }, [t, m, n]);
    return (0, r.jsx)(c.Z, {
        title: h.intl.formatToPlainString(h.t['Q1o/f3'], { username: v }),
        description: h.intl.string(h.t.G08MKi),
        buttonText: g ? h.intl.string(h.t.ot2tSk) : h.intl.string(h.t['l+7PZW']),
        buttonDisabled: g,
        onButtonPress: b,
        buttonColor: s.Button.Colors.RED
    });
};
