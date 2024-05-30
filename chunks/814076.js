"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var r = n("470079"),
  u = n("742280"),
  i = n("442837"),
  a = n("351402");

function l() {
  let [e, t] = r.useState(!1), [n, l] = r.useState(!1), o = (0, i.useStateFromStores)([a.default], () => u.CountryCodesSets.EEA_COUNTRIES.has(a.default.ipCountryCodeWithFallback));
  return {
    hasViewedPurchaseTerms: e,
    setHasViewedPurchaseTerms: t,
    showWithdrawalWaiver: o,
    hasAcceptedWithdrawalWaiver: !o || n,
    setHasAcceptedWithdrawalWaiver: l
  }
}