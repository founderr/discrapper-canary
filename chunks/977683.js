n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(470079),
  i = n(410030),
  l = n(695346),
  a = n(798628),
  r = n(275344),
  o = n(918088),
  c = n(562293);

function u(e, t) {
  var n;
  let u = (0, r.v)(e),
    d = (0, a.cE)(u.getChannelId())[u.id],
    E = (0, c.Z)(null === (n = u.poll) || void 0 === n ? void 0 : n.expiry),
    _ = l.Yk.useSetting(),
    I = (0, i.ZP)(),
    T = null != t ? t : I;
  return s.useMemo(() => (0, o.ZP)(u, d, {
    animateEmoji: _,
    theme: T,
    formattedExpirationLabel: E
  }), [_, u, d, E, T])
}