"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var r = s("120356"),
  l = s.n(r),
  i = s("937615"),
  n = s("474936"),
  c = s("689938"),
  u = s("741985");

function o(e) {
  let {
    price: t,
    currency: s,
    intervalType: r,
    className: o,
    intervalCount: d = 1,
    isPrepaidPaymentSource: E = !1
  } = e, _ = (0, i.formatPrice)(t, s), I = null;
  return r === n.SubscriptionIntervalTypes.YEAR ? I = c.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: _
  }) : r === n.SubscriptionIntervalTypes.MONTH && 1 === d ? I = c.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: _
  }) : r === n.SubscriptionIntervalTypes.MONTH && d > 1 && (I = c.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: _,
    intervalCount: d
  })), (0, a.jsx)("div", {
    className: l()(u.pricePerInterval, o),
    "data-testid": "PricePerInterval-".concat(s),
    children: null == r || E ? (0, a.jsx)("strong", {
      children: _
    }) : I
  })
}