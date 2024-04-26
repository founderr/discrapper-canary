"use strict";
n.r(t), n.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return s
  }
});
var i = n("442837"),
  r = n("826581");

function s(e) {
  let {
    guildId: t
  } = e;
  return (0, i.useStateFromStores)([r.default], () => r.default.getSubmittedGuildJoinRequestTotal(t), [t])
}