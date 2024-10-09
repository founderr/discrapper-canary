t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(481060),
    o = t(493683),
    r = t(626135),
    s = t(827498),
    c = t(981631),
    d = t(689938);
function u(e) {
    let { botUserId: n, applicationId: t, buttonSize: u } = e,
        [m, p] = a.useState(!1),
        _ = a.useRef(null),
        C = a.useCallback(async () => {
            r.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: t,
                button_action: s._y.OPEN_APP_DM
            }),
                p(!0),
                await o.Z.openPrivateChannel(n),
                clearTimeout(_.current),
                p(!1);
        }, [n, t]);
    return (0, i.jsx)(l.Button, {
        type: 'submit',
        size: u,
        color: l.Button.Colors.BRAND,
        submitting: m,
        onClick: C,
        'aria-label': d.Z.Messages.TRY_IT_OUT,
        children: d.Z.Messages.TRY_IT_OUT
    });
}
