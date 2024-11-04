n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(442837),
    l = n(314897),
    r = n(111583),
    s = n(351780),
    a = n(843693),
    o = n(170248),
    c = n(524484);
function u(e) {
    let t = (0, o.Z)(c.oZ.CHAT_INPUT),
        n = (0, i.e7)([s.Z], () => s.Z.isEnabled({ shakeLocation: c.oZ.CHAT_INPUT }));
    return (0, i.e7)([r.Z, a.ZP, l.default], () => (n && r.Z.isTyping(e, l.default.getId()) ? a.ZP.getUserComboShakeIntensity(l.default.getId(), e, t) : 0));
}
