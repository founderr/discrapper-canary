"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var s = n("470079"),
  a = n("442837"),
  i = n("821849"),
  l = n("509545"),
  r = n("78839"),
  u = n("289393"),
  o = n("697227"),
  d = n("981631");

function c(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.getSubscriptions()),
    n = s.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t)) n.type === d.SubscriptionTypes.GUILD && (e[(0, o.getRoleSubscriptionPlanId)(n)] = n);
      return e
    }, [t]),
    {
      activeSubscription: c,
      activeSubscriptionListing: E
    } = (0, a.useStateFromStoresObject)([u.default], () => {
      var t;
      let s, a = null,
        i = null != e ? u.default.getSubscriptionGroupListing(e) : null;
      for (let e of null !== (t = null == i ? void 0 : i.subscription_listings_ids) && void 0 !== t ? t : []) {
        let t = u.default.getSubscriptionListing(e),
          i = null == t ? void 0 : t.subscription_plans[0].id;
        if (null == i) continue;
        let l = n[i];
        if (null != l) {
          a = l, s = t;
          break
        }
      }
      return {
        activeSubscription: a,
        activeSubscriptionListing: s
      }
    }),
    f = null == E ? void 0 : E.subscription_plans[0],
    _ = null == f ? void 0 : f.id,
    T = null == f ? void 0 : f.sku_id,
    I = (0, a.useStateFromStores)([l.default], () => null != _ ? l.default.get(_) : null),
    S = null == E ? void 0 : E.soft_deleted;
  return s.useEffect(() => {
    null == I && null != T && !l.default.isFetchingForSKU(T) && (0, i.fetchSubscriptionPlansForSKU)(T, void 0, void 0, S)
  }, [I, T, S]), {
    activeSubscription: c,
    activeSubscriptionListing: E,
    activeSubscriptionPlanFromStore: I
  }
}