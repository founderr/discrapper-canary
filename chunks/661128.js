"use strict";
n.r(t), n.d(t, {
  useUnsupportedExternalSubscriptionModalHandler: function() {
    return d
  },
  useSubscriptionEntitlements: function() {
    return I
  }
});
var r = n("884691"),
  i = n("446674"),
  s = n("404118"),
  l = n("10514"),
  u = n("437712"),
  a = n("719923"),
  o = n("843455"),
  c = n("782340");

function d(e, t, n) {
  r.useEffect(() => {
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (s.default.show({
      title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
      }),
      body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
        paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
        subscriptionManagementLink: (0, a.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: c.default.Messages.OKAY
    }), t())
  }, [e])
}
let f = [];

function I(e, t) {
  let n = (0, i.useStateFromStores)([l.default], () => null != e ? l.default.get(e) : null),
    s = (0, i.useStateFromStores)([u.default], () => {
      var e;
      return null != n && null !== (e = u.default.getForSku(n.skuId)) && void 0 !== e ? e : f
    }),
    o = r.useMemo(() => Array.from(s).filter(e => {
      let {
        parentId: t,
        consumed: n
      } = e;
      return null != t && !n
    }), [s]),
    c = !t && null != n && null != o && o.length >= a.default.getIntervalMonths(n.interval, n.intervalCount);
  return {
    hasEntitlements: c,
    entitlements: o
  }
}