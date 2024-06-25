var s = n(470079),
  a = n(442837),
  i = n(78839),
  o = n(231338);
t.Z = function(e) {
  let {
    subscriptionFilter: t
  } = e, n = (0, a.e7)([i.ZP], () => i.ZP.getSubscriptions(!0)), r = s.useMemo(() => null == n ? [] : Object.values(n).filter(e => !!(e.type === o.NY.PREMIUM && (null == t || t(e)) && (0, i.sE)(e)) || !1), [n, t]);
  return r.sort((e, t) => {
    var n, s;
    let a = null !== (n = e.paymentGateway) && void 0 !== n ? n : 0,
      i = null !== (s = t.paymentGateway) && void 0 !== s ? s : 0;
    return a < i ? -1 : a > i ? 1 : 0
  }), r
}