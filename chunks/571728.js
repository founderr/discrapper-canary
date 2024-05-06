"use strict";
n.r(t), n.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return s
  }
});
var a = n("442837"),
  r = n("826581");

function s(e) {
  let {
    guildId: t
  } = e;
  return (0, a.useStateFromStores)([r.default], () => r.default.getSubmittedGuildJoinRequestTotal(t), [t])
}