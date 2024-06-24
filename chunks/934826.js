t.d(n, {
  Z: function() {
    return d
  }
}), t(47120);
var i = t(470079),
  l = t(442837),
  s = t(821849),
  r = t(509545),
  a = t(78839),
  o = t(289393),
  u = t(697227),
  c = t(981631);

function d(e) {
  let n = (0, l.e7)([a.ZP], () => a.ZP.getSubscriptions()),
    t = i.useMemo(() => {
      if (null == n) return {};
      let e = {};
      for (let t of Object.values(n)) t.type === c.NYc.GUILD && (e[(0, u.W)(t)] = t);
      return e
    }, [n]),
    {
      activeSubscription: d,
      activeSubscriptionListing: _
    } = (0, l.cj)([o.Z], () => {
      var n;
      let i, l = null,
        s = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
      for (let e of null !== (n = null == s ? void 0 : s.subscription_listings_ids) && void 0 !== n ? n : []) {
        let n = o.Z.getSubscriptionListing(e),
          s = null == n ? void 0 : n.subscription_plans[0].id;
        if (null == s) continue;
        let r = t[s];
        if (null != r) {
          l = r, i = n;
          break
        }
      }
      return {
        activeSubscription: l,
        activeSubscriptionListing: i
      }
    }),
    I = null == _ ? void 0 : _.subscription_plans[0],
    E = null == I ? void 0 : I.id,
    C = null == I ? void 0 : I.sku_id,
    m = (0, l.e7)([r.Z], () => null != E ? r.Z.get(E) : null),
    S = null == _ ? void 0 : _.soft_deleted;
  return i.useEffect(() => {
    null == m && null != C && !r.Z.isFetchingForSKU(C) && (0, s.GZ)(C, void 0, void 0, S)
  }, [m, C, S]), {
    activeSubscription: d,
    activeSubscriptionListing: _,
    activeSubscriptionPlanFromStore: m
  }
}