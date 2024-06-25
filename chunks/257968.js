n.d(t, {
  c: function() {
    return d
  },
  p: function() {
    return u
  }
});
var s = n(442837),
  i = n(507885),
  l = n(379146),
  a = n(273003),
  r = n(754332),
  o = n(140863),
  c = n(701488);

function u() {
  return (0, s.e7)([i.Z], () => d(i.Z))
}

function d(e) {
  let t = 0,
    n = e.getAcknowledged();
  return l.q.getCurrentConfig({
    location: "1d9280_2"
  }).enabled && !n.has(c.ES.GDM_ACTIVITIES) && t++, o.u.getCurrentConfig({
    location: "1d9280_3"
  }).enabled && !n.has(c.ES.PUTT_PARTY) && t++, a.q.getCurrentConfig({
    location: "1d9280_4"
  }).enabled && !n.has(c.ES.JAMSPACE) && t++, r.m.getCurrentConfig({
    location: "1d9280_5"
  }).enabled && !n.has(c.ES.POKER) && t++, !n.has(c.ES.DISCORD_TURNS_8) && t <= 0 && t++, t
}