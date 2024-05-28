"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  a = n("937615"),
  r = n("474936"),
  u = n("689938"),
  o = n("741985");

function c(e) {
  let {
    price: t,
    currency: n,
    intervalType: l,
    className: c,
    intervalCount: d = 1,
    isPrepaidPaymentSource: m = !1
  } = e, p = (0, a.formatPrice)(t, n), f = null;
  return l === r.SubscriptionIntervalTypes.YEAR ? f = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: p
  }) : l === r.SubscriptionIntervalTypes.MONTH && 1 === d ? f = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: p
  }) : l === r.SubscriptionIntervalTypes.MONTH && d > 1 && (f = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: p,
    intervalCount: d
  })), (0, i.jsx)("div", {
    className: s()(o.pricePerInterval, c),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == l || m ? (0, i.jsx)("strong", {
      children: p
    }) : f
  })
}