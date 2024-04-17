"use strict";
s.r(t), s.d(t, {
  computeThreadNotificationSetting: function() {
    return M
  },
  useThreadNotificationSetting: function() {
    return S
  }
}), s("789020");
var a = s("442837"),
  n = s("592125"),
  E = s("9156"),
  _ = s("630388"),
  r = s("569471"),
  l = s("124368"),
  u = s("981631");

function M(e) {
  let t = r.default.flags(e.id);
  if (null == t) return l.ThreadMemberFlags.NO_MESSAGES;
  if ((0, _.hasFlag)(t, l.ThreadMemberFlags.ALL_MESSAGES)) return l.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, _.hasFlag)(t, l.ThreadMemberFlags.ONLY_MENTIONS)) return l.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, _.hasFlag)(t, l.ThreadMemberFlags.NO_MESSAGES)) return l.ThreadMemberFlags.NO_MESSAGES;
  let s = n.default.getChannel(e.parent_id);
  if (null == s || E.default.isGuildOrCategoryOrChannelMuted(s.guild_id, s.id)) return l.ThreadMemberFlags.NO_MESSAGES;
  let a = E.default.resolvedMessageNotifications(s);
  return a === u.UserNotificationSettings.NO_MESSAGES ? l.ThreadMemberFlags.NO_MESSAGES : a === u.UserNotificationSettings.ONLY_MENTIONS ? l.ThreadMemberFlags.ONLY_MENTIONS : l.ThreadMemberFlags.ALL_MESSAGES
}

function S(e) {
  return (0, a.useStateFromStores)([r.default, E.default, n.default], () => M(e), [e])
}