"use strict";
s.r(t), s.d(t, {
  useIsPrepaidPaymentPastDue: function() {
    return f
  }
});
var a = s("913527"),
  n = s.n(a),
  r = s("442837"),
  l = s("853872"),
  u = s("509545"),
  i = s("78839"),
  c = s("74538"),
  d = s("981631"),
  o = s("231338");

function f() {
  let e = (0, r.useStateFromStores)([i.default], () => i.default.getPremiumTypeSubscription()),
    t = (0, r.useStateFromStores)([u.default], () => null != e && null != e.planIdFromItems ? u.default.get(null == e ? void 0 : e.planIdFromItems) : null),
    s = (0, r.useStateFromStores)([l.default], () => null != e && null != e.paymentSourceId ? l.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    a = null != s && o.PREPAID_PAYMENT_SOURCES.has(s.type),
    f = (null == e ? void 0 : e.status) === d.SubscriptionStatusTypes.PAST_DUE ? n()().diff(n()(e.currentPeriodStart), "days") : 0;
  return !!(null != e && null != t && (0, c.isPremiumBaseSubscriptionPlan)(t.id)) && a && f >= 0 && f <= (0, c.getBillingGracePeriodDaysAndExpiresDate)(e).days && e.status === d.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
}