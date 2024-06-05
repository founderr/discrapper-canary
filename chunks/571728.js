"use strict";
a.r(t), a.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return s
  }
});
var n = a("442837"),
  r = a("826581");

function s(e) {
  let {
    guildId: t
  } = e;
  return (0, n.useStateFromStores)([r.default], () => r.default.getSubmittedGuildJoinRequestTotal(t), [t])
}