n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(278323),
    r = n(13245),
    l = n(45114),
    o = n(237997),
    a = n(145597),
    s = n(620954),
    u = n(987650),
    c = n(981631),
    d = n(388032);
function h(e, t, n, h) {
    let f = t.username,
        p = d.intl.format(d.t.VDODnp, {
            username: '',
            game: n.name
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: E, trackClick: v } = (0, s.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: m,
        title: f,
        body: p,
        confirmText: d.intl.string(d.t['fgP/wc']),
        cancelText: d.intl.string(d.t.tpXzJy),
        onNotificationShow: () => {
            E();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: o.Z.isLocked((0, a.QF)()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
            }),
                v('join'),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, l.In)(e.id, !0, !0), r.Z.updateNotificationStatus(n), v('decline');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
