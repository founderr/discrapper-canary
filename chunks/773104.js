n.d(t, {
    _: function () {
        return c;
    }
});
var s = n(442837),
    a = n(78839),
    r = n(74538),
    i = n(104494),
    o = n(639119),
    l = n(474936);
function c(e) {
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: _, onTier0TrialPeriod: u, onTier2TrialPeriod: E, onNonTier2Subscriber: T, onTier2Subscriber: I, onCustomCriteria: R } = e,
        m = (0, o.N)(),
        g = (0, i.Ng)(),
        N = (0, s.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        C = r.ZP.getPremiumTypeFromSubscription(N);
    if (null != R) {
        let e = R();
        if (null != e) return e;
    }
    return null != m && l.nG[m.trial_id].skus.includes(l.Si.TIER_0) ? (null != d ? d : t) : null != m && l.nG[m.trial_id].skus.includes(l.Si.TIER_2) ? (null != _ ? _ : t) : null != N && null != N.trialId && C === l.p9.TIER_0 ? (null != u ? u : t) : null != N && null != N.trialId && C === l.p9.TIER_2 ? (null != E ? E : t) : null != g ? (null != n ? n : t) : null == C ? (null != c ? c : t) : C === l.p9.TIER_0 || C === l.p9.TIER_1 ? (null != T ? T : t) : C === l.p9.TIER_2 ? (null != I ? I : t) : t;
}
