t.d(n, {
  Z: function() {
return c;
  }
}), t(47120);
var i = t(735250);
t(470079);
var r = t(442837),
  a = t(481060),
  s = t(26151),
  o = t(358221),
  l = t(314897),
  u = t(354459),
  d = t(689938);

function c(e, n) {
  let t = (0, r.e7)([l.default], () => l.default.getId() === e, [e]),
[c, E] = (0, r.Wu)([o.Z], () => [
  o.Z.getParticipants(n),
  o.Z.getParticipant(n, e)
], [
  n,
  e
]);
  return t || 0 === c.length ? null : null == E ? (0, i.jsx)(a.MenuItem, {
id: 'ring',
label: d.Z.Messages.RING,
action: () => s.Z.ring(n, [e])
  }) : E.type === u.fO.USER && E.ringing ? (0, i.jsx)(a.MenuItem, {
id: 'stop-ringing',
label: d.Z.Messages.STOP_RINGING,
action: () => s.Z.stopRinging(n, [e])
  }) : null;
}