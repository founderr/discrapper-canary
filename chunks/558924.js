"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("47120");
var u = a("735250");
a("470079");
var l = a("442837"),
  s = a("481060"),
  d = a("26151"),
  n = a("358221"),
  r = a("314897"),
  i = a("354459"),
  o = a("689938");

function f(e, t) {
  let a = (0, l.useStateFromStores)([r.default], () => r.default.getId() === e, [e]),
    [f, c] = (0, l.useStateFromStoresArray)([n.default], () => [n.default.getParticipants(t), n.default.getParticipant(t, e)], [t, e]);
  return a || 0 === f.length ? null : null == c ? (0, u.jsx)(s.MenuItem, {
    id: "ring",
    label: o.default.Messages.RING,
    action: () => d.default.ring(t, [e])
  }) : c.type === i.ParticipantTypes.USER && c.ringing ? (0, u.jsx)(s.MenuItem, {
    id: "stop-ringing",
    label: o.default.Messages.STOP_RINGING,
    action: () => d.default.stopRinging(t, [e])
  }) : null
}