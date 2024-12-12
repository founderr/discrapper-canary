r.d(n, {
    H: function () {
        return d;
    }
});
var i = r(200651),
    a = r(481060),
    s = r(699516),
    o = r(626135),
    l = r(110223),
    u = r(981631);
let c = 'blocked_user_joined_voice_channel_modal';
function d(e, n) {
    let d = s.Z.isBlocked(n);
    (0, a.openModalLazy)(
        async () => {
            let { default: a } = await r.e('85505').then(r.bind(r, 232837));
            return (r) => {
                let { transitionState: s, onClose: o } = r;
                return (0, i.jsx)(a, {
                    channelId: e,
                    userId: n,
                    transitionState: s,
                    onClose: o
                });
            };
        },
        {
            modalKey: c,
            onCloseCallback: () => {
                o.default.track(u.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: l.q.DISMISS,
                    channel_id: e,
                    blocked_user_ids: d ? [n] : [],
                    ignored_user_ids: d ? [] : [n],
                    warning_surface: l.fz.POST_JOIN_MODAL
                });
            }
        }
    );
}
