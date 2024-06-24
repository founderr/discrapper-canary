t.d(n, {
  B: function() {
    return l
  },
  J: function() {
    return M
  }
}), t(789020);
var E = t(442837),
  _ = t(592125),
  s = t(9156),
  a = t(630388),
  u = t(569471),
  r = t(124368),
  i = t(981631);

function M(e) {
  let n = u.Z.flags(e.id);
  if (null == n) return r.iN.NO_MESSAGES;
  if ((0, a.yE)(n, r.iN.ALL_MESSAGES)) return r.iN.ALL_MESSAGES;
  if ((0, a.yE)(n, r.iN.ONLY_MENTIONS)) return r.iN.ONLY_MENTIONS;
  if ((0, a.yE)(n, r.iN.NO_MESSAGES)) return r.iN.NO_MESSAGES;
  let t = _.Z.getChannel(e.parent_id);
  if (null == t || s.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) return r.iN.NO_MESSAGES;
  let E = s.ZP.resolvedMessageNotifications(t);
  return E === i.bL.NO_MESSAGES ? r.iN.NO_MESSAGES : E === i.bL.ONLY_MENTIONS ? r.iN.ONLY_MENTIONS : r.iN.ALL_MESSAGES
}

function l(e) {
  return (0, E.e7)([u.Z, s.ZP, _.Z], () => M(e), [e])
}