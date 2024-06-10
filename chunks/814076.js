"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("47120");
var r = n("470079"),
  u = n("742280"),
  i = n("442837"),
  l = n("351402");

function a() {
  let [e, t] = r.useState(!1), [n, a] = r.useState(!1), o = (0, i.useStateFromStores)([l.default], () => u.CountryCodesSets.EEA_COUNTRIES.has(l.default.ipCountryCodeWithFallback));
  return {
    hasViewedPurchaseTerms: e,
    setHasViewedPurchaseTerms: t,
    showWithdrawalWaiver: o,
    hasAcceptedWithdrawalWaiver: !o || n,
    setHasAcceptedWithdrawalWaiver: a
  }
}