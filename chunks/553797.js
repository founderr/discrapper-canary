"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("735250");
r("470079");
var s = r("803997"),
  a = r.n(s),
  i = r("937615"),
  l = r("474936"),
  c = r("689938"),
  u = r("188537");

function o(e) {
  let {
    price: t,
    currency: r,
    intervalType: s,
    className: o,
    intervalCount: d = 1,
    isPrepaidPaymentSource: f = !1
  } = e, p = (0, i.formatPrice)(t, r), m = null;
  return s === l.SubscriptionIntervalTypes.YEAR ? m = c.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: p
  }) : s === l.SubscriptionIntervalTypes.MONTH && 1 === d ? m = c.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: p
  }) : s === l.SubscriptionIntervalTypes.MONTH && d > 1 && (m = c.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: p,
    intervalCount: d
  })), (0, n.jsx)("div", {
    className: a()(u.pricePerInterval, o),
    "data-testid": "PricePerInterval-".concat(r),
    children: null == s || f ? (0, n.jsx)("strong", {
      children: p
    }) : m
  })
}