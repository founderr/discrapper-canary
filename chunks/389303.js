n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var l = n(314897),
  i = n(496675),
  s = n(938475),
  a = n(700785),
  r = n(924301),
  o = n(85243);

function c(e) {
  if (!e.isGuildVoice() || r.ZP.getGuildScheduledEventsByIndex(r.bN.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !i.Z.can(o.AN, e)) return !1;
  let t = new Set(s.ZP.getVoiceStatesForChannel(e).map(e => e.user.id)),
    n = l.default.getId();
  for (let l of t)
    if (l !== n && a.BT({
        permission: o.AN,
        user: l,
        context: e
      })) return !1;
  return !0
}