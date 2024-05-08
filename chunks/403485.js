"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return i
  }
});
var r = n("442837"),
  a = n("359119");

function i(e) {
  return (0, r.useStateFromStores)([a.default], () => a.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}