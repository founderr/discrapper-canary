"use strict";
n.r(t), n.d(t, {
  useTrackLocalizedPricingPromoImpression: function() {
    return l
  }
});
var i = n("990547"),
  r = n("213609");

function l(e, t) {
  (0, r.default)({
    type: i.ImpressionTypes.VIEW,
    name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
    properties: {
      country_code: t,
      action_location: e
    }
  })
}