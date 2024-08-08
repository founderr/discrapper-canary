n.r(s), n.d(s, {
  MESSAGE_REMINDER_DURATION_ITEMS: function() {
return d;
  },
  MessageReminderCreateMenu: function() {
return u;
  }
});
var a = n(735250);
n(470079);
var t = n(913527),
  i = n.n(t),
  E = n(481060),
  l = n(239091),
  M = n(70956),
  r = n(962796),
  _ = n(689938);
let d = [{
duration: 30 * M.Z.Millis.MINUTE,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN
  },
  {
duration: M.Z.Millis.HOUR,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
  },
  {
duration: 2 * M.Z.Millis.HOUR,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
  },
  {
duration: 4 * M.Z.Millis.HOUR,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
  }
];

function u(e) {
  var s;
  let {
message: n
  } = e;
  let t = (s = e => (0, r.HG)({
channelId: n.channel_id,
messageId: n.id,
dueAt: i()().add(e, 'millisecond').toDate()
  }), d.map(e => {
let {
  duration: n,
  getLabel: t
} = e;
return (0, a.jsx)(E.MenuItem, {
  id: 'create-reminder-'.concat(n),
  label: t(),
  action: () => s(n)
}, n);
  }));
  return (0, a.jsxs)(E.Menu, {
navId: 'message-reminder-snooze',
onClose: l.Zy,
'aria-label': _.Z.Messages.MESSAGE_REMINDERS_CREATE,
onSelect: () => null,
children: [
  t,
  (0, a.jsx)(E.MenuItem, {
    id: 'create-reminder-custom',
    label: _.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
    action: () => null
  }, 'custom')
]
  });
}