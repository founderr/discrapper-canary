"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationsTiers: function() {
    return o
  }
});
var i = n("446674"),
  a = n("18494"),
  r = n("697218"),
  l = n("764828"),
  s = n("761771"),
  u = n("898436");
let o = (e, t) => {
  let n = (0, s.useIsEligibleForInappropriateConversationWarning)({
      location: "context-menu-item"
    }),
    o = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    d = (0, u.useInappropriateConversationBannerForChannel)(e.id, "context-menu-item"),
    c = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentlySelectedChannelId() === e.id || t);
  if ((null == o ? void 0 : o.isStaff()) !== !0 || !n || !e.isDM() || !c) return null;
  let f = (null == d ? void 0 : d.type) === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
    E = (null == d ? void 0 : d.type) === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
  return {
    isTier1: f,
    isTier2: E
  }
}