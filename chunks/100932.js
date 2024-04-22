"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationsTiers: function() {
    return r
  }
});
var a = n("442837"),
  u = n("594174"),
  i = n("359119"),
  l = n("237292"),
  s = n("13279");
let r = e => {
  let t = (0, l.useIsEligibleForInappropriateConversationWarning)({
      location: "context-menu-item"
    }),
    n = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    r = (0, s.useInappropriateConversationBannerForChannel)(e.id, "context-menu-item");
  if ((null == n ? void 0 : n.isStaff()) !== !0 || !t || !e.isDM()) return null;
  let o = (null == r ? void 0 : r.type) === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
  return {
    isTier1: o,
    isTier2: (null == r ? void 0 : r.type) === i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
  }
}