t.d(s, {
  Z: function() {
    return l
  }
}), t(47120);
var n = t(442837),
  i = t(687476),
  a = t(293810);

function l() {
  return (0, n.e7)([i.Z], () => (function() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.Z], s = e.getGuildIdsWithPurchasableRoles(), t = !1;
    return (s.forEach(s => {
      e.getUserSubscriptionRoles(s).size > 0 && (t = !0)
    }), t) ? a.PY.SUBSCRIBED : 0 === s.size ? a.PY.NONE : a.PY.IN_SUBSCRIPTION_SERVER
  })([i.Z]))
}