i.d(t, {
    Z: function () {
        return h;
    }
});
var n = i(278323),
    l = i(13245),
    o = i(45114),
    s = i(237997),
    r = i(145597),
    a = i(620954),
    u = i(987650),
    d = i(981631),
    c = i(388032);
function h(e, t, i, h) {
    let f = t.username,
        p = c.intl.format(c.t.VDODnp, {
            username: '',
            game: i.name
        }),
        E = t.getAvatarURL(e.guild_id, 80),
        { trackView: m, trackClick: v } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: d.mFx.JOIN_REQUEST,
            activity_name: h.name
        });
    return {
        icon: E,
        title: f,
        body: p,
        confirmText: c.intl.string(c.t['fgP/wc']),
        cancelText: c.intl.string(c.t.tpXzJy),
        onNotificationShow: () => {
            m();
        },
        onConfirmClick: (t, i) => {
            n.Z.sendActivityInvite({
                channelId: e.id,
                type: d.mFx.JOIN,
                activity: h,
                location: s.Z.isLocked((0, r.QF)()) ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY
            }),
                v('join'),
                l.Z.updateNotificationStatus(i);
        },
        onCancelClick: (t, i) => {
            (0, o.In)(e.id, !0, !0), l.Z.updateNotificationStatus(i), v('decline');
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
