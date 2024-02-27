"use strict";
n.r(t), n.d(t, {
  useUnsupportedExternalSubscriptionModalHandler: function() {
    return c
  },
  useSubscriptionEntitlements: function() {
    return I
  }
});
var a = n("884691"),
  l = n("446674"),
  i = n("404118"),
  r = n("10514"),
  s = n("437712"),
  u = n("719923"),
  o = n("843455"),
  d = n("782340");

function c(e, t, n) {
  a.useEffect(() => {
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (i.default.show({
      title: d.default.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
      }),
      body: d.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
        paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
        subscriptionManagementLink: (0, u.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: d.default.Messages.OKAY
    }), t())
  }, [e])
}
let f = [];

function I(e, t) {
  let n = (0, l.useStateFromStores)([r.default], () => null != e ? r.default.get(e) : null),
    i = (0, l.useStateFromStores)([s.default], () => {
      var e;
      return null != n && null !== (e = s.default.getForSku(n.skuId)) && void 0 !== e ? e : f
    }),
    o = a.useMemo(() => Array.from(i).filter(e => {
      let {
        parentId: t,
        consumed: n
      } = e;
      return null != t && !n
    }), [i]),
    d = !t && null != n && null != o && o.length >= u.default.getIntervalMonths(n.interval, n.intervalCount);
  return {
    hasEntitlements: d,
    entitlements: o
  }
}