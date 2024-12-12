var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(194359),
    u = r(367907),
    c = r(681678),
    d = r(138201),
    f = r(592125),
    _ = r(699516),
    h = r(5192),
    p = r(981631),
    m = r(388032);
let g = (e) => {
    let { user: n, channelId: r, reportId: g } = e,
        E = (0, s.e7)([_.Z], () => _.Z.isBlocked(n.id), [n.id]),
        v = (0, s.e7)([f.Z], () => f.Z.getChannel(r), [r]),
        I = a.useMemo(() => h.ZP.getName(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, n), [v, n]),
        T = a.useCallback(() => {
            u.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: n.id,
                report_id: g
            }),
                l.Z.addRelationship({
                    userId: n.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: p.OGo.BLOCKED
                }),
                c.Z.showBlockSuccessToast(n.id, r);
        }, [n, g, r]);
    return (0, i.jsx)(d.Z, {
        title: m.intl.formatToPlainString(m.t['Q1o/f3'], { username: I }),
        description: m.intl.string(m.t.G08MKi),
        buttonText: E ? m.intl.string(m.t.ot2tSk) : m.intl.string(m.t['l+7PZW']),
        buttonDisabled: E,
        onButtonPress: T,
        buttonColor: o.Button.Colors.RED
    });
};
n.Z = g;
