n.d(t, {
  V: function() {
    return r
  }
}), n(399606);
var i = n(92114),
  a = n(9156),
  s = n(621600),
  l = n(113449),
  o = n(686660),
  u = n(981631),
  c = n(526761);

function r(e, t) {
  let n = a.ZP.getGuildFlags(e);
  t === o.s8.ALL_MESSAGES ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: u.bL.ALL_MESSAGES,
    flags: (0, l.Q4)(n, c.vc.UNREADS_ALL_MESSAGES)
  }, s.ZB.PresetAll) : t === o.s8.MENTIONS ? i.Z.updateGuildNotificationSettings(e, {
    message_notifications: u.bL.ONLY_MENTIONS,
    flags: (0, l.Q4)(n, c.vc.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetMentions) : t === o.s8.NOTHING && i.Z.updateGuildNotificationSettings(e, {
    message_notifications: u.bL.NO_MESSAGES,
    flags: (0, l.Q4)(n, c.vc.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetNothing)
}