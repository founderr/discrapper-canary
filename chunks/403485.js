"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return i
  }
});
var a = n("442837"),
  r = n("359119");

function i(e) {
  return (0, a.useStateFromStores)([r.default], () => r.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}