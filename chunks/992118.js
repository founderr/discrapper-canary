"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  a = n("446674"),
  s = n("77078"),
  o = n("10514"),
  u = n("719923"),
  d = n("646718"),
  c = n("449001"),
  m = function(e) {
    let {
      subscriptionTier: t,
      interval: n = d.SubscriptionIntervalTypes.MONTH,
      className: i,
      isGift: m = !1
    } = e, f = (0, a.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
    if (!f) return (0, r.jsx)(s.Spinner, {
      type: s.Spinner.Type.PULSING_ELLIPSIS,
      className: c.priceSpinner
    });
    let _ = o.default.getForSkuAndInterval(t, n),
      E = null != _ ? (0, u.getFormattedPriceForPlan)(_, void 0, !1, m) : null;
    return (0, r.jsxs)(s.Heading, {
      color: "always-white",
      variant: "heading-md/medium",
      className: l(c.pricePerInterval, i),
      children: [(0, r.jsx)("span", {
        className: c.price,
        children: E
      }), " / ", (0, u.getIntervalStringAsNoun)(n)]
    })
  }