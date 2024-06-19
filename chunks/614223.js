t.d(e, {
  $g: function() {
    return r
  },
  Kp: function() {
    return i
  },
  nA: function() {
    return a
  }
});
var l = t(74538),
  u = t(474936);

function i(n) {
  let {
    isTrial: e,
    isGift: t,
    selectedSkuId: l,
    startedPaymentFlowWithPaymentSources: i
  } = n;
  return !e && !t && null != l && u.YQ.includes(l) && i
}

function r(n, e, t) {
  let l = !1;
  return n && null != e && null == e.invoiceItems.find(n => n.subscriptionPlanId === t.id) && (l = !0), l
}

function a(n, e, t) {
  let i = null != e ? (0, l.Af)(e) : null,
    r = u.mn[n],
    a = null != t ? t : r;
  return null != i ? a === i.planId && a === u.IW[n] ? a = u.mn[n] : a === i.planId && a === u.mn[n] ? a = u.IW[n] : (i.planId === u.Xh.PREMIUM_YEAR_TIER_0 || i.planId === u.Xh.PREMIUM_YEAR_TIER_1) && a === u.Xh.PREMIUM_MONTH_TIER_2 && (a = u.Xh.PREMIUM_YEAR_TIER_2) : a === u.Xh.PREMIUM_YEAR_TIER_1 && (a = u.Xh.PREMIUM_MONTH_TIER_1), a
}