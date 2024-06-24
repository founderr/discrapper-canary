n.d(t, {
  AT: function() {
    return _
  },
  GY: function() {
    return f
  },
  R4: function() {
    return p
  },
  oE: function() {
    return C
  },
  yb: function() {
    return h
  }
}), n(47120), n(653041), n(470079);
var r = n(512722),
  a = n.n(r),
  s = n(913527),
  l = n.n(s),
  i = n(99945);
n(442837);
var o = n(821849),
  u = n(509545),
  c = n(74538),
  d = n(981631),
  E = n(474936);

function h(e) {
  return e.items.map(e => {
    let t = u.Z.get(e.planId);
    return a()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function p(e, t, n) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === d.NYc.PREMIUM && null == r || (a()(null != r, "Current subscription has no plan in group"), a()(!(r === E.Xh.PREMIUM_YEAR_TIER_1 && t === E.Xh.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(r) < n.indexOf(t))
}

function f(e, t, n) {
  return !p(e, t, n)
}

function C(e, t) {
  let n = u.Z.get(e);
  if (null == n) {
    let n = E.GP[e];
    a()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = (0, c.Wz)(n.skuId);
    !u.Z.isFetchingForSKU(r) && (0, o.GZ)(r, t)
  }
  return n
}

function _(e) {
  let t = Object.keys(i.T).filter(e => isNaN(Number(e)));
  if (e.status !== d.O0b.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = l()(e.currentPeriodStart),
      r = Math.round(l()(e.pauseEndsAt).diff(n, "days", !0)),
      a = [];
    for (let e of t) i.T[e] > r && a.push(e);
    return {
      durations: a,
      currentDaysPaused: r
    }
  }
}