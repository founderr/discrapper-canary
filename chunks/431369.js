t.d(n, {
  g: function() {
    return c
  }
}), t(411104), t(47120);
var r = t(512722),
  o = t.n(r),
  a = t(509545),
  i = t(74538),
  l = t(474936),
  s = t(981631);

function c(e, n) {
  let t = a.Z.get(e.planId);
  o()(null != t, "missing premium subscription plan");
  let r = a.Z.getForSkuAndInterval((0, i.Wz)(l.Si.GUILD), t.interval, t.intervalCount);
  o()(null != r, "missing premium guild plan");
  let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    u = (e.status === s.O0b.CANCELED ? 0 : (0, i.uV)(c)) + n,
    d = c.filter(e => e.planId !== r.id);
  if (u < 0) throw Error("Invalid adjustment");
  return 0 === u ? d : [...d, {
    planId: r.id,
    quantity: u
  }]
}