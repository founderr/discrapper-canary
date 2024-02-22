"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return i
  }
});
var a = n("764828"),
  u = n("533855"),
  r = n("761771"),
  s = n("888203");

function i(e, t) {
  let n = (0, r.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    i = (0, s.useInappropriateConversationWarningsForChannel)(e),
    l = (0, u.useChannelSafetyWarning)(e, a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, t);
  if (!!n && 0 !== i.length) {
    if (!i.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return l
  }
}