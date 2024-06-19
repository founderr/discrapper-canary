r.d(n, {
  Z: function() {
    return c
  }
}), r(47120);
var i = r(735250);
r(470079);
var t = r(442837),
  s = r(481060),
  a = r(26151),
  l = r(358221),
  u = r(314897),
  d = r(354459),
  o = r(689938);

function c(e, n) {
  let r = (0, t.e7)([u.default], () => u.default.getId() === e, [e]),
    [c, Z] = (0, t.Wu)([l.Z], () => [l.Z.getParticipants(n), l.Z.getParticipant(n, e)], [n, e]);
  return r || 0 === c.length ? null : null == Z ? (0, i.jsx)(s.MenuItem, {
    id: "ring",
    label: o.Z.Messages.RING,
    action: () => a.Z.ring(n, [e])
  }) : Z.type === d.fO.USER && Z.ringing ? (0, i.jsx)(s.MenuItem, {
    id: "stop-ringing",
    label: o.Z.Messages.STOP_RINGING,
    action: () => a.Z.stopRinging(n, [e])
  }) : null
}