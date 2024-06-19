t.d(s, {
  Z: function() {
    return r
  }
});
var a = t(470079),
  i = t(442837),
  l = t(430824),
  n = t(687476);

function r(e) {
  let s = (0, i.e7)([l.Z], () => l.Z.getRoles(e)),
    t = (0, i.e7)([n.Z], () => n.Z.getSubscriptionRoles(e));
  return a.useMemo(() => Object.values(s).filter(e => t.has(e.id)), [s, t])
}