a.r(n), a.d(n, {
  default: function() {
return l;
  }
});
var s = a(735250);
a(470079);
var d = a(913527),
  i = a.n(d),
  t = a(481060),
  r = a(239091),
  c = a(235047),
  o = a(962796),
  u = a(689938);

function l(e) {
  let {
message: n
  } = e, a = (0, c.W)(n, e => (0, o.HG)({
channelId: n.channel_id,
messageId: n.id,
dueAt: i()().add(e, 'millisecond').toDate()
  }));
  return (0, s.jsx)(t.Menu, {
navId: 'message-reminder-snooze',
onClose: r.Zy,
'aria-label': u.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: () => {},
children: a
  });
}