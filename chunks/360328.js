n.d(t, {
    s: function () {
        return h;
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
    d = n(246364),
    u = n(388032);
function h(e, t, h, p) {
    let [m, f] = l.useState(!1),
        g = (0, r.e7)([o.Z], () => o.Z.getChannel(p)),
        C = l.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(u.intl.string(u.t.R0RpRU), a.ToastType.FAILURE));
        }, []),
        x = l.useCallback(async () => {
            if (!m && null != e && null != t && null != h) {
                if (null != g) {
                    s.default.selectPrivateChannel(g.id);
                    return;
                }
                if (!m) {
                    f(!0);
                    try {
                        await c.Z.createOrEnterJoinRequestInterview(h);
                    } catch {
                        C();
                    } finally {
                        f(!1);
                    }
                }
            }
        }, [e, h, g, C, m, t]),
        v = async () => {
            if (!m && null != e && null != t && null != h) {
                f(!0);
                try {
                    await c.Z.updateGuildJoinRequest(e, t, h, d.wB.APPROVED);
                } catch {
                    C();
                } finally {
                    f(!1);
                }
            }
        };
    return {
        approveRequest: v,
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != h &&
                (0, a.openModalLazy)(async () => {
                    let { default: l } = await n.e('56496').then(n.bind(n, 113886));
                    return (n) =>
                        (0, i.jsx)(l, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: h,
                            onError: C
                        });
                });
        },
        submitting: m,
        handleOpenInterview: x
    };
}
