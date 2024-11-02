n.d(t, {
    s: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(693546),
    s = n(246364),
    o = n(388032);
function c(e, t, c) {
    let [u, d] = l.useState(!1),
        h = () => {
            (0, r.showToast)((0, r.createToast)(o.intl.string(o.t.R0RpRU), r.ToastType.FAILURE));
        },
        m = async () => {
            if (!u && null != e && null != t && null != c) {
                d(!0);
                try {
                    await a.Z.updateGuildJoinRequest(e, t, c, s.wB.APPROVED);
                } catch {
                    h();
                } finally {
                    d(!1);
                }
            }
        };
    return {
        approveRequest: m,
        rejectRequest: () => {
            null != e &&
                null != t &&
                null != c &&
                (0, r.openModalLazy)(async () => {
                    let { default: l } = await n.e('56496').then(n.bind(n, 113886));
                    return (n) =>
                        (0, i.jsx)(l, {
                            modalProps: n,
                            guildId: e,
                            userId: t,
                            guildJoinRequestId: c,
                            onError: h
                        });
                });
        },
        submitting: u
    };
}
