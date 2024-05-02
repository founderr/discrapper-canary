"use strict";
n.r(t), n.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return i
  }
});
var a = n("442837"),
  r = n("826581");

function i(e) {
  let {
    guildId: t
  } = e;
  return (0, a.useStateFromStores)([r.default], () => r.default.getSubmittedGuildJoinRequestTotal(t), [t])
}