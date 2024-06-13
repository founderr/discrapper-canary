"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("47120");
var n = s("470079"),
  i = s("442837"),
  l = s("821849"),
  a = s("509545"),
  r = s("78839"),
  u = s("289393"),
  o = s("697227"),
  d = s("981631");

function c(e) {
  let t = (0, i.useStateFromStores)([r.default], () => r.default.getSubscriptions()),
    s = n.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let s of Object.values(t)) s.type === d.SubscriptionTypes.GUILD && (e[(0, o.getRoleSubscriptionPlanId)(s)] = s);
      return e
    }, [t]),
    {
      activeSubscription: c,
      activeSubscriptionListing: f
    } = (0, i.useStateFromStoresObject)([u.default], () => {
      var t;
      let n, i = null,
        l = null != e ? u.default.getSubscriptionGroupListing(e) : null;
      for (let e of null !== (t = null == l ? void 0 : l.subscription_listings_ids) && void 0 !== t ? t : []) {
        let t = u.default.getSubscriptionListing(e),
          l = null == t ? void 0 : t.subscription_plans[0].id;
        if (null == l) continue;
        let a = s[l];
        if (null != a) {
          i = a, n = t;
          break
        }
      }
      return {
        activeSubscription: i,
        activeSubscriptionListing: n
      }
    }),
    _ = null == f ? void 0 : f.subscription_plans[0],
    I = null == _ ? void 0 : _.id,
    C = null == _ ? void 0 : _.sku_id,
    m = (0, i.useStateFromStores)([a.default], () => null != I ? a.default.get(I) : null),
    E = null == f ? void 0 : f.soft_deleted;
  return n.useEffect(() => {
    null == m && null != C && !a.default.isFetchingForSKU(C) && (0, l.fetchSubscriptionPlansForSKU)(C, void 0, void 0, E)
  }, [m, C, E]), {
    activeSubscription: c,
    activeSubscriptionListing: f,
    activeSubscriptionPlanFromStore: m
  }
}