"use strict";
n.r(t), n.d(t, {
  useIsPrepaidPaymentPastDue: function() {
    return f
  }
});
var s = n("866227"),
  r = n.n(s),
  a = n("446674"),
  l = n("357957"),
  i = n("10514"),
  u = n("521012"),
  c = n("719923"),
  o = n("49111"),
  d = n("843455");

function f() {
  let e = (0, a.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    t = (0, a.useStateFromStores)([i.default], () => null != e && null != e.planIdFromItems ? i.default.get(null == e ? void 0 : e.planIdFromItems) : null),
    n = (0, a.useStateFromStores)([l.default], () => null != e && null != e.paymentSourceId ? l.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    s = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
    f = (null == e ? void 0 : e.status) === o.SubscriptionStatusTypes.PAST_DUE ? r().diff(r(e.currentPeriodStart), "days") : 0;
  return !!(null != e && null != t && (0, c.isPremiumBaseSubscriptionPlan)(t.id)) && s && f >= 0 && f <= (0, c.getBillingGracePeriodDays)(e) && e.status === o.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
}