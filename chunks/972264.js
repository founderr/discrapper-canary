"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("442837"),
  s = n("430824"),
  i = n("496675"),
  l = n("312146"),
  r = n("981631");

function o(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e)),
    n = (0, l.useGuildEligibleForMediaChannels)(t),
    o = i.default.can(r.Permissions.MANAGE_CHANNELS, t);
  return n && o
}