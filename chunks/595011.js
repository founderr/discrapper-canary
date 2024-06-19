l.r(n);
var t = l(735250);
l(470079);
var i = l(481060),
  r = l(239091),
  o = l(410575),
  s = l(108843),
  u = l(100527),
  a = l(299206),
  d = l(88966),
  c = l(725119),
  Z = l(931617),
  f = l(981631),
  M = l(689938);
n.default = (0, s.Z)(function(e) {
  let {
    user: n,
    guildId: l,
    analyticsContext: s,
    onSelect: u
  } = e, h = (0, c.Z)(n.id), x = (0, Z.Z)(n.id, l), E = (0, a.Z)({
    id: n.id,
    label: M.Z.Messages.COPY_ID_USER
  }), O = (0, d.Z)(n.id), R = n.isNonUserBot();
  return (0, t.jsx)(o.Z, {
    context: s,
    object: f.qAy.CONTEXT_MENU,
    children: (0, t.jsxs)(i.Menu, {
      navId: "user-context",
      onClose: r.Zy,
      "aria-label": M.Z.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: u,
      children: [(0, t.jsxs)(i.MenuGroup, {
        children: [!R && h, !R && O]
      }), (0, t.jsx)(i.MenuGroup, {
        children: !R && x
      }), (0, t.jsx)(i.MenuGroup, {
        children: E
      })]
    })
  })
}, [u.Z.CONTEXT_MENU, u.Z.AUDIT_LOG_USER_MENU])