t.d(n, {
  $g: function() {
    return l
  },
  Kp: function() {
    return a
  },
  nA: function() {
    return i
  }
});
var r = t(74538),
  s = t(474936);

function a(e) {
  let {
    isTrial: n,
    isGift: t,
    selectedSkuId: r,
    startedPaymentFlowWithPaymentSources: a
  } = e;
  return !n && !t && null != r && s.YQ.includes(r) && a
}

function l(e, n, t) {
  let r = !1;
  return e && null != n && null == n.invoiceItems.find(e => e.subscriptionPlanId === t.id) && (r = !0), r
}

function i(e, n, t) {
  let a = null != n ? (0, r.Af)(n) : null,
    l = s.mn[e],
    i = null != t ? t : l;
  return null != a ? i === a.planId && i === s.IW[e] ? i = s.mn[e] : i === a.planId && i === s.mn[e] ? i = s.IW[e] : (a.planId === s.Xh.PREMIUM_YEAR_TIER_0 || a.planId === s.Xh.PREMIUM_YEAR_TIER_1) && i === s.Xh.PREMIUM_MONTH_TIER_2 && (i = s.Xh.PREMIUM_YEAR_TIER_2) : i === s.Xh.PREMIUM_YEAR_TIER_1 && (i = s.Xh.PREMIUM_MONTH_TIER_1), i
}