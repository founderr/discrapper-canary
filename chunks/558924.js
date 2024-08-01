n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  s = n(26151),
  o = n(358221),
  d = n(314897),
  I = n(354459),
  c = n(689938);

function l(e, t) {
  let n = (0, r.e7)([d.default], () => d.default.getId() === e, [e]),
[l, E] = (0, r.Wu)([o.Z], () => [
  o.Z.getParticipants(t),
  o.Z.getParticipant(t, e)
], [
  t,
  e
]);
  return n || 0 === l.length ? null : null == E ? (0, i.jsx)(a.MenuItem, {
id: 'ring',
label: c.Z.Messages.RING,
action: () => s.Z.ring(t, [e])
  }) : E.type === I.fO.USER && E.ringing ? (0, i.jsx)(a.MenuItem, {
id: 'stop-ringing',
label: c.Z.Messages.STOP_RINGING,
action: () => s.Z.stopRinging(t, [e])
  }) : null;
}