"use strict";
n.r(t), n.d(t, {
  getInappropriateConversationTakeoverForChannel: function() {
    return a
  }
});
var i = n("764828");

function a(e) {
  let t = function(e) {
      let t = i.default.getChannelSafetyWarnings(e);
      return t.filter(e => e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
    }(e),
    n = t.filter(e => e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 && null != e.dismiss_timestamp);
  if (n.length > 0) return null;
  let a = t.filter(e => e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 && null == e.dismiss_timestamp);
  return 1 === a.length ? a[0] : null
}