t.d(n, {
  AT: function() {
    return O
  },
  GY: function() {
    return _
  },
  R4: function() {
    return N
  },
  oE: function() {
    return A
  },
  yb: function() {
    return C
  }
}), t(47120), t(653041), t(470079);
var r = t(512722),
  s = t.n(r),
  l = t(913527),
  o = t.n(l),
  a = t(99945);
t(442837);
var i = t(821849),
  u = t(509545),
  c = t(74538),
  d = t(981631),
  E = t(474936);

function C(e) {
  return e.items.map(e => {
    let n = u.Z.get(e.planId);
    return s()(null != n, "Unable to fetch plan"), n
  }).map(e => e.skuId)
}

function N(e, n, t) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(t);
  return e.type === d.NYc.PREMIUM && null == r || (s()(null != r, "Current subscription has no plan in group"), s()(!(r === E.Xh.PREMIUM_YEAR_TIER_1 && n === E.Xh.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), t.indexOf(r) < t.indexOf(n))
}

function _(e, n, t) {
  return !N(e, n, t)
}

function A(e, n) {
  let t = u.Z.get(e);
  if (null == t) {
    let t = E.GP[e];
    s()(null != t, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = (0, c.Wz)(t.skuId);
    !u.Z.isFetchingForSKU(r) && (0, i.GZ)(r, n)
  }
  return t
}

function O(e) {
  let n = Object.keys(a.T).filter(e => isNaN(Number(e)));
  if (e.status !== d.O0b.PAUSED) return {
    durations: n,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let t = o()(e.currentPeriodStart),
      r = Math.round(o()(e.pauseEndsAt).diff(t, "days", !0)),
      s = [];
    for (let e of n) a.T[e] > r && s.push(e);
    return {
      durations: s,
      currentDaysPaused: r
    }
  }
}