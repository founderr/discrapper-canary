"use strict";
n.r(t), n.d(t, {
  getOrFetchSubscriptionPlan: function() {
    return S
  },
  getSubscriptionPauseDurations: function() {
    return P
  },
  getSubscriptionSKUs: function() {
    return _
  },
  subscriptionCanDowngrade: function() {
    return E
  },
  subscriptionCanSwitchImmediately: function() {
    return I
  }
}), n("47120"), n("653041"), n("470079");
var a = n("512722"),
  r = n.n(a),
  s = n("913527"),
  l = n.n(s),
  i = n("99945");
n("442837");
var u = n("821849"),
  o = n("509545"),
  d = n("74538"),
  c = n("981631"),
  f = n("474936");

function _(e) {
  return e.items.map(e => {
    let t = o.default.get(e.planId);
    return r()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function I(e, t, n) {
  let a = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === c.SubscriptionTypes.PREMIUM && null == a || (r()(null != a, "Current subscription has no plan in group"), r()(!(a === f.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === f.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(a) < n.indexOf(t))
}

function E(e, t, n) {
  return !I(e, t, n)
}

function S(e, t) {
  let n = o.default.get(e);
  if (null == n) {
    let n = f.SubscriptionPlanInfo[e];
    r()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let a = (0, d.castPremiumSubscriptionAsSkuId)(n.skuId);
    !o.default.isFetchingForSKU(a) && (0, u.fetchSubscriptionPlansForSKU)(a, t)
  }
  return n
}

function P(e) {
  let t = Object.keys(i.PauseDuration).filter(e => isNaN(Number(e)));
  if (e.status !== c.SubscriptionStatusTypes.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = l()(e.currentPeriodStart),
      a = Math.round(l()(e.pauseEndsAt).diff(n, "days", !0)),
      r = [];
    for (let e of t) i.PauseDuration[e] > a && r.push(e);
    return {
      durations: r,
      currentDaysPaused: a
    }
  }
}