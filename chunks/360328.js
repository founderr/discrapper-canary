n.d(t, {
    s: function () {
        return c;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    l = n(693546),
    r = n(246364),
    o = n(689938);
function c(e, t, c) {
    let [u, d] = a.useState(!1),
        h = () => {
            (0, s.showToast)((0, s.createToast)(o.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
        },
        m = async () => {
            if (!u && null != e && null != t && null != c) {
                d(!0);
                try {
                    await l.Z.updateGuildJoinRequest(e, t, c, r.wB.APPROVED);
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
                (0, s.openModalLazy)(async () => {
                    let { default: a } = await n.e('56496').then(n.bind(n, 113886));
                    return (n) =>
                        (0, i.jsx)(a, {
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
