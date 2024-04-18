"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return r
  }
});
var a = n("442837"),
  i = n("359119");

function r(e) {
  return (0, a.useStateFromStores)([i.default], () => i.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}