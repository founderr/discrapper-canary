t.d(n, {
    g: function () {
        return s;
    }
}),
    t(411104),
    t(47120);
var o = t(512722),
    r = t.n(o),
    a = t(509545),
    i = t(74538),
    c = t(474936),
    l = t(981631);
function s(e, n) {
    let t = a.Z.get(e.planId);
    r()(null != t, 'missing premium subscription plan');
    let o = a.Z.getForSkuAndInterval((0, i.Wz)(c.Si.GUILD), t.interval, t.intervalCount);
    r()(null != o, 'missing premium guild plan');
    let s = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        d = (e.status === l.O0b.CANCELED ? 0 : (0, i.uV)(s)) + n,
        u = s.filter((e) => e.planId !== o.id);
    if (d < 0) throw Error('Invalid adjustment');
    return 0 === d
        ? u
        : [
              ...u,
              {
                  planId: o.id,
                  quantity: d
              }
          ];
}
