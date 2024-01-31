"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  r = n("153160"),
  o = n("646718"),
  a = n("782340"),
  u = n("552033");

function d(e) {
  let {
    price: t,
    currency: n,
    intervalType: s,
    className: d,
    intervalCount: c = 1,
    isPrepaidPaymentSource: f = !1
  } = e, p = (0, r.formatPrice)(t, n), h = null;
  return s === o.SubscriptionIntervalTypes.YEAR ? h = a.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: p
  }) : s === o.SubscriptionIntervalTypes.MONTH && 1 === c ? h = a.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: p
  }) : s === o.SubscriptionIntervalTypes.MONTH && c > 1 && (h = a.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: p,
    intervalCount: c
  })), (0, l.jsx)("div", {
    className: i(u.pricePerInterval, d),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == s || f ? (0, l.jsx)("strong", {
      children: p
    }) : h
  })
}