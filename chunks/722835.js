n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(872810),
  s = n(594190),
  l = n(199902),
  a = n(592125),
  r = n(430824),
  o = n(131951),
  c = n(496675),
  u = n(944486),
  d = n(449224),
  E = n(382182),
  h = n(74299),
  _ = n(989941);

function I() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, h.Z)(o.Z) || null != l.Z.getCurrentUserActiveStream()) return !1;
  let t = (0, _.Z)(s.ZP, d.Z);
  if (null == t || t.isLauncher && !e) return !1;
  let n = u.Z.getVoiceChannelId(),
    I = a.Z.getChannel(n);
  if (null == I) return !1;
  let m = I.getGuildId();
  return !!(0, E.JL)(I, r.Z, c.Z, !1) && ((0, i.WH)(m, I.id, {
    pid: t.pid
  }), !0)
}