"use strict";
n.r(t);
var u = n("735250");
n("470079");
var r = n("481060"),
  a = n("239091"),
  c = n("883385"),
  o = n("108843"),
  s = n("100527"),
  i = n("299206"),
  l = n("981631"),
  d = n("689938");
t.default = (0, o.default)((0, c.default)(function(e) {
  let {
    userId: t,
    onSelect: n
  } = e, c = (0, i.default)({
    id: t,
    label: d.default.Messages.COPY_ID_USER,
    showWithoutDeveloperMode: !0
  });
  return (0, u.jsx)(r.Menu, {
    navId: "unknown-user-context",
    onClose: a.closeContextMenu,
    "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: (0, u.jsx)(r.MenuGroup, {
      children: c
    })
  })
}, {
  object: l.AnalyticsObjects.CONTEXT_MENU
}), [s.default.CONTEXT_MENU, s.default.UNKNOWN_USER_MENU])