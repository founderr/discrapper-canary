t.d(n, {
  g: function() {
    return u
  }
}), t(411104), t(47120);
var r = t(512722),
  s = t.n(r),
  l = t(509545),
  o = t(74538),
  a = t(474936),
  i = t(981631);

function u(e, n) {
  let t = l.Z.get(e.planId);
  s()(null != t, "missing premium subscription plan");
  let r = l.Z.getForSkuAndInterval((0, o.Wz)(a.Si.GUILD), t.interval, t.intervalCount);
  s()(null != r, "missing premium guild plan");
  let u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
    c = (e.status === i.O0b.CANCELED ? 0 : (0, o.uV)(u)) + n,
    d = u.filter(e => e.planId !== r.id);
  if (c < 0) throw Error("Invalid adjustment");
  return 0 === c ? d : [...d, {
    planId: r.id,
    quantity: c
  }]
}