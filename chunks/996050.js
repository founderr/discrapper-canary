i.d(t, {
    Z: function () {
        return u;
    }
});
var n = i(224706),
    l = i(13245),
    o = i(150097),
    s = i(620954),
    r = i(987650),
    a = i(388032);
function u(e, t, i, u, d) {
    if (null == t.activity || null == u.id) return null;
    let c = t.activity.type,
        h = d.session_id;
    if (null == h) return null;
    let { icon: f, title: p, body: E } = (0, o.Xi)(e, t, i),
        { trackView: m, trackClick: v } = (0, s.R)(r.n0.ActivityInvite, {
            notif_type: r.n0.ActivityInvite,
            notif_user_id: i.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: c,
            activity_name: d.name
        });
    return {
        icon: f,
        title: p,
        body: E,
        onNotificationShow: () => {
            m();
        },
        confirmText: a.intl.string(a.t.VJlc0d),
        onConfirmClick: (o, s) => {
            var r;
            n.Z.join({
                userId: i.id,
                sessionId: h,
                applicationId: null !== (r = u.altId) && void 0 !== r ? r : u.id,
                channelId: e.id,
                messageId: t.id
            }),
                l.Z.updateNotificationStatus(s),
                v('join');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
