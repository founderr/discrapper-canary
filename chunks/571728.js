"use strict";
n.r(t), n.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return r
  }
});
var a = n("442837"),
  i = n("826581");

function r(e) {
  let {
    guildId: t
  } = e;
  return (0, a.useStateFromStores)([i.default], () => i.default.getSubmittedGuildJoinRequestTotal(t), [t])
}