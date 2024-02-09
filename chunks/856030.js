"use strict";
n.r(t), n.d(t, {
  useSafetyWarningsItem: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  l = n("277734"),
  s = n("764828"),
  u = n("697218"),
  o = n("782340");

function d(e) {
  let t = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    n = (0, a.useStateFromStores)([s.default], () => s.default.getChannelSafetyWarnings(e.id));
  return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
    children: (0, i.jsx)(r.MenuItem, {
      id: "clear-safety-warnings",
      label: o.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
      action: () => (0, l.clearChannelSafetyWarnings)(e.id)
    })
  })
}