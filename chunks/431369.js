t.d(n, {
    g: function () {
        return u;
    }
}),
    t(411104),
    t(47120);
var o = t(512722),
    l = t.n(o),
    i = t(509545),
    r = t(74538),
    a = t(474936),
    s = t(981631);
function u(e, n) {
    let t = i.Z.get(e.planId);
    l()(null != t, 'missing premium subscription plan');
    let o = i.Z.getForSkuAndInterval((0, r.Wz)(a.Si.GUILD), t.interval, t.intervalCount);
    l()(null != o, 'missing premium guild plan');
    let u = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        c = (e.status === s.O0b.CANCELED ? 0 : (0, r.uV)(u)) + n,
        d = u.filter((e) => e.planId !== o.id);
    if (c < 0) throw Error('Invalid adjustment');
    return 0 === c
        ? d
        : [
              ...d,
              {
                  planId: o.id,
                  quantity: c
              }
          ];
}
