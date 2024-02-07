"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var u = n("37983");
n("884691");
var r = n("446674"),
  a = n("77078"),
  i = n("561288"),
  l = n("191145"),
  s = n("271938"),
  d = n("99795"),
  o = n("782340");

function c(e, t) {
  let n = (0, r.useStateFromStores)([s.default], () => s.default.getId() === e, [e]),
    [c, f] = (0, r.useStateFromStoresArray)([l.default], () => [l.default.getParticipants(t), l.default.getParticipant(t, e)], [t, e]);
  return n || 0 === c.length ? null : null == f ? (0, u.jsx)(a.MenuItem, {
    id: "ring",
    label: o.default.Messages.RING,
    action: () => i.default.ring(t, [e])
  }) : f.type === d.ParticipantTypes.USER && f.ringing ? (0, u.jsx)(a.MenuItem, {
    id: "stop-ringing",
    label: o.default.Messages.STOP_RINGING,
    action: () => i.default.stopRinging(t, [e])
  }) : null
}