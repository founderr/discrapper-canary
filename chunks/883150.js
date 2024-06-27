t.r(n), t.d(n, {
  default: function() {
    return l
  }
});
var a = t(735250);
t(470079);
var i = t(913527),
  o = t.n(i),
  r = t(481060),
  s = t(239091),
  d = t(235047),
  u = t(962796),
  c = t(689938);

function l(e) {
  let {
    message: n
  } = e, t = (0, d.W)(n, e => (0, u.dR)(n.id, o()().add(e, "millisecond").toDate()));
  return (0, a.jsx)(r.Menu, {
    navId: "message-reminder-snooze",
    onClose: s.Zy,
    "aria-label": c.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: () => {},
    children: t
  })
}