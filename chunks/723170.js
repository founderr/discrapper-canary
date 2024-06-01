"use strict";
n.r(t), n.d(t, {
  computeThreadNotificationSetting: function() {
    return o
  },
  useThreadNotificationSetting: function() {
    return _
  }
}), n("789020");
var a = n("442837"),
  s = n("592125"),
  r = n("9156"),
  i = n("630388"),
  u = n("569471"),
  l = n("124368"),
  E = n("981631");

function o(e) {
  let t = u.default.flags(e.id);
  if (null == t) return l.ThreadMemberFlags.NO_MESSAGES;
  if ((0, i.hasFlag)(t, l.ThreadMemberFlags.ALL_MESSAGES)) return l.ThreadMemberFlags.ALL_MESSAGES;
  if ((0, i.hasFlag)(t, l.ThreadMemberFlags.ONLY_MENTIONS)) return l.ThreadMemberFlags.ONLY_MENTIONS;
  if ((0, i.hasFlag)(t, l.ThreadMemberFlags.NO_MESSAGES)) return l.ThreadMemberFlags.NO_MESSAGES;
  let n = s.default.getChannel(e.parent_id);
  if (null == n || r.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return l.ThreadMemberFlags.NO_MESSAGES;
  let a = r.default.resolvedMessageNotifications(n);
  return a === E.UserNotificationSettings.NO_MESSAGES ? l.ThreadMemberFlags.NO_MESSAGES : a === E.UserNotificationSettings.ONLY_MENTIONS ? l.ThreadMemberFlags.ONLY_MENTIONS : l.ThreadMemberFlags.ALL_MESSAGES
}

function _(e) {
  return (0, a.useStateFromStores)([u.default, r.default, s.default], () => o(e), [e])
}