n.d(t, {
    H: function () {
        return u;
    }
});
var r = n(200651),
    i = n(481060),
    a = n(699516),
    s = n(626135),
    o = n(110223),
    l = n(981631);
function u(e, t) {
    let u = a.Z.isBlocked(t);
    (0, i.openModalLazy)(
        async () => {
            let { default: i } = await n.e('85505').then(n.bind(n, 232837));
            return (n) => {
                let { transitionState: a, onClose: s } = n;
                return (0, r.jsx)(i, {
                    channelId: e,
                    userId: t,
                    transitionState: a,
                    onClose: s
                });
            };
        },
        {
            modalKey: 'blocked_user_joined_voice_channel_modal',
            onCloseCallback: () => {
                s.default.track(l.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: o.q.DISMISS,
                    channel_id: e,
                    blocked_user_ids: u ? [t] : [],
                    ignored_user_ids: u ? [] : [t],
                    warning_surface: o.fz.POST_JOIN_MODAL
                });
            }
        }
    );
}
