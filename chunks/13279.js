"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return u
  }
});
var a = n("359119"),
  i = n("897769"),
  r = n("237292"),
  s = n("403485"),
  o = n("604849");

function u(e, t) {
  let n = (0, r.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    u = (0, o.useSafetyAlertsSettingOrDefault)(),
    l = (0, s.useInappropriateConversationWarningsForChannel)(e),
    d = (0, i.useChannelSafetyWarning)(e, a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!!n && !!u && 0 !== l.length) {
    if (!l.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return d
  }
}