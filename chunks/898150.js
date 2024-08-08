a.r(s), a.d(s, {
  MESSAGE_REMINDER_DURATION_ITEMS: function() {
return R;
  },
  MessageReminderCreateMenu: function() {
return S;
  }
});
var n = a(735250);
a(470079);
var E = a(913527),
  t = a.n(E),
  M = a(481060),
  i = a(239091),
  l = a(70956),
  r = a(962796),
  _ = a(689938);
let R = [{
duration: 30 * l.Z.Millis.MINUTE,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN
  },
  {
duration: l.Z.Millis.HOUR,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
  },
  {
duration: 2 * l.Z.Millis.HOUR,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
  },
  {
duration: 4 * l.Z.Millis.HOUR,
getLabel: () => _.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
  }
];

function S(e) {
  var s;
  let {
message: a
  } = e;
  let E = (s = e => (0, r.HG)({
channelId: a.channel_id,
messageId: a.id,
dueAt: t()().add(e, 'millisecond').toDate()
  }), R.map(e => {
let {
  duration: a,
  getLabel: E
} = e;
return (0, n.jsx)(M.MenuItem, {
  id: 'create-reminder-'.concat(a),
  label: E(),
  action: () => s(a)
}, a);
  }));
  return (0, n.jsx)(M.Menu, {
navId: 'message-reminder-create',
onClose: i.Zy,
'aria-label': _.Z.Messages.MESSAGE_REMINDERS_CREATE,
onSelect: () => null,
children: (0, n.jsxs)(M.MenuGroup, {
  label: _.Z.Messages.MESSAGE_REMINDERS_CREATE,
  children: [
    E,
    (0, n.jsx)(M.MenuItem, {
      id: 'create-reminder-custom',
      label: _.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
      action: () => null
    }, 'custom')
  ]
})
  });
}