n.d(t, {
  W: function() {
return m;
  },
  Z: function() {
return I;
  }
});
var i = n(735250);
n(470079);
var s = n(913527),
  a = n.n(s),
  r = n(442837),
  l = n(481060),
  o = n(768943),
  c = n(962796),
  u = n(742989),
  d = n(550727),
  _ = n(448239),
  E = n(689938);

function I(e) {
  let {
showReminders: t
  } = u.Z.useExperiment({
location: 'use_message_reminders_item'
  }, {
autoTrackExposure: !1
  }), n = (0, r.e7)([o.Z], () => o.Z.isMessageReminder(e.id)), s = m(e, t => (0, c.HG)({
channelId: e.channel_id,
messageId: e.id,
dueAt: a()().add(t, 'millisecond').toDate()
  }));
  return t ? (0, i.jsx)(l.MenuItem, {
id: 'mark-todo',
label: n ? E.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : E.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
icon: n ? (0, l.makeIconCompat)(_.Z) : void 0,
action: () => n ? (0, c.bn)({
  channelId: e.channel_id,
  messageId: e.id
}) : (0, c.HG)({
  channelId: e.channel_id,
  messageId: e.id
}),
children: n ? null : s
  }) : null;
}

function m(e, t) {
  return d.B.map(e => {
let {
  duration: n,
  getLabel: s
} = e;
return (0, i.jsx)(l.MenuItem, {
  id: 'mark-todo-'.concat(n),
  label: s(),
  action: () => t(n)
}, n);
  });
}