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
  l = n("764828"),
  s = n("559922"),
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
    _ = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentlySelectedChannelId() === e.id);
  if ((null == n ? void 0 : n.isStaff()) !== !0 || !t || !e.isDM() || !_) return null;
  let I = (null == E ? void 0 : E.type) === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
    T = (null == E ? void 0 : E.type) === l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
  return (0, i.jsxs)(i.Fragment, {
    children: [!I && (0, i.jsx)(r.MenuItem, {
      id: "mark-as-tier-1-inappro",
      label: f.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
      action: () => (0, s.markAsInappropriateConversation)(e.id, l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !T && (0, i.jsx)(r.MenuItem, {
      id: "mark-as-tier-2-inappro",
      label: f.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
      action: () => (0, s.markAsInappropriateConversation)(e.id, l.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}