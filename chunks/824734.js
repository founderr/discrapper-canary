"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  l = n("153160"),
  i = n("646718"),
  u = n("782340"),
  c = n("513600");

function o(e) {
  let {
    price: t,
    currency: n,
    intervalType: r,
    className: o,
    intervalCount: d = 1,
    isPrepaidPaymentSource: f = !1
  } = e, m = (0, l.formatPrice)(t, n), _ = null;
  return r === i.SubscriptionIntervalTypes.YEAR ? _ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: m
  }) : r === i.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: m
  }) : r === i.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: m,
    intervalCount: d
  })), (0, s.jsx)("div", {
    className: a(c.pricePerInterval, o),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == r || f ? (0, s.jsx)("strong", {
      children: m
    }) : _
  })
}