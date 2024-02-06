"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("153160"),
  a = n("646718"),
  o = n("782340"),
  u = n("552033");

function c(e) {
  let {
    price: t,
    currency: n,
    intervalType: s,
    className: c,
    intervalCount: d = 1,
    isPrepaidPaymentSource: f = !1
  } = e, h = (0, i.formatPrice)(t, n), p = null;
  return s === a.SubscriptionIntervalTypes.YEAR ? p = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: h
  }) : s === a.SubscriptionIntervalTypes.MONTH && 1 === d ? p = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: h
  }) : s === a.SubscriptionIntervalTypes.MONTH && d > 1 && (p = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: h,
    intervalCount: d
  })), (0, r.jsx)("div", {
    className: l(u.pricePerInterval, c),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == s || f ? (0, r.jsx)("strong", {
      children: h
    }) : p
  })
}