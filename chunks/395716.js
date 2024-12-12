n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(287734),
    c = n(592125),
    s = n(693546),
    d = n(388032);
function u(e) {
    let { joinRequest: t } = e,
        [n, u] = r.useState(!1),
        m = (0, a.e7)([c.Z], () => c.Z.getChannel(t.interviewChannelId)),
        f = r.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(d.intl.string(d.t.R0RpRU), l.ToastType.FAILURE));
        }, []),
        b = r.useCallback(async () => {
            if (null != m) {
                o.default.selectPrivateChannel(m.id);
                return;
            }
            if (!n) {
                u(!0);
                try {
                    await s.Z.createOrEnterJoinRequestInterview(t.joinRequestId);
                } catch {
                    f();
                } finally {
                    u(!1);
                }
            }
        }, [m, t.joinRequestId, f, n]);
    return (0, i.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        submitting: n,
        onClick: b,
        children: d.intl.string(d.t.aqiUAA)
    });
}
