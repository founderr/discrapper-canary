"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return r
  }
});
var a = n("442837"),
  s = n("359119");

function r(e) {
  return (0, a.useStateFromStores)([s.default], () => s.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}