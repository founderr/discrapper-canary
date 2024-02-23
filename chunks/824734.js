"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  a = n("153160"),
  l = n("646718"),
  o = n("782340"),
  u = n("513600");

function c(e) {
  let {
    price: t,
    currency: n,
    intervalType: s,
    className: c,
    intervalCount: d = 1,
    isPrepaidPaymentSource: _ = !1
  } = e, f = (0, a.formatPrice)(t, n), E = null;
  return s === l.SubscriptionIntervalTypes.YEAR ? E = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: f
  }) : s === l.SubscriptionIntervalTypes.MONTH && 1 === d ? E = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: f
  }) : s === l.SubscriptionIntervalTypes.MONTH && d > 1 && (E = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: f,
    intervalCount: d
  })), (0, r.jsx)("div", {
    className: i(u.pricePerInterval, c),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == s || _ ? (0, r.jsx)("strong", {
      children: f
    }) : E
  })
}