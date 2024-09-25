t.d(n, {
    $g: function () {
        return s;
    },
    Kp: function () {
        return a;
    },
    nA: function () {
        return o;
    }
});
var r = t(74538),
    i = t(474936);
function a(e) {
    let { isTrial: n, isGift: t, selectedSkuId: r, startedPaymentFlowWithPaymentSources: a, inReverseTrial: s } = e;
    return !n && !t && !s && null != r && i.YQ.includes(r) && a;
}
function s(e, n, t) {
    let r = !1;
    return e && null != n && null == n.invoiceItems.find((e) => e.subscriptionPlanId === t.id) && (r = !0), r;
}
function o(e, n, t) {
    let a = null != n ? (0, r.Af)(n) : null,
        s = i.mn[e],
        o = null != t ? t : s;
    return null != a ? (o === a.planId && o === i.IW[e] ? (o = i.mn[e]) : o === a.planId && o === i.mn[e] ? (o = i.IW[e]) : (a.planId === i.Xh.PREMIUM_YEAR_TIER_0 || a.planId === i.Xh.PREMIUM_YEAR_TIER_1) && o === i.Xh.PREMIUM_MONTH_TIER_2 && (o = i.Xh.PREMIUM_YEAR_TIER_2)) : o === i.Xh.PREMIUM_YEAR_TIER_1 && (o = i.Xh.PREMIUM_MONTH_TIER_1), o;
}
