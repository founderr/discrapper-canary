"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  r = n("153160"),
  o = n("646718"),
  a = n("782340"),
  u = n("552033");

function d(e) {
  let {
    price: t,
    currency: n,
    intervalType: i,
    className: d,
    intervalCount: c = 1,
    isPrepaidPaymentSource: f = !1
  } = e, p = (0, r.formatPrice)(t, n), h = null;
  return i === o.SubscriptionIntervalTypes.YEAR ? h = a.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: p
  }) : i === o.SubscriptionIntervalTypes.MONTH && 1 === c ? h = a.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: p
  }) : i === o.SubscriptionIntervalTypes.MONTH && c > 1 && (h = a.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: p,
    intervalCount: c
  })), (0, l.jsx)("div", {
    className: s(u.pricePerInterval, d),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == i || f ? (0, l.jsx)("strong", {
      children: p
    }) : h
  })
}