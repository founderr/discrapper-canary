t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var a = t(735250);
t(470079);
var s = t(913527),
  i = t.n(s),
  l = t(481060),
  o = t(239091),
  r = t(235047),
  E = t(962796),
  u = t(689938);

function d(e) {
  let {
    message: n
  } = e, t = (0, r.W)(n, e => (0, E.dR)(n.id, i()().add(e, "millisecond").toDate()));
  return (0, a.jsx)(l.Menu, {
    navId: "message-reminder-snooze",
    onClose: o.Zy,
    "aria-label": u.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: () => {},
    children: t
  })
}