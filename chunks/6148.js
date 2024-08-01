n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(904245),
  l = n(665906),
  o = n(314897),
  c = n(418476),
  u = n(689938);

function d(e, t) {
  let n = (0, s.e7)([o.default], () => o.default.getId()),
d = (0, l.$R)(t),
_ = (0, l.Gu)(t);
  return (0, c.Z)(e, n) && d && !_ ? (0, i.jsx)(a.MenuItem, {
id: 'edit',
label: u.Z.Messages.EDIT_MESSAGE,
action: () => r.Z.startEditMessage(t.id, e.id, e.content),
icon: a.PencilIcon
  }) : null;
}