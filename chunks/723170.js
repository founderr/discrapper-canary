E.d(n, {
  B: function() {
    return l
  },
  J: function() {
    return i
  }
}), E(789020);
var t = E(442837),
  _ = E(592125),
  s = E(9156),
  a = E(630388),
  r = E(569471),
  u = E(124368),
  M = E(981631);

function i(e) {
  let n = r.Z.flags(e.id);
  if (null == n) return u.iN.NO_MESSAGES;
  if ((0, a.yE)(n, u.iN.ALL_MESSAGES)) return u.iN.ALL_MESSAGES;
  if ((0, a.yE)(n, u.iN.ONLY_MENTIONS)) return u.iN.ONLY_MENTIONS;
  if ((0, a.yE)(n, u.iN.NO_MESSAGES)) return u.iN.NO_MESSAGES;
  let E = _.Z.getChannel(e.parent_id);
  if (null == E || s.ZP.isGuildOrCategoryOrChannelMuted(E.guild_id, E.id)) return u.iN.NO_MESSAGES;
  let t = s.ZP.resolvedMessageNotifications(E);
  return t === M.bL.NO_MESSAGES ? u.iN.NO_MESSAGES : t === M.bL.ONLY_MENTIONS ? u.iN.ONLY_MENTIONS : u.iN.ALL_MESSAGES
}

function l(e) {
  return (0, t.e7)([r.Z, s.ZP, _.Z], () => i(e), [e])
}