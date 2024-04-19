"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  o = n("937615"),
  i = n("474936"),
  l = n("689938"),
  u = n("188537");

function c(e) {
  let {
    price: t,
    currency: n,
    intervalType: r,
    className: c,
    intervalCount: d = 1,
    isPrepaidPaymentSource: p = !1
  } = e, f = (0, o.formatPrice)(t, n), C = null;
  return r === i.SubscriptionIntervalTypes.YEAR ? C = l.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: f
  }) : r === i.SubscriptionIntervalTypes.MONTH && 1 === d ? C = l.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: f
  }) : r === i.SubscriptionIntervalTypes.MONTH && d > 1 && (C = l.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: f,
    intervalCount: d
  })), (0, a.jsx)("div", {
    className: s()(u.pricePerInterval, c),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == r || p ? (0, a.jsx)("strong", {
      children: f
    }) : C
  })
}