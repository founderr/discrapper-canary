"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return r
  }
});
var a = n("446674"),
  u = n("764828");

function r(e) {
  let t = (0, a.useStateFromStores)([u.default], () => u.default.getChannelSafetyWarnings(e), [e]);
  return t.filter(e => e.type === u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}