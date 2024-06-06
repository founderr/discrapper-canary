"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  i = n("239091"),
  u = n("883385"),
  r = n("108843"),
  d = n("100527"),
  s = n("584836"),
  o = n("896680"),
  c = n("544642"),
  I = n("981631"),
  A = n("689938");
t.default = (0, r.default)((0, u.default)(function(e) {
  let {
    guildId: t,
    context: n,
    onSelect: u
  } = e, r = (0, c.default)(t, n), d = (0, o.default)(t, n), I = (0, s.default)(t, n);
  return (0, a.jsxs)(l.Menu, {
    navId: "moderation-raid-context",
    onClose: i.closeContextMenu,
    "aria-label": A.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: u,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: d
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [I, r]
    })]
  })
}, {
  object: I.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GUILD_MODERATION_RAID_MENU])