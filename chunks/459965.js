t.d(n, {
  H: function() {
    return _
  },
  w: function() {
    return d
  }
});
var r = t(470079),
  s = t(442837),
  a = t(668781),
  l = t(509545),
  i = t(580130),
  o = t(74538),
  u = t(231338),
  c = t(689938);

function d(e, n, t) {
  r.useEffect(() => {
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !t && (a.Z.show({
      title: c.Z.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: u.Vz[e.paymentGateway]
      }),
      body: c.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
        paymentGatewayName: u.Vz[e.paymentGateway],
        subscriptionManagementLink: (0, o.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: c.Z.Messages.OKAY
    }), n())
  }, [e])
}
let I = [];

function _(e, n) {
  let t = (0, s.e7)([l.Z], () => null != e ? l.Z.get(e) : null),
    a = (0, s.e7)([i.Z], () => {
      var e;
      return null != t && null !== (e = i.Z.getForSku(t.skuId)) && void 0 !== e ? e : I
    }),
    u = r.useMemo(() => Array.from(a).filter(e => {
      let {
        parentId: n,
        consumed: t
      } = e;
      return null != n && !t
    }), [a]);
  return {
    hasEntitlements: !n && null != t && null != u && u.length >= o.ZP.getIntervalMonths(t.interval, t.intervalCount),
    entitlements: u
  }
}