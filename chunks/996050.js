n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(224706),
    r = n(13245),
    l = n(150097),
    o = n(620954),
    a = n(987650),
    s = n(388032);
function u(e, t, n, u, c) {
    if (null == t.activity || null == u.id) return null;
    let d = t.activity.type,
        h = c.session_id;
    if (null == h) return null;
    let { icon: f, title: p, body: m } = (0, l.Xi)(e, t, n),
        { trackView: E, trackClick: v } = (0, o.R)(a.n0.ActivityInvite, {
            notif_type: a.n0.ActivityInvite,
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
            E();
        },
        confirmText: s.intl.string(s.t.VJlc0d),
        onConfirmClick: (l, o) => {
            var a;
            i.Z.join({
                userId: n.id,
                sessionId: h,
                applicationId: null !== (a = u.altId) && void 0 !== a ? a : u.id,
                channelId: e.id,
                messageId: t.id
            }),
                r.Z.updateNotificationStatus(o),
                v('join');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
