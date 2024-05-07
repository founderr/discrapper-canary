"use strict";
s.r(t), s.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return i
  }
});
var a = s("442837"),
  n = s("826581");

function i(e) {
  let {
    guildId: t
  } = e;
  return (0, a.useStateFromStores)([n.default], () => n.default.getSubmittedGuildJoinRequestTotal(t), [t])
}