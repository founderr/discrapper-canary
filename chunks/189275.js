r.d(n, {
    O: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(626135),
    o = r(799352),
    l = r(110223),
    u = r(981631);
function c(e) {
    let { channelId: n, blockedUserIds: c, ignoredUserIds: d } = e;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await r.e('87337').then(r.bind(r, 164375));
            return (r) => {
                let { transitionState: a, onClose: s } = r;
                return (0, i.jsx)(e, {
                    channelId: n,
                    blockedUserIds: c,
                    ignoredUserIds: d,
                    transitionState: a,
                    onClose: s
                });
            };
        },
        {
            onCloseCallback: () => {
                (0, o.O)(n),
                    s.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: l.q.DISMISS,
                        channel_id: n,
                        warning_medium: l.WR.MODAL,
                        blocked_user_ids: c,
                        ignored_user_ids: d
                    });
            }
        }
    );
}
