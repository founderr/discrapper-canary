"use strict";
n.r(t), n.d(t, {
  getOrFetchSubscriptionPlan: function() {
    return S
  },
  getSubscriptionPauseDurations: function() {
    return _
  },
  getSubscriptionSKUs: function() {
    return E
  },
  subscriptionCanDowngrade: function() {
    return P
  },
  subscriptionCanSwitchImmediately: function() {
    return A
  }
}), n("47120"), n("653041"), n("470079");
var r = n("512722"),
  a = n.n(r),
  u = n("913527"),
  s = n.n(u),
  i = n("99945");
n("442837");
var l = n("821849"),
  c = n("509545"),
  d = n("74538"),
  o = n("981631"),
  f = n("474936");

function E(e) {
  return e.items.map(e => {
    let t = c.default.get(e.planId);
    return a()(null != t, "Unable to fetch plan"), t
  }).map(e => e.skuId)
}

function A(e, t, n) {
  let r = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === o.SubscriptionTypes.PREMIUM && null == r || (a()(null != r, "Current subscription has no plan in group"), a()(!(r === f.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === f.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(r) < n.indexOf(t))
}

function P(e, t, n) {
  return !A(e, t, n)
}

function S(e, t) {
  let n = c.default.get(e);
  if (null == n) {
    let n = f.SubscriptionPlanInfo[e];
    a()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
    let r = (0, d.castPremiumSubscriptionAsSkuId)(n.skuId);
    !c.default.isFetchingForSKU(r) && (0, l.fetchSubscriptionPlansForSKU)(r, t)
  }
  return n
}

function _(e) {
  let t = Object.keys(i.PauseDuration).filter(e => isNaN(Number(e)));
  if (e.status !== o.SubscriptionStatusTypes.PAUSED) return {
    durations: t,
    currentDaysPaused: 0
  };
  if (null == e.pauseEndsAt) return {
    durations: [],
    currentDaysPaused: 0
  };
  {
    let n = s()(e.currentPeriodStart),
      r = Math.round(s()(e.pauseEndsAt).diff(n, "days", !0)),
      a = [];
    for (let e of t) i.PauseDuration[e] > r && a.push(e);
    return {
      durations: a,
      currentDaysPaused: r
    }
  }
}