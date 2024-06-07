"use strict";
n.r(t), n.d(t, {
  useSubscriptionEntitlements: function() {
    return _
  },
  useUnsupportedExternalSubscriptionModalHandler: function() {
    return c
  }
});
var a = n("470079"),
  r = n("442837"),
  s = n("668781"),
  l = n("509545"),
  i = n("580130"),
  u = n("74538"),
  o = n("231338"),
  d = n("689938");

function c(e, t, n) {
  a.useEffect(() => {
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (s.default.show({
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

function _(e, t) {
  let n = (0, r.useStateFromStores)([l.default], () => null != e ? l.default.get(e) : null),
    s = (0, r.useStateFromStores)([i.default], () => {
      var e;
      return null != n && null !== (e = i.default.getForSku(n.skuId)) && void 0 !== e ? e : f
    }),
    o = a.useMemo(() => Array.from(s).filter(e => {
      let {
        parentId: t,
        consumed: n
      } = e;
      return null != t && !n
    }), [s]);
  return {
    hasEntitlements: !t && null != n && null != o && o.length >= u.default.getIntervalMonths(n.interval, n.intervalCount),
    entitlements: o
  }
}