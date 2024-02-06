"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983");
n("884691");
var u = n("446674"),
  r = n("77078"),
  s = n("561288"),
  i = n("191145"),
  l = n("271938"),
  d = n("99795"),
  o = n("782340");

function f(e, t) {
  let n = (0, u.useStateFromStores)([l.default], () => l.default.getId() === e, [e]),
    [f, c] = (0, u.useStateFromStoresArray)([i.default], () => [i.default.getParticipants(t), i.default.getParticipant(t, e)], [t, e]);
  return n || 0 === f.length ? null : null == c ? (0, a.jsx)(r.MenuItem, {
    id: "ring",
    label: o.default.Messages.RING,
    action: () => s.default.ring(t, [e])
  }) : c.type === d.ParticipantTypes.USER && c.ringing ? (0, a.jsx)(r.MenuItem, {
    id: "stop-ringing",
    label: o.default.Messages.STOP_RINGING,
    action: () => s.default.stopRinging(t, [e])
  }) : null
}