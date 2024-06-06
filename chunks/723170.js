"use strict";
s.r(t), s.d(t, {
  computeThreadNotificationSetting: function() {
    return r
  },
  useThreadNotificationSetting: function() {
    return S
  }
}), s("789020");
var a = s("442837"),
  E = s("592125"),
  n = s("9156"),
  _ = s("630388"),
  l = s("569471"),
  u = s("124368"),
  M = s("981631");

function r(e) {
  let t = l.default.flags(e.id);
  if (null == t) return u.ThreadMemberFlags.NO_MESSAGES;
  if ((0, _.hasFlag)(t, u.ThreadMemberFlags.ALL_MESSAGES)) return u.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, _.hasFlag)(t, u.ThreadMemberFlags.ONLY_MENTIONS)) return u.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, _.hasFlag)(t, u.ThreadMemberFlags.NO_MESSAGES)) return u.ThreadMemberFlags.NO_MESSAGES;
  let s = E.default.getChannel(e.parent_id);
  if (null == s || n.default.isGuildOrCategoryOrChannelMuted(s.guild_id, s.id)) return u.ThreadMemberFlags.NO_MESSAGES;
  let a = n.default.resolvedMessageNotifications(s);
  return a === M.UserNotificationSettings.NO_MESSAGES ? u.ThreadMemberFlags.NO_MESSAGES : a === M.UserNotificationSettings.ONLY_MENTIONS ? u.ThreadMemberFlags.ONLY_MENTIONS : u.ThreadMemberFlags.ALL_MESSAGES
}

function S(e) {
  return (0, a.useStateFromStores)([l.default, n.default, E.default], () => r(e), [e])
}