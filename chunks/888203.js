"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return l
  }
});
var a = n("446674"),
  s = n("764828");

function l(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.getChannelSafetyWarnings(e), [e]);
  return t.filter(e => e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}