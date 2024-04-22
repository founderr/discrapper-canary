"use strict";
n.r(t), n.d(t, {
  useInappropriateConversationItem: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("359119"),
  l = n("832239"),
  r = n("100932"),
  s = n("689938");

function o(e) {
  let t = (0, r.useInappropriateConversationsTiers)(e);
  if (null === t) return null;
  let {
    isTier1: n,
    isTier2: o
  } = t;
  return (0, a.jsxs)(a.Fragment, {
    children: [!n && (0, a.jsx)(u.MenuItem, {
      id: "mark-as-tier-1-inappro",
      label: s.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
      action: () => (0, l.markAsInappropriateConversation)(e.id, i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !o && (0, a.jsx)(u.MenuItem, {
      id: "mark-as-tier-2-inappro",
      label: s.default.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
      action: () => (0, l.markAsInappropriateConversation)(e.id, i.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}