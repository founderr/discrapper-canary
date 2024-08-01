n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(203143),
  r = n(615669),
  l = n(689938);
let o = {
  [r.z.END_EARLY]: e => (0, i.jsx)(s.MenuItem, {
id: 'end-poll-early',
label: l.Z.Messages.POLL_END_EARLY,
icon: s.ClockXIcon,
action: () => {
  a.Z.endPollEarly({
    channelId: e.channel_id,
    messageId: e.id
  });
},
iconProps: {
  color: 'currentColor'
}
  })
};

function c(e) {
  let t = (0, r.Z)(e);
  return 0 === t.length ? null : (0, i.jsx)(i.Fragment, {
children: t.map(t => o[t](e))
  });
}