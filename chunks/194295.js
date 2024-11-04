n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(278323),
    r = n(13245),
    s = n(45114),
    l = n(593481),
    a = n(237997),
    o = n(312839),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function h(e, t, n, h) {
    let p = t.username,
        f = u.intl.format(u.t.VDODnp, {
            username: '',
            game: n.name
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: g, trackClick: v } = (0, o.R)(d.n0.ActivityInvite, {
            notif_type: d.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        colorScheme: l.ZP.ColorSchemes.PRIMARY,
        icon: m,
        title: p,
        body: f,
        hint: (e) => (0, l.QR)(e, (0, o.P)(), u.t['Odi54+']),
        confirmText: u.intl.string(u.t['fgP/wc']),
        cancelText: u.intl.string(u.t.tpXzJy),
        onNotificationShow: () => {
            g();
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
