n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(278323),
    l = n(13245),
    o = n(45114),
    r = n(237997),
    s = n(145597),
    a = n(620954),
    u = n(987650),
    d = n(981631),
    c = n(388032);
function h(e, t, n, h) {
    let f = t.username,
        p = c.intl.format(c.t.VDODnp, {
            username: '',
            game: n.name
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: g, trackClick: v } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: m,
        title: f,
        body: p,
        confirmText: c.intl.string(c.t['fgP/wc']),
        cancelText: c.intl.string(c.t.tpXzJy),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: d.mFx.JOIN,
                activity: h,
                location: r.Z.isLocked((0, s.QF)()) ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY
            }),
                v('join'),
                l.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, o.In)(e.id, !0, !0), l.Z.updateNotificationStatus(n), v('decline');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
