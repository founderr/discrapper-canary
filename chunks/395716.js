n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(287734),
    o = n(592125),
    c = n(693546),
    d = n(388032);
function u(e) {
    let { joinRequest: t } = e,
        [n, u] = s.useState(!1),
        m = (0, r.e7)([o.Z], () => o.Z.getChannel(t.interviewChannelId)),
        h = s.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(d.intl.string(d.t.R0RpRU), l.ToastType.FAILURE));
        }, []),
        x = s.useCallback(async () => {
            if (null != m) {
                a.default.selectPrivateChannel(m.id);
                return;
            }
            if (!n) {
                u(!0);
                try {
                    await c.Z.createOrEnterJoinRequestInterview(t.joinRequestId);
                } catch {
                    h();
                } finally {
                    u(!1);
                }
            }
        }, [m, t.joinRequestId, h, n]);
    return (0, i.jsx)(l.Button, {
        color: l.Button.Colors.BRAND,
        submitting: n,
        onClick: x,
        children: d.intl.string(d.t.aqiUAA)
    });
}
