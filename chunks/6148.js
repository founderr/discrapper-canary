t.d(n, {
  Z: function() {
    return d
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  r = t(904245),
  o = t(665906),
  u = t(314897),
  s = t(418476),
  c = t(689938);

function d(e, n) {
  let t = (0, a.e7)([u.default], () => u.default.getId()),
    d = (0, o.$R)(n),
    E = (0, o.Gu)(n);
  return (0, s.Z)(e, t) && d && !E ? (0, i.jsx)(l.MenuItem, {
    id: "edit",
    label: c.Z.Messages.EDIT_MESSAGE,
    action: () => r.Z.startEditMessage(n.id, e.id, e.content),
    icon: l.PencilIcon
  }) : null
}