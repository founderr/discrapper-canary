t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(481060),
    o = t(493683),
    r = t(122613),
    s = t(626135),
    c = t(827498),
    d = t(981631),
    u = t(388032);
function m(e) {
    let { botUserId: n, applicationId: t, buttonSize: m, analyticsLocations: p } = e,
        [h, f] = l.useState(!1),
        C = l.useRef(null),
        v = l.useCallback(async () => {
            s.default.track(d.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: t,
                button_action: c._y.OPEN_APP_DM
            }),
                f(!0);
            try {
                let e = await o.Z.openPrivateChannel(n);
                await (0, r.Z)({
                    targetApplicationId: t,
                    channelId: e,
                    analyticsLocations: p
                });
            } catch (e) {}
            clearTimeout(C.current), f(!1);
        }, [n, t, p]);
    return (0, i.jsx)(a.Button, {
        type: 'submit',
        size: m,
        color: a.Button.Colors.PRIMARY,
        submitting: h,
        onClick: v,
        'aria-label': u.intl.string(u.t.AUM8hY),
        children: u.intl.string(u.t.AUM8hY)
    });
}
