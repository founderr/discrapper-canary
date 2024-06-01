"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationBannerForChannel: function() {
    return l
  }
});
var a = n("359119"),
  s = n("897769"),
  r = n("237292"),
  i = n("403485"),
  u = n("604849");

function l(e, t) {
  let n = (0, r.useIsEligibleForInappropriateConversationWarning)({
      location: t
    }),
    l = (0, u.useSafetyAlertsSettingOrDefault)(),
    E = (0, i.useInappropriateConversationWarningsForChannel)(e),
    o = (0, s.useChannelSafetyWarning)(e, a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!!n && !!l && 0 !== E.length) {
    if (!E.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return o
  }
}