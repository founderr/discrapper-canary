n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(367907),
    u = n(138201),
    c = n(699516),
    d = n(981631),
    f = n(388032);
t.Z = (e) => {
    let { user: t, reportId: n } = e,
        [_, h] = i.useState(!1),
        p = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(t.id), [t.id]) === d.OGo.BLOCKED;
    i.useEffect(() => {
        h(p);
    }, [p]);
    let m = i.useCallback(() => {
        h(!0),
            l.ZP.trackWithMetadata(d.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: n
            }),
            o.Z.addRelationship({
                userId: t.id,
                context: { location: 'ReportMenuBlockUser-iOS' },
                type: d.OGo.BLOCKED
            });
    }, [t, n]);
    return (0, r.jsx)(u.Z, {
        title: f.intl.formatToPlainString(f.t['Q1o/f3'], { username: t.username }),
        description: f.intl.string(f.t.G08MKi),
        buttonText: _ ? f.intl.string(f.t.ot2tSk) : f.intl.string(f.t['l+7PZW']),
        buttonDisabled: _,
        onButtonPress: m,
        buttonColor: s.Button.Colors.RED
    });
};
