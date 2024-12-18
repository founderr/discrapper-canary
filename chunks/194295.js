n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(278323),
    s = n(13245),
    r = n(45114),
    a = n(593481),
    o = n(237997),
    l = n(312839),
    d = n(981631),
    c = n(987650),
    u = n(388032);
function h(e, t, n, h) {
    let p = t.username,
        f = u.intl.format(u.t.VDODnp, {
            username: '',
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: v } = (0, l.R)(c.n0.ActivityInvite, {
            notif_type: c.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        icon: g,
        title: p,
        body: f,
        hint: (e) => (0, a.QR)(e, (0, l.P)(), u.t['Odi54+']),
        confirmText: u.intl.string(u.t['fgP/wc']),
        cancelText: u.intl.string(u.t.tpXzJy),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: d.mFx.JOIN,
                activity: h,
                location: o.Z.isInstanceLocked() ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY
            }),
                v('join'),
                s.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, r.In)(e.id, !0, !0), s.Z.updateNotificationStatus(n), v('decline');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
