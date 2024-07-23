a.d(n, {
  AT: function() {
return N;
  },
  GY: function() {
return c;
  },
  R4: function() {
return d;
  },
  oE: function() {
return P;
  },
  yb: function() {
return E;
  }
}), a(47120), a(653041), a(470079);
var t = a(512722),
  r = a.n(t),
  o = a(913527),
  s = a.n(o),
  l = a(99945);
a(442837);
var i = a(821849),
  _ = a(509545),
  C = a(74538),
  A = a(981631),
  u = a(474936);

function E(e) {
  return e.items.map(e => {
let n = _.Z.get(e.planId);
return r()(null != n, 'Unable to fetch plan'), n;
  }).map(e => e.skuId);
}

function d(e, n, a) {
  let t = e.getCurrentSubscriptionPlanIdForGroup(a);
  return e.type === A.NYc.PREMIUM && null == t || (r()(null != t, 'Current subscription has no plan in group'), r()(!(t === u.Xh.PREMIUM_YEAR_TIER_1 && n === u.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), a.indexOf(t) < a.indexOf(n));
}

function c(e, n, a) {
  return !d(e, n, a);
}

function P(e, n) {
  let a = _.Z.get(e);
  if (null == a) {
let a = u.GP[e];
r()(null != a, 'Missing hardcoded subscriptionPlan: '.concat(e));
let t = (0, C.Wz)(a.skuId);
!_.Z.isFetchingForSKU(t) && (0, i.GZ)(t, n);
  }
  return a;
}

function N(e) {
  let n = Object.keys(l.T).filter(e => isNaN(Number(e)));
  if (e.status !== A.O0b.PAUSED)
return {
  durations: n,
  currentDaysPaused: 0
};
  if (null == e.pauseEndsAt)
return {
  durations: [],
  currentDaysPaused: 0
};
  {
let a = s()(e.currentPeriodStart),
  t = Math.round(s()(e.pauseEndsAt).diff(a, 'days', !0)),
  r = [];
for (let e of n)
  l.T[e] > t && r.push(e);
return {
  durations: r,
  currentDaysPaused: t
};
  }
}