"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return u
  }
});
var r = n("359119"),
  a = n("897769"),
  i = n("237292"),
  s = n("403485"),
  o = n("604849");

function u(e, t) {
  let n = (0, i.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    u = (0, o.useSafetyAlertsSettingOrDefault)(),
    l = (0, s.useInappropriateConversationWarningsForChannel)(e),
    d = (0, a.useChannelSafetyWarning)(e, r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!!n && !!u && 0 !== l.length) {
    if (!l.some(e => e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === r.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return d
  }
}