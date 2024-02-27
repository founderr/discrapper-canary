"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return r
  }
});
var a = n("764828"),
  s = n("533855"),
  l = n("761771"),
  i = n("888203");

function r(e, t) {
  let n = (0, l.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    r = (0, i.useInappropriateConversationWarningsForChannel)(e),
    o = (0, s.useChannelSafetyWarning)(e, a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, t);
  if (!!n && 0 !== r.length) {
    if (!r.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return o
  }
}