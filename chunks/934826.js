"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var i = n("470079"),
  a = n("442837"),
  s = n("821849"),
  r = n("509545"),
  l = n("78839"),
  u = n("289393"),
  o = n("697227"),
  d = n("981631");

function c(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getSubscriptions()),
    n = i.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t)) n.type === d.SubscriptionTypes.GUILD && (e[(0, o.getRoleSubscriptionPlanId)(n)] = n);
      return e
    }, [t]),
    {
      activeSubscription: c,
      activeSubscriptionListing: f
    } = (0, a.useStateFromStoresObject)([u.default], () => {
      var t;
      let i, a = null,
        s = null != e ? u.default.getSubscriptionGroupListing(e) : null;
      for (let e of null !== (t = null == s ? void 0 : s.subscription_listings_ids) && void 0 !== t ? t : []) {
        let t = u.default.getSubscriptionListing(e),
          s = null == t ? void 0 : t.subscription_plans[0].id;
        if (null == s) continue;
        let r = n[s];
        if (null != r) {
          a = r, i = t;
          break
        }
      }
      return {
        activeSubscription: a,
        activeSubscriptionListing: i
      }
    }),
    E = null == f ? void 0 : f.subscription_plans[0],
    _ = null == E ? void 0 : E.id,
    T = null == E ? void 0 : E.sku_id,
    I = (0, a.useStateFromStores)([r.default], () => null != _ ? r.default.get(_) : null),
    S = null == f ? void 0 : f.soft_deleted;
  return i.useEffect(() => {
    null == I && null != T && !r.default.isFetchingForSKU(T) && (0, s.fetchSubscriptionPlansForSKU)(T, void 0, void 0, S)
  }, [I, T, S]), {
    activeSubscription: c,
    activeSubscriptionListing: f,
    activeSubscriptionPlanFromStore: I
  }
}