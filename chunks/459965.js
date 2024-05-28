"use strict";
s.r(t), s.d(t, {
  useSubscriptionEntitlements: function() {
    return m
  },
  useUnsupportedExternalSubscriptionModalHandler: function() {
    return o
  }
});
var a = s("470079"),
  n = s("442837"),
  r = s("668781"),
  l = s("509545"),
  u = s("580130"),
  i = s("74538"),
  c = s("231338"),
  d = s("689938");

function o(e, t, s) {
  a.useEffect(() => {
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !s && (r.default.show({
      title: d.default.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: c.PaymentGatewayToFriendlyName[e.paymentGateway]
      }),
      body: d.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
        paymentGatewayName: c.PaymentGatewayToFriendlyName[e.paymentGateway],
        subscriptionManagementLink: (0, i.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: d.default.Messages.OKAY
    }), t())
  }, [e])
}
let f = [];

function m(e, t) {
  let s = (0, n.useStateFromStores)([l.default], () => null != e ? l.default.get(e) : null),
    r = (0, n.useStateFromStores)([u.default], () => {
      var e;
      return null != s && null !== (e = u.default.getForSku(s.skuId)) && void 0 !== e ? e : f
    }),
    c = a.useMemo(() => Array.from(r).filter(e => {
      let {
        parentId: t,
        consumed: s
      } = e;
      return null != t && !s
    }), [r]);
  return {
    hasEntitlements: !t && null != s && null != c && c.length >= i.default.getIntervalMonths(s.interval, s.intervalCount),
    entitlements: c
  }
}