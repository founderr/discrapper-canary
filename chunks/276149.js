n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(287734),
    l = n(19780),
    r = n(626135),
    o = n(915863),
    c = n(981631),
    u = n(689938);
function d(e) {
    let { className: t, color: n, look: d, hangStatusChannel: h, onAction: p } = e,
        m = (0, s.e7)([l.Z], () => l.Z.getChannelId() === h.id);
    return (0, i.jsx)(
        o.Z,
        {
            className: t,
            disabled: m,
            onClick: () => {
                null == p || p(),
                    a.default.selectVoiceChannel(h.id),
                    r.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                        source: 'UserProfilePopout',
                        guild_id: h.guild_id,
                        channel_id: h.id
                    });
            },
            color: n,
            look: d,
            fullWidth: !0,
            children: u.Z.Messages.PROFILE_JOIN_VOICE_CHANNEL
        },
        'join-hang'
    );
}
