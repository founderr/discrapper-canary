n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(224706),
    o = n(13245),
    l = n(150097),
    r = n(620954),
    s = n(987650),
    a = n(388032);
function u(e, t, n, u, c) {
    if (null == t.activity || null == u.id) return null;
    let d = t.activity.type,
        h = c.session_id;
    if (null == h) return null;
    let { icon: f, title: p, body: m } = (0, l.Xi)(e, t, n),
        { trackView: v, trackClick: g } = (0, r.R)(s.n0.ActivityInvite, {
            notif_type: s.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: d,
            activity_name: c.name
        });
    return {
        icon: f,
        title: p,
        body: m,
        onNotificationShow: () => {
            v();
        },
        confirmText: a.intl.string(a.t.VJlc0d),
        onConfirmClick: (l, r) => {
            var s;
            i.Z.join({
                userId: n.id,
                sessionId: h,
                applicationId: null !== (s = u.altId) && void 0 !== s ? s : u.id,
                channelId: e.id,
                messageId: t.id
            }),
                o.Z.updateNotificationStatus(r),
                g('join');
        },
        onDismissClick: () => {
            g('dismiss');
        }
    };
}
