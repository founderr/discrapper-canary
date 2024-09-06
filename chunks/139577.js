n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(442837),
    s = n(314897),
    a = n(111583),
    l = n(351780),
    r = n(843693),
    o = n(170248),
    c = n(524484);
function u(e) {
    let t = (0, o.Z)(c.oZ.CHAT_INPUT),
        n = (0, i.e7)([l.Z], () => l.Z.isEnabled({ shakeLocation: c.oZ.CHAT_INPUT }));
    return (0, i.e7)([a.Z, r.ZP, s.default], () => (n && a.Z.isTyping(e, s.default.getId()) ? r.ZP.getUserComboShakeIntensity(s.default.getId(), e, t) : 0));
}
