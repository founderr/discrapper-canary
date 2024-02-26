"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return r
  }
});
var s = n("764828"),
  a = n("533855"),
  l = n("761771"),
  i = n("888203");

function r(e, t) {
  let n = (0, l.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    r = (0, i.useInappropriateConversationWarningsForChannel)(e),
    o = (0, a.useChannelSafetyWarning)(e, s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, t);
  if (!!n && 0 !== r.length) {
    if (!r.some(e => e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return o
  }
}