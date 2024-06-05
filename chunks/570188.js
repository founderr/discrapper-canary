"use strict";
a.r(t), a.d(t, {
  useCanSendStageStartNotification: function() {
    return r
  },
  useDefaultSendStartStageNotificationToggle: function() {
    return d
  }
});
var l = a("442837"),
  s = a("650774"),
  n = a("496675"),
  i = a("231338");

function r(e) {
  return (0, l.useStateFromStores)([n.default], () => null != e && n.default.can(i.Permissions.MENTION_EVERYONE, e), [e])
}

function d(e) {
  let t = null == e ? void 0 : e.guild_id,
    a = (0, l.useStateFromStores)([s.default], () => s.default.getMemberCount(t), [t]);
  return null == e || null != a && !(a > 5e4) && !0
}