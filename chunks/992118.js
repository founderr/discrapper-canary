"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("446674"),
  s = n("77078"),
  o = n("10514"),
  u = n("719923"),
  c = n("646718"),
  d = n("891533"),
  f = function(e) {
    let {
      subscriptionTier: t,
      interval: n = c.SubscriptionIntervalTypes.MONTH,
      className: r,
      isGift: f = !1
    } = e, m = (0, a.useStateFromStores)([o.default], () => o.default.isLoadedForPremiumSKUs());
    if (!m) return (0, i.jsx)(s.Spinner, {
      type: s.Spinner.Type.PULSING_ELLIPSIS,
      className: d.priceSpinner
    });
    let _ = o.default.getForSkuAndInterval(t, n),
      E = null != _ ? (0, u.getFormattedPriceForPlan)(_, void 0, !1, f) : null;
    return (0, i.jsxs)(s.Heading, {
      color: "always-white",
      variant: "heading-md/medium",
      className: l(d.pricePerInterval, r),
      children: [(0, i.jsx)("span", {
        className: d.price,
        children: E
      }), " / ", (0, u.getIntervalStringAsNoun)(n)]
    })
  }