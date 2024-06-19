t.d(e, {
  H: function() {
    return E
  },
  w: function() {
    return d
  }
});
var l = t(470079),
  u = t(442837),
  i = t(668781),
  r = t(509545),
  a = t(580130),
  o = t(74538),
  s = t(231338),
  c = t(689938);

function d(n, e, t) {
  l.useEffect(() => {
    null != n && n.isPurchasedExternally && null != n.paymentGateway && !t && (i.Z.show({
      title: c.Z.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: s.Vz[n.paymentGateway]
      }),
      body: c.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
        paymentGatewayName: s.Vz[n.paymentGateway],
        subscriptionManagementLink: (0, o.JE)(n.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: c.Z.Messages.OKAY
    }), e())
  }, [n])
}
let _ = [];

function E(n, e) {
  let t = (0, u.e7)([r.Z], () => null != n ? r.Z.get(n) : null),
    i = (0, u.e7)([a.Z], () => {
      var n;
      return null != t && null !== (n = a.Z.getForSku(t.skuId)) && void 0 !== n ? n : _
    }),
    s = l.useMemo(() => Array.from(i).filter(n => {
      let {
        parentId: e,
        consumed: t
      } = n;
      return null != e && !t
    }), [i]);
  return {
    hasEntitlements: !e && null != t && null != s && s.length >= o.ZP.getIntervalMonths(t.interval, t.intervalCount),
    entitlements: s
  }
}