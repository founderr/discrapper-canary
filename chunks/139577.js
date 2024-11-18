n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(442837),
    l = n(314897),
    r = n(111583),
    a = n(351780),
    s = n(843693),
    o = n(170248),
    c = n(524484);
function d(e) {
    let t = (0, o.Z)(c.oZ.CHAT_INPUT),
        n = (0, i.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: c.oZ.CHAT_INPUT }));
    return (0, i.e7)([r.Z, s.ZP, l.default], () => (n && r.Z.isTyping(e, l.default.getId()) ? s.ZP.getUserComboShakeIntensity(l.default.getId(), e, t) : 0));
}
