n.d(t, {
    Z: function () {
        return _;
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
    f = n(388032);
function _(e) {
    let { channel: t, onAction: n, onClose: _ } = e,
        { profileType: p } = (0, u.z)(),
        h = (0, i.e7)([l.Z], () => l.Z.isInChannel(t.id)),
        m = t.isGuildStageVoice();
    return (0, r.jsx)(c.tG, {
        text: m ? (h && p === d.y0.FULL_SIZE ? f.intl.string(f.t['3xjX0d']) : h ? f.intl.string(f.t.g6pBAg) : p === d.y0.FULL_SIZE ? f.intl.string(f.t.VJlc0d) : f.intl.string(f.t['7vb2cX'])) : h && p === d.y0.FULL_SIZE ? f.intl.string(f.t['3xjX0d']) : h ? f.intl.string(f.t.iOqmAQ) : p === d.y0.FULL_SIZE ? f.intl.string(f.t.VJlc0d) : f.intl.string(f.t['96ANUF']),
        themeColor: h ? 'secondary' : 'primary',
        fullWidth: !0,
        onClick: () => {
            null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), m ? (0, o.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)), null == _ || _();
        }
    });
}
