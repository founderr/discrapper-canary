n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(592125),
    c = n(693546),
    d = n(388032);
function u(e) {
    let { joinRequest: t } = e,
        [n, u] = l.useState(!1),
        m = (0, r.e7)([o.Z], () => o.Z.getChannel(t.interviewChannelId)),
        h = l.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRU), a.ToastType.FAILURE));
        }, []),
        x = l.useCallback(async () => {
            if (null != m) {
                s.default.selectPrivateChannel(m.id);
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
    return (0, i.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        submitting: n,
        onClick: x,
        children: d.intl.string(d.t.aqiUAA)
    });
}
