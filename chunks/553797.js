"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("937615"),
  l = a("474936"),
  o = a("689938"),
  u = a("741985");

function c(e) {
  let {
    price: t,
    currency: a,
    intervalType: r,
    className: c,
    intervalCount: d = 1,
    isPrepaidPaymentSource: I = !1
  } = e, _ = (0, i.formatPrice)(t, a), T = null;
  return r === l.SubscriptionIntervalTypes.YEAR ? T = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: _
  }) : r === l.SubscriptionIntervalTypes.MONTH && 1 === d ? T = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: _
  }) : r === l.SubscriptionIntervalTypes.MONTH && d > 1 && (T = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: _,
    intervalCount: d
  })), (0, n.jsx)("div", {
    className: s()(u.pricePerInterval, c),
    "data-testid": "PricePerInterval-".concat(a),
    children: null == r || I ? (0, n.jsx)("strong", {
      children: _
    }) : T
  })
}