t.d(n, {
  Z: function() {
    return c
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  r = t(481060),
  l = t(904245),
  o = t(665906),
  u = t(314897),
  s = t(418476),
  d = t(689938);

function c(e, n) {
  let t = (0, a.e7)([u.default], () => u.default.getId()),
    c = (0, o.$R)(n),
    E = (0, o.Gu)(n);
  return (0, s.Z)(e, t) && c && !E ? (0, i.jsx)(r.MenuItem, {
    id: "edit",
    label: d.Z.Messages.EDIT_MESSAGE,
    action: () => l.Z.startEditMessage(n.id, e.id, e.content),
    icon: r.PencilIcon
  }) : null
}