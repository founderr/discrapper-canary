n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(26151),
    r = n(13245),
    l = n(43267),
    o = n(933557),
    a = n(699516),
    s = n(594174),
    u = n(620954),
    c = n(987650),
    d = n(981631),
    h = n(388032);
function f(e) {
    let t = (0, o.F6)(e, s.default, a.Z),
        n = h.intl.string(h.t.ssrVzM),
        f = (0, l.x)(e),
        { trackView: p, trackClick: m } = (0, u.R)(c.n0.IncomingCall, {
            notif_type: c.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: f,
        title: t,
        body: n,
        confirmText: h.intl.string(h.t['0D/6R0']),
        cancelText: h.intl.string(h.t.BVN4pK),
        onNotificationShow: () => {
            p();
        },
        onConfirmClick: (t, n) => {
            m('join'),
                i.Z.call(e.id, !1, !1),
                r.Z.updateNotificationStatus(n),
                r.Z.track(d.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: null,
                    channel_id: e.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            m('decline'), i.Z.stopRinging(e.id);
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
