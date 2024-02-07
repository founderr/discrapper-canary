"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("153160"),
  i = n("646718"),
  o = n("782340"),
  u = n("552033");

function c(e) {
  let {
    price: t,
    currency: n,
    intervalType: r,
    className: c,
    intervalCount: d = 1,
    isPrepaidPaymentSource: f = !1
  } = e, h = (0, a.formatPrice)(t, n), E = null;
  return r === i.SubscriptionIntervalTypes.YEAR ? E = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: h
  }) : r === i.SubscriptionIntervalTypes.MONTH && 1 === d ? E = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: h
  }) : r === i.SubscriptionIntervalTypes.MONTH && d > 1 && (E = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: h,
    intervalCount: d
  })), (0, s.jsx)("div", {
    className: l(u.pricePerInterval, c),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == r || f ? (0, s.jsx)("strong", {
      children: h
    }) : E
  })
}