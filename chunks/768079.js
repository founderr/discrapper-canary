t.r(n);
var s = t(735250);
t(470079);
var r = t(481060),
  i = t(239091),
  u = t(410575),
  o = t(108843),
  a = t(100527),
  c = t(299206),
  l = t(88966),
  d = t(725119),
  Z = t(981631),
  f = t(689938);
n.default = (0, o.Z)(function(e) {
  let {
user: n,
analyticsContext: t,
onSelect: o
  } = e, a = (0, d.Z)({
userId: n.id
  }), E = (0, c.Z)({
id: n.id,
label: f.Z.Messages.COPY_ID_USER
  }), M = (0, l.Z)(n.id), _ = n.isNonUserBot();
  return (0, s.jsx)(u.Z, {
context: t,
object: Z.qAy.CONTEXT_MENU,
children: (0, s.jsxs)(r.Menu, {
  navId: 'user-context',
  onClose: i.Zy,
  'aria-label': f.Z.Messages.USER_ACTIONS_MENU_LABEL,
  onSelect: o,
  children: [
    (0, s.jsxs)(r.MenuGroup, {
      children: [
        !_ && a,
        !_ && M
      ]
    }),
    (0, s.jsx)(r.MenuGroup, {
      children: E
    })
  ]
})
  });
}, [
  a.Z.CONTEXT_MENU,
  a.Z.BANNED_USER_MENU
]);