n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(224706),
    s = n(13245),
    r = n(593481),
    a = n(150097),
    l = n(312839),
    o = n(987650),
    c = n(388032);
function d(e, t, n, d, u) {
    if (null == t.activity) return null;
    let h = t.activity.type,
        p = u.session_id;
    if (null == p) return null;
    let { icon: f, title: m, body: g } = (0, a.Xi)(e, t, n),
        { trackView: v, trackClick: _ } = (0, l.R)(o.n0.ActivityInvite, {
            notif_type: o.n0.ActivityInvite,
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
        icon: f,
        title: m,
        body: g,
        hint: (e) => (0, r.QR)(e, (0, l.P)(), c.t.aB5xLy),
        onNotificationShow: () => {
            v();
        },
        confirmText: c.intl.string(c.t.VJlc0d),
        onConfirmClick: (r, a) => {
            i.Z.join({
                userId: n.id,
                sessionId: p,
                applicationId: d.id,
                channelId: e.id,
                messageId: t.id
            }),
                s.Z.updateNotificationStatus(a),
                _('join');
        },
        onDismissClick: () => {
            _('dismiss');
        }
    };
}
