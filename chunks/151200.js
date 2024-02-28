"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("37983");
n("884691");
var l = n("446674"),
  r = n("77078"),
  u = n("561288"),
  a = n("191145"),
  s = n("271938"),
  o = n("99795"),
  d = n("782340");

function f(e, t) {
  let n = (0, l.useStateFromStores)([s.default], () => s.default.getId() === e, [e]),
    [f, c] = (0, l.useStateFromStoresArray)([a.default], () => [a.default.getParticipants(t), a.default.getParticipant(t, e)], [t, e]);
  return n || 0 === f.length ? null : null == c ? (0, i.jsx)(r.MenuItem, {
    id: "ring",
    label: d.default.Messages.RING,
    action: () => u.default.ring(t, [e])
  }) : c.type === o.ParticipantTypes.USER && c.ringing ? (0, i.jsx)(r.MenuItem, {
    id: "stop-ringing",
    label: d.default.Messages.STOP_RINGING,
    action: () => u.default.stopRinging(t, [e])
  }) : null
}