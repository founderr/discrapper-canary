var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(194359),
    o = n(367907),
    l = n(138201),
    u = n(699516),
    c = n(981631),
    d = n(388032);
t.Z = (e) => {
    let { user: t, reportId: n } = e,
        { isIgnored: f, isBlocked: _ } = (0, a.cj)(
            [u.Z],
            () => ({
                isIgnored: u.Z.isIgnored(t.id),
                isBlocked: u.Z.isBlocked(t.id)
            }),
            [t]
        ),
        p = i.useCallback(() => {
            o.ZP.trackWithMetadata(c.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: n
            }),
                s.Z.ignoreUser(t.id, 'web_iar_ignore_user_element');
        }, [t, n]),
        h = i.useMemo(() => f || _, [f, _]);
    return (0, r.jsx)(l.Z, {
        title: d.intl.formatToPlainString(d.t.U3yyFh, { username: t.username }),
        description: d.intl.string(d.t.naWE6e),
        buttonText: h ? d.intl.string(d.t.nDdxOD) : d.intl.string(d.t.ICYEfX),
        buttonDisabled: h,
        onButtonPress: p
    });
};
