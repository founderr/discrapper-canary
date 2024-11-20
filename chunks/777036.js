n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(26151),
    l = n(13245),
    o = n(43267),
    r = n(933557),
    s = n(699516),
    a = n(594174),
    u = n(620954),
    d = n(987650),
    c = n(981631),
    h = n(388032);
function f(e) {
    let t = (0, r.F6)(e, a.default, s.Z),
        n = h.intl.string(h.t.ssrVzM),
        f = (0, o.x)(e),
        { trackView: p, trackClick: m } = (0, u.R)(d.n0.IncomingCall, {
            notif_type: d.n0.IncomingCall,
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
                l.Z.updateNotificationStatus(n),
                l.Z.track(c.rMx.VOICE_CHANNEL_SELECTED, {
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
