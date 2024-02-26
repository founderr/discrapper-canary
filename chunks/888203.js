"use strict";
s.r(t), s.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return o
  }
});
var n = s("446674"),
  a = s("764828");

function o(e) {
  let t = (0, n.useStateFromStores)([a.default], () => a.default.getChannelSafetyWarnings(e), [e]);
  return t.filter(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}