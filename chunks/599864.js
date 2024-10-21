n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(287734),
    s = n(359110),
    o = n(922482),
    l = n(979651),
    u = n(652853),
    c = n(475413),
    d = n(228168),
    _ = n(689938);
function E(e) {
    let { channel: t, onAction: n, onClose: E } = e,
        { profileType: f } = (0, u.z)(),
        h = (0, i.e7)([l.Z], () => l.Z.isInChannel(t.id)),
        p = t.isGuildStageVoice();
    return (0, r.jsx)(c.tG, {
        text: p ? (h ? _.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON : f === d.y0.FULL_SIZE ? _.Z.Messages.JOIN : _.Z.Messages.STAGE_CHANNEL_JOIN) : h && f === d.y0.FULL_SIZE ? _.Z.Messages.OPEN : h ? _.Z.Messages.PROFILE_OPEN_VOICE_CHANNEL : f === d.y0.FULL_SIZE ? _.Z.Messages.JOIN : _.Z.Messages.JOIN_VOICE,
        themeColor: h ? 'secondary' : 'primary',
        fullWidth: !0,
        onClick: () => {
            null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), p ? (0, o.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)), null == E || E();
        }
    });
}
