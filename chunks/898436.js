"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return l
  }
});
var i = n("764828"),
  a = n("533855"),
  r = n("761771"),
  s = n("888203");

function l(e, t) {
  let n = (0, r.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    l = (0, s.useInappropriateConversationWarningsForChannel)(e),
    u = (0, a.useChannelSafetyWarning)(e, i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2, t);
  if (!!n && 0 !== l.length) {
    if (!l.some(e => e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return u
  }
}