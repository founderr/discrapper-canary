"use strict";
n.r(t), n.d(t, {
  useSafetyWarningsItem: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var u = n("442837"),
  l = n("481060"),
  s = n("378298"),
  i = n("359119"),
  r = n("832239"),
  d = n("594174"),
  o = n("689938");

function f(e) {
  let t = (0, u.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    n = (0, u.useStateFromStores)([i.default], () => i.default.getChannelSafetyWarnings(e.id));
  return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.MenuItem, {
      id: "delete-safety-warnings",
      label: o.default.Messages.SAFETY_WARNINGS_DELETE,
      action: () => (0, r.deleteAllSafetyWarnings)(e.id)
    }), (0, a.jsx)(l.MenuItem, {
      id: "clear-safety-warnings",
      label: o.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
      action: () => (0, s.clearChannelSafetyWarnings)(e.id)
    })]
  })
}