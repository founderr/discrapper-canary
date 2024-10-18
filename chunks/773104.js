n.d(t, {
    _: function () {
        return c;
    }
});
var s = n(442837),
    a = n(78839),
    r = n(74538),
    i = n(104494),
    l = n(639119),
    o = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: _, onTier2TrialOffer: d, onTier0TrialPeriod: E, onTier2TrialPeriod: u, onNonTier2Subscriber: T, onTier2Subscriber: I, onCustomCriteria: R } = e,
        g = (0, l.N)(),
        N = (0, i.Ng)(),
        C = (0, s.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        m = r.ZP.getPremiumTypeFromSubscription(C);
    if (null != R) {
        let e = R();
        if (null != e) return e;
    }
    return null != g && o.nG[g.trial_id].skus.includes(o.Si.TIER_0) ? (null != _ ? _ : t) : null != g && o.nG[g.trial_id].skus.includes(o.Si.TIER_2) ? (null != d ? d : t) : null != C && null != C.trialId && m === o.p9.TIER_0 ? (null != E ? E : t) : null != C && null != C.trialId && m === o.p9.TIER_2 ? (null != u ? u : t) : null != N ? (null != n ? n : t) : null == m ? (null != c ? c : t) : m === o.p9.TIER_0 || m === o.p9.TIER_1 ? (null != T ? T : t) : m === o.p9.TIER_2 ? (null != I ? I : t) : t;
}
