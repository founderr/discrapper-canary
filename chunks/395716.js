n.d(s, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var t = n(735250),
    a = n(470079),
    l = n(442837),
    r = n(481060),
    i = n(287734),
    o = n(592125),
    c = n(693546),
    d = n(689938);
function u(e) {
    let { joinRequest: s } = e,
        [n, u] = a.useState(!1),
        I = (0, l.e7)([o.Z], () => o.Z.getChannel(s.interviewChannelId)),
        E = a.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(d.Z.Messages.ERROR_GENERIC_TITLE, r.ToastType.FAILURE));
        }, []),
        _ = a.useCallback(async () => {
            if (null != I) {
                i.default.selectPrivateChannel(I.id);
                return;
            }
            if (!n) {
                u(!0);
                try {
                    await c.Z.createOrEnterJoinRequestInterview(s.joinRequestId);
                } catch {
                    E();
                } finally {
                    u(!1);
                }
            }
        }, [I, s.joinRequestId, E, n]);
    return (0, t.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        submitting: n,
        onClick: _,
        children: d.Z.Messages.CLAN_DM_APPLICANT
    });
}
