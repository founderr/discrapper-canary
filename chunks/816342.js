var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(367907),
    u = n(760030),
    c = n(138201),
    d = n(699516),
    f = n(51144),
    _ = n(981631),
    p = n(388032);
t.Z = (e) => {
    let { user: t, reportId: n } = e,
        h = (0, a.e7)([d.Z], () => d.Z.isBlocked(t.id), [t.id]),
        m = i.useCallback(() => {
            l.ZP.trackWithMetadata(_.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: n
            }),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: _.OGo.BLOCKED
                }),
                u.Z.showBlockSuccessToast(f.ZP.getUserTag(t));
        }, [t, n]);
    return (0, r.jsx)(c.Z, {
        title: p.intl.formatToPlainString(p.t['Q1o/f3'], { username: t.username }),
        description: p.intl.string(p.t.G08MKi),
        buttonText: h ? p.intl.string(p.t.ot2tSk) : p.intl.string(p.t['l+7PZW']),
        buttonDisabled: h,
        onButtonPress: m,
        buttonColor: s.Button.Colors.RED
    });
};
