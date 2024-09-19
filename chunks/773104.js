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
    let { defaultResponse: t, onDiscountOffer: n, onNonSubscriber: c, onTier0TrialOffer: d, onTier2TrialOffer: _, onTier0TrialPeriod: u, onTier2TrialPeriod: E, onNonTier2Subscriber: T, onTier2Subscriber: I, onCustomCriteria: R } = e,
        m = (0, l.N)(),
        N = (0, i.Ng)(),
        g = (0, s.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        C = r.ZP.getPremiumTypeFromSubscription(g);
    if (null != R) {
        let e = R();
        if (null != e) return e;
    }
    return null != m && o.nG[m.trial_id].skus.includes(o.Si.TIER_0) ? (null != d ? d : t) : null != m && o.nG[m.trial_id].skus.includes(o.Si.TIER_2) ? (null != _ ? _ : t) : null != g && null != g.trialId && C === o.p9.TIER_0 ? (null != u ? u : t) : null != g && null != g.trialId && C === o.p9.TIER_2 ? (null != E ? E : t) : null != N ? (null != n ? n : t) : null == C ? (null != c ? c : t) : C === o.p9.TIER_0 || C === o.p9.TIER_1 ? (null != T ? T : t) : C === o.p9.TIER_2 ? (null != I ? I : t) : t;
}
