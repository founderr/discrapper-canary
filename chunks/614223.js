n.d(t, {
    $g: function () {
        return l;
    },
    Kp: function () {
        return u;
    },
    nA: function () {
        return i;
    }
});
var r = n(74538),
    a = n(474936);
function u(e) {
    let { isTrial: t, isGift: n, selectedSkuId: r, startedPaymentFlowWithPaymentSources: u, inReverseTrial: l } = e;
    return !t && !n && !l && null != r && a.YQ.includes(r) && u;
}
function l(e, t, n) {
    let r = !1;
    return e && null != t && null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) && (r = !0), r;
}
function i(e, t, n) {
    let u = null != t ? (0, r.Af)(t) : null,
        l = a.mn[e],
        i = null != n ? n : l;
    return null != u ? (i === u.planId && i === a.IW[e] ? (i = a.mn[e]) : i === u.planId && i === a.mn[e] ? (i = a.IW[e]) : (u.planId === a.Xh.PREMIUM_YEAR_TIER_0 || u.planId === a.Xh.PREMIUM_YEAR_TIER_1) && i === a.Xh.PREMIUM_MONTH_TIER_2 && (i = a.Xh.PREMIUM_YEAR_TIER_2)) : i === a.Xh.PREMIUM_YEAR_TIER_1 && (i = a.Xh.PREMIUM_MONTH_TIER_1), i;
}
