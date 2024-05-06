"use strict";
a.r(t), a.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return r
  }
});
var n = a("442837"),
  i = a("826581");

function r(e) {
  let {
    guildId: t
  } = e;
  return (0, n.useStateFromStores)([i.default], () => i.default.getSubmittedGuildJoinRequestTotal(t), [t])
}