s.d(t, {
  _: function() {
    return c
  }
});
var n = s(442837),
  a = s(78839),
  i = s(74538),
  r = s(104494),
  l = s(639119),
  o = s(474936);

function c(e) {
  let {
    defaultResponse: t,
    onDiscountOffer: s,
    onNonSubscriber: c,
    onTier0TrialOffer: E,
    onTier2TrialOffer: _,
    onTier0TrialPeriod: u,
    onTier2TrialPeriod: d,
    onNonTier2Subscriber: T,
    onTier2Subscriber: I,
    onCustomCriteria: R
  } = e, A = (0, l.N)(), N = (0, r.Ng)(), C = (0, n.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()), g = i.ZP.getPremiumTypeFromSubscription(C);
  if (null != R) {
    let e = R();
    if (null != e) return e
  }
  return null != A && o.nG[A.trial_id].skus.includes(o.Si.TIER_0) ? null != E ? E : t : null != A && o.nG[A.trial_id].skus.includes(o.Si.TIER_2) ? null != _ ? _ : t : null != C && null != C.trialId && g === o.p9.TIER_0 ? null != u ? u : t : null != C && null != C.trialId && g === o.p9.TIER_2 ? null != d ? d : t : null != N ? null != s ? s : t : null == g ? null != c ? c : t : g === o.p9.TIER_0 || g === o.p9.TIER_1 ? null != T ? T : t : g === o.p9.TIER_2 ? null != I ? I : t : t
}