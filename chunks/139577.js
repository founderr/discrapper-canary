n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(442837),
  i = n(314897),
  s = n(111583),
  a = n(351780),
  r = n(843693),
  o = n(170248),
  c = n(524484);

function u(e) {
  let t = (0, o.Z)(c.oZ.CHAT_INPUT),
    n = (0, l.e7)([a.Z], () => a.Z.isEnabled({
      shakeLocation: c.oZ.CHAT_INPUT
    }));
  return (0, l.e7)([s.Z, r.ZP, i.default], () => n && s.Z.isTyping(e, i.default.getId()) ? r.ZP.getUserComboShakeIntensity(i.default.getId(), e, t) : 0)
}