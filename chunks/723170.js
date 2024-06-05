"use strict";
n.r(t), n.d(t, {
  computeThreadNotificationSetting: function() {
    return d
  },
  useThreadNotificationSetting: function() {
    return c
  }
}), n("789020");
var a = n("442837"),
  l = n("592125"),
  s = n("9156"),
  i = n("630388"),
  r = n("569471"),
  o = n("124368"),
  u = n("981631");

function d(e) {
  let t = r.default.flags(e.id);
  if (null == t) return o.ThreadMemberFlags.NO_MESSAGES;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ALL_MESSAGES)) return o.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ONLY_MENTIONS)) return o.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, i.hasFlag)(t, o.ThreadMemberFlags.NO_MESSAGES)) return o.ThreadMemberFlags.NO_MESSAGES;
  let n = l.default.getChannel(e.parent_id);
  if (null == n || s.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return o.ThreadMemberFlags.NO_MESSAGES;
  let a = s.default.resolvedMessageNotifications(n);
  return a === u.UserNotificationSettings.NO_MESSAGES ? o.ThreadMemberFlags.NO_MESSAGES : a === u.UserNotificationSettings.ONLY_MENTIONS ? o.ThreadMemberFlags.ONLY_MENTIONS : o.ThreadMemberFlags.ALL_MESSAGES
}

function c(e) {
  return (0, a.useStateFromStores)([r.default, s.default, l.default], () => d(e), [e])
}