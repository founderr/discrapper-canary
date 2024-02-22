"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationItem: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  s = n("764828"),
  l = n("559922"),
  u = n("761771"),
  o = n("898436"),
  d = n("18494"),
  c = n("697218"),
  f = n("782340");

function E(e) {
  let t = (0, u.useIsEligibleForInappropriateConversationWarning)({
      location: "context-menu-item"
    }),
    n = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    E = (0, o.useInappropriateConversationBannerForChannel)(e.id, "context-menu-item"),
    p = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentlySelectedChannelId() === e.id);
  if ((null == n ? void 0 : n.isStaff()) !== !0 || !t || !e.isDM() || !p) return null;
  let _ = (null == E ? void 0 : E.type) === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
    C = (null == E ? void 0 : E.type) === s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
  return (0, i.jsxs)(i.Fragment, {
    children: [!_ && (0, i.jsx)(r.MenuItem, {
      id: "mark-as-tier-1-inappro",
      label: f.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
      action: () => (0, l.markAsInappropriateConversation)(e.id, s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !C && (0, i.jsx)(r.MenuItem, {
      id: "mark-as-tier-2-inappro",
      label: f.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
      action: () => (0, l.markAsInappropriateConversation)(e.id, s.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}