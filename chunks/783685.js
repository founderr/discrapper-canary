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
    r = t(344996),
    s = t(626135),
    c = t(827498),
    d = t(981631);
function u(e) {
    let { botUserId: n, applicationId: t, buttonSize: u, channel: m } = e,
        [p, _] = a.useState(!1),
        C = a.useRef(null),
        h = a.useCallback(async () => {
            s.default.track(d.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: t,
                button_action: c._y.OPEN_APP_DM
            }),
                _(!0),
                await o.Z.openPrivateChannel(n),
                clearTimeout(C.current),
                _(!1);
        }, [n, t]),
        { buttonText: f } = (0, r.Z)({
            applicationId: t,
            channel: m
        });
    return (0, i.jsx)(l.Button, {
        type: 'submit',
        size: u,
        color: l.Button.Colors.PRIMARY,
        submitting: p,
        onClick: h,
        'aria-label': f,
        children: f
    });
}
