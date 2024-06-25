n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var s = n(470079),
  i = n(442837),
  l = n(821849),
  a = n(509545),
  r = n(78839),
  o = n(289393),
  c = n(697227),
  u = n(981631);

function d(e) {
  let t = (0, i.e7)([r.ZP], () => r.ZP.getSubscriptions()),
    n = s.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t)) n.type === u.NYc.GUILD && (e[(0, c.W)(n)] = n);
      return e
    }, [t]),
    {
      activeSubscription: d,
      activeSubscriptionListing: E
    } = (0, i.cj)([o.Z], () => {
      var t;
      let s, i = null,
        l = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
      for (let e of null !== (t = null == l ? void 0 : l.subscription_listings_ids) && void 0 !== t ? t : []) {
        let t = o.Z.getSubscriptionListing(e),
          l = null == t ? void 0 : t.subscription_plans[0].id;
        if (null == l) continue;
        let a = n[l];
        if (null != a) {
          i = a, s = t;
          break
        }
      }
      return {
        activeSubscription: i,
        activeSubscriptionListing: s
      }
    }),
    _ = null == E ? void 0 : E.subscription_plans[0],
    I = null == _ ? void 0 : _.id,
    T = null == _ ? void 0 : _.sku_id,
    m = (0, i.e7)([a.Z], () => null != I ? a.Z.get(I) : null),
    N = null == E ? void 0 : E.soft_deleted;
  return s.useEffect(() => {
    null == m && null != T && !a.Z.isFetchingForSKU(T) && (0, l.GZ)(T, void 0, void 0, N)
  }, [m, T, N]), {
    activeSubscription: d,
    activeSubscriptionListing: E,
    activeSubscriptionPlanFromStore: m
  }
}