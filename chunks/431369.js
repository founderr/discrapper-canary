t.d(s, {
  g: function() {
    return c
  }
}), t(411104), t(47120);
var n = t(512722),
  a = t.n(n),
  i = t(509545),
  l = t(74538),
  r = t(474936),
  o = t(981631);

function c(e, s) {
  let t = i.Z.get(e.planId);
  a()(null != t, "missing premium subscription plan");
  let n = i.Z.getForSkuAndInterval((0, l.Wz)(r.Si.GUILD), t.interval, t.intervalCount);
  a()(null != n, "missing premium guild plan");
  let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    u = (e.status === o.O0b.CANCELED ? 0 : (0, l.uV)(c)) + s,
    d = c.filter(e => e.planId !== n.id);
  if (u < 0) throw Error("Invalid adjustment");
  return 0 === u ? d : [...d, {
    planId: n.id,
    quantity: u
  }]
}