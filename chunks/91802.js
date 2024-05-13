"use strict";
n.r(t), n.d(t, {
  useLocalizedPromoQuery: function() {
    return s
  }
});
var r = n("442837"),
  i = n("351402");

function s() {
  let {
    localizedPricingPromo: e,
    hasError: t
  } = (0, r.useStateFromStoresObject)([i.default], () => ({
    localizedPricingPromo: i.default.localizedPricingPromo,
    hasError: i.default.localizedPricingPromoHasError
  }));
  return t ? null : e
}