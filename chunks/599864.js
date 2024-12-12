r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(287734),
    o = r(359110),
    l = r(922482),
    u = r(496675),
    c = r(979651),
    d = r(652853),
    f = r(475413),
    _ = r(228168),
    h = r(981631),
    p = r(388032);
function m(e) {
    let { channel: n, onAction: r, onClose: m } = e,
        { profileType: g } = (0, d.z)(),
        E = (0, a.e7)([c.Z], () => c.Z.isInChannel(n.id)),
        v = (0, a.e7)([u.Z], () => u.Z.canBasicChannel(h.S7T.CONNECT, n)),
        I = n.isGuildStageVoice();
    if (!v) return null;
    let T = () => (E && g === _.y0.FULL_SIZE ? p.intl.string(p.t['3xjX0d']) : E ? p.intl.string(p.t.iOqmAQ) : g === _.y0.FULL_SIZE ? p.intl.string(p.t.VJlc0d) : p.intl.string(p.t['96ANUF'])),
        b = () => (E && g === _.y0.FULL_SIZE ? p.intl.string(p.t['3xjX0d']) : E ? p.intl.string(p.t.g6pBAg) : g === _.y0.FULL_SIZE ? p.intl.string(p.t.VJlc0d) : p.intl.string(p.t['7vb2cX']));
    return (0, i.jsx)(f.tG, {
        text: I ? b() : T(),
        themeColor: E ? 'secondary' : 'primary',
        fullWidth: !0,
        onClick: () => {
            null == r || r({ action: 'PRESS_JOIN_CALL_BUTTON' }), I ? (0, l.Cq)(n) : (s.default.selectVoiceChannel(n.id), (0, o.Kh)(n.id)), null == m || m();
        }
    });
}
