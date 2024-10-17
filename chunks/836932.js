n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(224706),
    s = n(13245),
    a = n(593481),
    r = n(150097),
    o = n(312839),
    l = n(987650),
    c = n(689938);
function d(e, t, n, d, u) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        p = u.session_id;
    if (null == p) return null;
    let { icon: f, title: _, body: E } = (0, r.Xi)(e, t, n),
        { trackView: g, trackClick: m } = (0, o.R)(l.n0.ActivityInvite, {
            notif_type: l.n0.ActivityInvite,
            notif_user_id: n.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
            activity_type: h,
            activity_name: u.name
        });
    return {
        colorScheme: a.ZP.ColorSchemes.PRIMARY,
        icon: f,
        title: _,
        body: E,
        hint: (e) => (0, a.QR)(e, (0, o.P)(), c.Z.Messages.OVERLAY_UNLOCK_TO_JOIN),
        onNotificationShow: () => {
            g();
        },
        confirmText: c.Z.Messages.JOIN,
        onConfirmClick: (a, r) => {
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: d.id,
                channelId: e.id,
                messageId: t.id
            }),
                s.Z.updateNotificationStatus(r),
                m('join');
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
