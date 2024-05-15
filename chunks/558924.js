"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("47120");
var l = a("735250");
a("470079");
var u = a("442837"),
  d = a("481060"),
  s = a("26151"),
  n = a("358221"),
  i = a("314897"),
  r = a("354459"),
  o = a("689938");

function f(e, t) {
  let a = (0, u.useStateFromStores)([i.default], () => i.default.getId() === e, [e]),
    [f, c] = (0, u.useStateFromStoresArray)([n.default], () => [n.default.getParticipants(t), n.default.getParticipant(t, e)], [t, e]);
  return a || 0 === f.length ? null : null == c ? (0, l.jsx)(d.MenuItem, {
    id: "ring",
    label: o.default.Messages.RING,
    action: () => s.default.ring(t, [e])
  }) : c.type === r.ParticipantTypes.USER && c.ringing ? (0, l.jsx)(d.MenuItem, {
    id: "stop-ringing",
    label: o.default.Messages.STOP_RINGING,
    action: () => s.default.stopRinging(t, [e])
  }) : null
}