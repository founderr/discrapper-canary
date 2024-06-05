"use strict";
a.r(t), a.d(t, {
  computeThreadNotificationSetting: function() {
    return M
  },
  useThreadNotificationSetting: function() {
    return S
  }
}), a("789020");
var s = a("442837"),
  n = a("592125"),
  E = a("9156"),
  l = a("630388"),
  _ = a("569471"),
  r = a("124368"),
  u = a("981631");

function M(e) {
  let t = _.default.flags(e.id);
  if (null == t) return r.ThreadMemberFlags.NO_MESSAGES;
  if ((0, l.hasFlag)(t, r.ThreadMemberFlags.ALL_MESSAGES)) return r.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, l.hasFlag)(t, r.ThreadMemberFlags.ONLY_MENTIONS)) return r.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, l.hasFlag)(t, r.ThreadMemberFlags.NO_MESSAGES)) return r.ThreadMemberFlags.NO_MESSAGES;
  let a = n.default.getChannel(e.parent_id);
  if (null == a || E.default.isGuildOrCategoryOrChannelMuted(a.guild_id, a.id)) return r.ThreadMemberFlags.NO_MESSAGES;
  let s = E.default.resolvedMessageNotifications(a);
  return s === u.UserNotificationSettings.NO_MESSAGES ? r.ThreadMemberFlags.NO_MESSAGES : s === u.UserNotificationSettings.ONLY_MENTIONS ? r.ThreadMemberFlags.ONLY_MENTIONS : r.ThreadMemberFlags.ALL_MESSAGES
}

function S(e) {
  return (0, s.useStateFromStores)([_.default, E.default, n.default], () => M(e), [e])
}