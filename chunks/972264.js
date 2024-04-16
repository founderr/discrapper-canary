"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("442837"),
  s = a("430824"),
  l = a("496675"),
  i = a("312146"),
  r = a("981631");

function o(e) {
  let t = (0, n.useStateFromStores)([s.default], () => s.default.getGuild(e)),
    a = (0, i.useGuildEligibleForMediaChannels)(t),
    o = l.default.can(r.Permissions.MANAGE_CHANNELS, t);
  return a && o
}