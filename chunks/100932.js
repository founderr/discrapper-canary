"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationsTiers: function() {
    return s
  }
});
var a = n("442837"),
  u = n("594174"),
  i = n("359119"),
  r = n("237292"),
  l = n("13279");
let s = e => {
  let t = (0, r.useIsEligibleForInappropriateConversationWarning)({
      location: "context-menu-item"
    }),
    n = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    s = (0, l.useInappropriateConversationBannerForChannel)(e.id, "context-menu-item");
  if ((null == n ? void 0 : n.isStaff()) !== !0 || !t || !e.isDM()) return null;
  let d = (null == s ? void 0 : s.type) === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
  return {
    isTier1: d,
    isTier2: (null == s ? void 0 : s.type) === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
  }
}