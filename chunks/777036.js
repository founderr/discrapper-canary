i.d(t, {
    Z: function () {
        return f;
    }
});
var n = i(26151),
    l = i(13245),
    o = i(43267),
    s = i(933557),
    r = i(699516),
    a = i(594174),
    u = i(620954),
    d = i(987650),
    c = i(981631),
    h = i(388032);
function f(e) {
    let t = (0, s.F6)(e, a.default, r.Z),
        i = h.intl.string(h.t.ssrVzM),
        f = (0, o.x)(e),
        { trackView: p, trackClick: E } = (0, u.R)(d.n0.IncomingCall, {
            notif_type: d.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: f,
        title: t,
        body: i,
        confirmText: h.intl.string(h.t['0D/6R0']),
        cancelText: h.intl.string(h.t.BVN4pK),
        onNotificationShow: () => {
            p();
        },
        onConfirmClick: (t, i) => {
            E('join'),
                n.Z.call(e.id, !1, !1),
                l.Z.updateNotificationStatus(i),
                l.Z.track(c.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: null,
                    channel_id: e.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            E('decline'), n.Z.stopRinging(e.id);
        },
        onDismissClick: () => {
            E('dismiss');
        }
    };
}
