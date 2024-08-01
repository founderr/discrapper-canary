n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(332148),
  l = n(257559),
  o = n(496675),
  c = n(151007),
  u = n(981631),
  d = n(689938);

function _(e, t) {
  let n = (0, s.e7)([o.Z], () => o.Z.can(u.Plq.MANAGE_MESSAGES, t), [t]);
  return e.state !== u.yb.SEND_FAILED && (0, c.Z)(e, t, n) ? !1 === e.pinned ? (0, i.jsx)(a.MenuItem, {
id: 'pin',
action: function(n) {
  n.shiftKey ? r.Z.pinMessage(t, e.id) : l.Z.confirmPin(t, e);
},
label: d.Z.Messages.PIN_MESSAGE,
icon: a.PinIcon
  }) : (0, i.jsx)(a.MenuItem, {
id: 'unpin',
action: function(n) {
  n.shiftKey ? r.Z.unpinMessage(t, e.id) : l.Z.confirmUnpin(t, e);
},
label: d.Z.Messages.UNPIN_MESSAGE,
icon: a.PinIcon
  }) : null;
}