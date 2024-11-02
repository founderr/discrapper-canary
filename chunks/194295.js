n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(278323),
    r = n(13245),
    s = n(45114),
    o = n(593481),
    a = n(237997),
    l = n(312839),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function h(e, t, n, h) {
    let p = t.username,
        f = u.intl.format(u.t.VDODnp, {
            username: '',
            game: n.name
        }),
        g = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: v } = (0, l.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        colorScheme: o.ZP.ColorSchemes.PRIMARY,
        icon: g,
        title: p,
        body: f,
        hint: (e) => (0, o.QR)(e, (0, l.P)(), u.t['Odi54+']),
        confirmText: u.intl.string(u.t['fgP/wc']),
        cancelText: u.intl.string(u.t.tpXzJy),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: a.Z.isInstanceUILocked() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
            }),
                v('join'),
                r.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, s.In)(e.id, !0, !0), r.Z.updateNotificationStatus(n), v('decline');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
