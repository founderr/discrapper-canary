"use strict";
a.r(t), a.d(t, {
  useUserIsInLargeGuilds: function() {
    return l
  }
});
var n = a("399606"),
  s = a("650774");

function l() {
  return (0, n.useStateFromStores)([s.default], () => Object.values(s.default.getMemberCounts()).some(e => e >= 200))
}