var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(194359),
    u = n(367907),
    c = n(138201),
    d = n(699516),
    _ = n(981631),
    E = n(689938);
let f = (e) => {
    let { user: t, reportId: n } = e,
        [r, f] = a.useState(!1),
        h = (0, o.e7)([d.Z], () => d.Z.getRelationshipType(t.id), [t.id]) === _.OGo.BLOCKED;
    a.useEffect(() => {
        f(h);
    }, [h]);
    let p = a.useCallback(() => {
        f(!0),
            u.ZP.trackWithMetadata(_.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: n
            }),
            l.Z.addRelationship({
                userId: t.id,
                context: { location: 'ReportMenuBlockUser-iOS' },
                type: _.OGo.BLOCKED
            });
    }, [t, n]);
    return (0, i.jsx)(c.Z, {
        title: E.Z.Messages.IAR_UPSELLS_BLOCK_TITLE.format({ username: t.username }),
        description: E.Z.Messages.IAR_UPSELLS_BLOCK_DESCRIPTION,
        buttonText: r ? E.Z.Messages.IAR_UPSELLS_BLOCKED_BUTTON : E.Z.Messages.IAR_UPSELLS_BLOCK_BUTTON,
        buttonDisabled: r,
        onButtonPress: p,
        buttonColor: s.Button.Colors.RED
    });
};
t.Z = f;
