t.d(s, {
  _: function() {
    return _
  }
});
var n = t(442837),
  a = t(78839),
  r = t(74538),
  i = t(104494),
  l = t(639119),
  o = t(474936);

function _(e) {
  let {
    defaultResponse: s,
    onDiscountOffer: t,
    onNonSubscriber: _,
    onTier0TrialOffer: c,
    onTier2TrialOffer: E,
    onTier0TrialPeriod: u,
    onTier2TrialPeriod: R,
    onNonTier2Subscriber: d,
    onTier2Subscriber: I,
    onCustomCriteria: T
  } = e, A = (0, l.N)(), M = (0, i.Ng)(), S = (0, n.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()), N = r.ZP.getPremiumTypeFromSubscription(S);
  if (null != T) {
    let e = T();
    if (null != e) return e
  }
  return null != A && o.nG[A.trial_id].skus.includes(o.Si.TIER_0) ? null != c ? c : s : null != A && o.nG[A.trial_id].skus.includes(o.Si.TIER_2) ? null != E ? E : s : null != S && null != S.trialId && N === o.p9.TIER_0 ? null != u ? u : s : null != S && null != S.trialId && N === o.p9.TIER_2 ? null != R ? R : s : null != M ? null != t ? t : s : null == N ? null != _ ? _ : s : N === o.p9.TIER_0 || N === o.p9.TIER_1 ? null != d ? d : s : N === o.p9.TIER_2 ? null != I ? I : s : s
}