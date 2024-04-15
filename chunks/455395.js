"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationItem: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("359119"),
  l = n("832239"),
  s = n("100932"),
  r = n("689938");

function d(e) {
  let t = (0, s.useInappropriateConversationsTiers)(e);
  if (null === t) return null;
  let {
    isTier1: n,
    isTier2: d
  } = t;
  return (0, a.jsxs)(a.Fragment, {
    children: [!n && (0, a.jsx)(u.MenuItem, {
      id: "mark-as-tier-1-inappro",
      label: r.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
      action: () => (0, l.markAsInappropriateConversation)(e.id, i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !d && (0, a.jsx)(u.MenuItem, {
      id: "mark-as-tier-2-inappro",
      label: r.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
      action: () => (0, l.markAsInappropriateConversation)(e.id, i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}