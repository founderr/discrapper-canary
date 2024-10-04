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
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: _, onTier0TrialPeriod: E, onTier2TrialPeriod: u, onNonTier2Subscriber: T, onTier2Subscriber: I, onCustomCriteria: R } = e,
        g = (0, l.N)(),
        N = (0, i.Ng)(),
        m = (0, s.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        C = r.ZP.getPremiumTypeFromSubscription(m);
    if (null != R) {
        let e = R();
        if (null != e) return e;
    }
    return null != g && o.nG[g.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != g && o.nG[g.trial_id].skus.includes(o.Si.TIER_2) ? (null != _ ? _ : t) : null != m && null != m.trialId && C === o.p9.TIER_0 ? (null != E ? E : t) : null != m && null != m.trialId && C === o.p9.TIER_2 ? (null != u ? u : t) : null != N ? (null != n ? n : t) : null == C ? (null != c ? c : t) : C === o.p9.TIER_0 || C === o.p9.TIER_1 ? (null != T ? T : t) : C === o.p9.TIER_2 ? (null != I ? I : t) : t;
}
