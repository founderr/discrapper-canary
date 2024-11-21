var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(367907),
    u = n(681678),
    c = n(138201),
    d = n(699516),
    f = n(981631),
    _ = n(388032);
t.Z = (e) => {
    let { user: t, reportId: n } = e,
        p = (0, a.e7)([d.Z], () => d.Z.isBlocked(t.id), [t.id]),
        h = i.useCallback(() => {
            l.ZP.trackWithMetadata(f.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: n
            }),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: f.OGo.BLOCKED
                }),
                u.Z.showBlockSuccessToast(t.id);
        }, [t, n]);
    return (0, r.jsx)(c.Z, {
        title: _.intl.formatToPlainString(_.t['Q1o/f3'], { username: t.username }),
        description: _.intl.string(_.t.G08MKi),
        buttonText: p ? _.intl.string(_.t.ot2tSk) : _.intl.string(_.t['l+7PZW']),
        buttonDisabled: p,
        onButtonPress: h,
        buttonColor: s.Button.Colors.RED
    });
};
