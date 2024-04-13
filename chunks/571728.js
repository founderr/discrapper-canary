"use strict";
i.r(t), i.d(t, {
  useSubmittedGuildJoinRequestTotal: function() {
    return s
  }
});
var n = i("442837"),
  r = i("826581");

function s(e) {
  let {
    guildId: t
  } = e;
  return (0, n.useStateFromStores)([r.default], () => r.default.getSubmittedGuildJoinRequestTotal(t), [t])
}