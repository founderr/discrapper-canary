"use strict";
n.r(t), n.d(t, {
  useMessageRequestItem: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var u = n("442837"),
  i = n("481060"),
  r = n("823162"),
  l = n("594174"),
  s = n("689938");

function d(e) {
  let t = (0, u.useStateFromStores)([l.default], () => l.default.getCurrentUser());
  return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, a.jsxs)(a.Fragment, {
    children: [!e.isMessageRequest && (0, a.jsx)(i.MenuItem, {
      id: "mark-as-message-request",
      label: s.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
      action: () => (0, r.markAsMessageRequest)(e.id)
    }), (0, a.jsx)(i.MenuItem, {
      id: "clear-message-request",
      label: s.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
      action: () => (0, r.clearMessageRequestState)(e.id)
    })]
  })
}