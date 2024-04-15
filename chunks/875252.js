"use strict";
n.r(t), n.d(t, {
  useSafetyWarningsItem: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var u = n("442837"),
  i = n("481060"),
  l = n("378298"),
  s = n("359119"),
  r = n("832239"),
  d = n("594174"),
  o = n("689938");

function f(e) {
  let t = (0, u.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    n = (0, u.useStateFromStores)([s.default], () => s.default.getChannelSafetyWarnings(e.id));
  return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.MenuItem, {
      id: "delete-safety-warnings",
      label: o.default.Messages.SAFETY_WARNINGS_DELETE,
      action: () => (0, r.deleteAllSafetyWarnings)(e.id)
    }), (0, a.jsx)(i.MenuItem, {
      id: "clear-safety-warnings",
      label: o.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
      action: () => (0, l.clearChannelSafetyWarnings)(e.id)
    })]
  })
}