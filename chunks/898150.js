s.r(n), s.d(n, {
  MESSAGE_REMINDER_DURATION_ITEMS: function() {
return d;
  },
  MessageReminderEditMenu: function() {
return _;
  }
});
var t = s(735250);
s(470079);
var a = s(913527),
  i = s.n(a),
  l = s(481060),
  r = s(239091),
  E = s(70956),
  M = s(962796),
  u = s(689938);
let d = [{
duration: 30 * E.Z.Millis.MINUTE,
getLabel: () => u.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN
  },
  {
duration: E.Z.Millis.HOUR,
getLabel: () => u.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR
  },
  {
duration: 2 * E.Z.Millis.HOUR,
getLabel: () => u.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS
  },
  {
duration: 4 * E.Z.Millis.HOUR,
getLabel: () => u.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS
  }
];

function _(e) {
  let {
message: n,
label: s
  } = e, a = function(e) {
let {
  onSelectDuration: n
} = e;
return d.map(e => {
  let {
    duration: s,
    getLabel: a
  } = e;
  return (0, t.jsx)(l.MenuItem, {
    id: 'create-reminder-'.concat(s),
    label: a(),
    action: () => n(s)
  }, s);
});
  }({
onSelectDuration: e => (0, M.HG)({
  channelId: n.channel_id,
  messageId: n.id,
  dueAt: i()().add(e, 'millisecond').toDate()
})
  });
  return (0, t.jsx)(l.Menu, {
navId: 'message-reminder-create',
onClose: r.Zy,
'aria-label': u.Z.Messages.MESSAGE_REMINDERS_CREATE,
onSelect: () => null,
children: (0, t.jsxs)(l.MenuGroup, {
  label: s,
  children: [
    a,
    (0, t.jsx)(l.MenuItem, {
      id: 'create-reminder-custom',
      label: u.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
      action: () => null
    }, 'custom')
  ]
})
  });
}