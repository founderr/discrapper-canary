i.d(n, {
  Z: function() {
    return c
  }
}), i(47120);
var r = i(735250);
i(470079);
var s = i(442837),
  a = i(481060),
  t = i(26151),
  l = i(358221),
  d = i(314897),
  u = i(354459),
  o = i(689938);

function c(e, n) {
  let i = (0, s.e7)([d.default], () => d.default.getId() === e, [e]),
    [c, Z] = (0, s.Wu)([l.Z], () => [l.Z.getParticipants(n), l.Z.getParticipant(n, e)], [n, e]);
  return i || 0 === c.length ? null : null == Z ? (0, r.jsx)(a.MenuItem, {
    id: "ring",
    label: o.Z.Messages.RING,
    action: () => t.Z.ring(n, [e])
  }) : Z.type === u.fO.USER && Z.ringing ? (0, r.jsx)(a.MenuItem, {
    id: "stop-ringing",
    label: o.Z.Messages.STOP_RINGING,
    action: () => t.Z.stopRinging(n, [e])
  }) : null
}