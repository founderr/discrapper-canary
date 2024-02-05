"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationWarningsForChannel: function() {
    return s
  }
});
var a = n("446674"),
  l = n("764828");

function s(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getChannelSafetyWarnings(e), [e]);
  return t.filter(e => e.type === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}