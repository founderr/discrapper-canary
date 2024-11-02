n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(287734),
    a = n(19780),
    s = n(626135),
    o = n(915863),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { className: t, color: n, look: d, hangStatusChannel: h, onAction: m } = e,
        p = (0, l.e7)([a.Z], () => a.Z.getChannelId() === h.id);
    return (0, i.jsx)(
        o.Z,
        {
            className: t,
            disabled: p,
            onClick: () => {
                null == m || m(),
                    r.default.selectVoiceChannel(h.id),
                    s.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                        source: 'UserProfilePopout',
                        guild_id: h.guild_id,
                        channel_id: h.id
                    });
            },
            color: n,
            look: d,
            fullWidth: !0,
            children: u.intl.string(u.t['9C444u'])
        },
        'join-hang'
    );
}
