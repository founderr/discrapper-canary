"use strict";
n.r(t);
var u = n("735250");
n("470079");
var a = n("481060"),
  s = n("239091"),
  r = n("410575"),
  i = n("108843"),
  l = n("100527"),
  o = n("299206"),
  c = n("88966"),
  d = n("725119"),
  f = n("981631"),
  p = n("689938");
t.default = (0, i.default)(function(e) {
  let {
    user: t,
    analyticsContext: n,
    onSelect: i
  } = e, l = (0, d.default)(t.id), E = (0, o.default)({
    id: t.id,
    label: p.default.Messages.COPY_ID_USER
  }), M = (0, c.default)(t.id), x = t.isNonUserBot();
  return (0, u.jsx)(r.default, {
    context: n,
    object: f.AnalyticsObjects.CONTEXT_MENU,
    children: (0, u.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: s.closeContextMenu,
      "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: i,
      children: [(0, u.jsxs)(a.MenuGroup, {
        children: [!x && l, !x && M]
      }), (0, u.jsx)(a.MenuGroup, {
        children: E
      })]
    })
  })
}, [l.default.CONTEXT_MENU, l.default.BANNED_USER_MENU])