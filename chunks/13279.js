"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return o
  }
});
var a = n("359119"),
  r = n("897769"),
  i = n("237292"),
  s = n("403485"),
  u = n("604849");

function o(e, t) {
  let n = (0, i.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    o = (0, u.useSafetyAlertsSettingOrDefault)(),
    l = (0, s.useInappropriateConversationWarningsForChannel)(e),
    d = (0, r.useChannelSafetyWarning)(e, a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!!n && !!o && 0 !== l.length) {
    if (!l.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return d
  }
}